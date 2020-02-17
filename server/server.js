const router = require("express").Router();
const admin = require("firebase-admin");
const assistant = require("../ibm-watson/credencial");
const serviceAccount = require("../firebaseclave.json");
const assistantId = "94fb2d63-6ead-44cd-899b-e182c2fa2345";

var ip;
const appAdmin =  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://prueba-a4587.firebaseio.com"
  });
const db = appAdmin.firestore();
router.get("/",(req,res)=>{
   ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
      let data = {ip:ip,fecha:new Date}
      db.collection("IPS-VISITAS").doc(data.ip).set(data)
    res.render("index");
});

router.post("/",(req,res)=>{
   console.log(res.body);
   (function DevolverSession(){
     assistant.createSession({assistantId:assistantId},
       function(error, response){
         if (error) {
           return error;
         } else {
           console.log(response.result.session_id)
           EnviarMessage(response.result.session_id)
         }
       });
   })();
   function EnviarMessage(DatoText){
      var payload = {
          assistantId: assistantId,
          sessionId: DatoText,
          input: {
            message_type: 'text',
            text: req.body.text,
          },
        };
          assistant.message(payload,function(err,data){
              if (err) {
                  res.send(err);
            }else{
              res.send(data);
            }  
      })
   }
});

 router.get("/spanky",(req,res)=>{
    res.render("spanky",{layout:"spanky"})
 });
 
 router.get("/shop1",(req,res)=>{
    res.render("shop",{layout:"shop"})
 });
 router.get("/tracker",(req,res)=>{
    res.render("tracker",{layout:"tracker"})
 });
 router.get("/pinterest",(req,res)=>{
    res.render("pinterest",{layout:"pinterest"})
 });


module.exports = router;