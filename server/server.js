const router = require("express").Router();
const admin = require("firebase-admin")
var serviceAccount = require("../firebaseclave.json");
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