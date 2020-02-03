const router = require("express").Router();

router.get("/",(req,res)=>{
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