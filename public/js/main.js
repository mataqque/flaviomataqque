var end = new Date('02/17/2020 9:30 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

// setInterval(() => {
//         var now = new Date();
//         var distance = end - now;
//         var days = Math.floor(distance / _day);
//         var hours = Math.floor((distance % _day) / _hour);
//         var minutes = Math.floor((distance % _hour) / _minute);
//         var seconds = Math.floor((distance % _minute) / _second);
//         console.log(days,hours,minutes,seconds)
// },1000 
// );
function initParticles(){
particlesJS("particles-js", 
{"particles":{"number":{"value":80,
                "density":{"enable":true,
                "value_area":800}},
                "color":{"value":"#ffffff"},
                "shape":{"type":"circle",
                        "stroke":{"width":0,"color":"#000000"},
                        "polygon":{"nb_sides":5},
                        "image":{"src":"img/github.svg","width":100,"height":100}
                },"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); };
 requestAnimationFrame(update);
}
document.querySelectorAll(".items-side:nth-child(2)")[0].addEventListener("click",()=>{
        document.querySelector(".items-side:nth-child(1)").classList.add("mover-item");
        document.querySelector(".items-side:nth-child(2)").classList.add("mover-item1");
        document.querySelector(".btn-side").style ="display:block!important"; 
})
document.querySelector(".btn-side").addEventListener("click",()=>{
        document.querySelector(".side-animation").style ="display:none" 
})



document.getElementById("send-message").addEventListener("click",(event)=>{
        event.preventDefault();
        let getMessage = document.getElementById("get-message").value;
        document.getElementById("get-message").value="";
        crear_Mensaje("text-enviado","contenedor-enviado",getMessage);
    });
    function crear_Mensaje(e,Send,getMessage){ 
        let contenedor = crear_complemento(Send);
        var item = document.createElement('div');
        item.textContent=getMessage;
        item.className = e;
        contenedor.appendChild(item)
        document.getElementById("show-message").scrollTop = document.getElementById("show-message").scrollHeight;
    }
    function crear_complemento(e){
        let contenedor = document.createElement('div');
        contenedor.className = e;
        document.getElementById("show-message").appendChild(contenedor);
        let complemento = document.createElement('div');
        complemento.className ="complemento";
        contenedor.appendChild(complemento);
        let complemento2 = document.createElement("div");
        complemento2.className ="triangule";
        contenedor.appendChild(complemento2);
        return contenedor;
    }

    $("#send-message").click(function(event){
        event.preventDefault();
        let getChat = document.getElementById("get-message").value; 
        $.post({
            url:window.location.href,
            data: {text:getChat},
            success: function(msg) {
                let getMessage = msg.result.output.generic[0].text;
                crear_Mensaje("text-recivido","contenedor-recivido",getMessage);
            }
          });
        });
// enviar al ultimo
        document.querySelectorAll(".point")[0].addEventListener("click",minimizarChat);
        function  minimizarChat(){
        if(document.querySelector(".point").id=="false"){
                document.querySelectorAll(".chatbot")[0].classList.add("minimizar");
                document.getElementById("status").classList.add("status-show");
                document.querySelector("#identity>div").classList.add("show-bot");
                document.querySelector(".point").innerHTML='<img src="img/maximizar.svg">'
                document.querySelector(".point").id = "true";
        }
                else if(document.querySelector(".point").id=="true"){
                        document.querySelectorAll(".chatbot")[0].classList.remove("minimizar");
                        document.getElementById("status").classList.remove("status-show");
                        document.querySelector("#identity>div").classList.remove("show-bot");
                        document.querySelector(".point").innerHTML='<img src="img/minimizar.svg">'
                        document.querySelector(".point").id = "false";
                }
        }
                
    initParticles();