// var w = window.innerWidth;
// var h = window.innerHeight;
// var elemento = document.getElementsByClassName("cubos");
// var cant = 6
// console.log(w,h)
// for(var i=0;i<cant;i++){
//     let randomY = Math.floor((Math.random()*h-10)+1)
//     let randomX = Math.floor((Math.random()*w-10)+1)
//     let Tamaño = Math.floor((Math.random()*60)+10)
//     let element = document.createElement("div")
//     element.className = "cubos";
//     element.style = `height:${Tamaño}px;width:${Tamaño}px`;
//     element.style.top = `${randomY}px`;
//     element.style.left = `${randomX}px`;
//     document.getElementsByClassName("position")[0].appendChild(element);
// }

// var Iterar = setInterval(move,100)
// function move(){
//     if(window.innerWidth<w){
//         clearTimeout(Iterar)
//     }
//     for(var i=0;i<cant;i++){
//         let diry = parseInt(elemento[i].style.top);
//         let dirx = parseInt(elemento[i].style.left);
//         elemento[i].style.top = `${diry+7}px`;
//         elemento[i].style.left = `${dirx+2}px`;
//         if(parseInt(elemento[i].style.top)>=h-10 || parseInt(elemento[i].style.left)>= w-50){
//             let randomX = Math.floor((Math.random()*w-40)+1)
//             elemento[i].style.top="0px";
//             elemento[i].style.left=randomX+"px";
//         }
//     }
// }
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
initParticles()