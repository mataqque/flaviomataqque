$(document).ready(function(){
    var elemento; 
    var elemento1;
    $(".menu_wrapper>li").click(function(){
        $(this).children(".fa-angle-right").css("color","red!important")
        $(this).children(".submenu_wrapper").slideToggle();
    })
    $("ul").click(function(p){
       p.stopPropagation();
    })
    var expandir;
    document.querySelectorAll(".menu_wrapper")[0].addEventListener("click",function(e){
    expandir = e.path[0]

    if(expandir.className == "cerrado"){
        expandir.className = "abierto";
        expandir.children[0].style.transform = "rotate(90deg)"
        expandir.children[0].style.transition = "all 0.6s";
    }else if(expandir.className == "abierto"){
        expandir.className = "cerrado";
        expandir.children[0].style.transform = "rotate(0deg)"
        expandir.children[0].style.transition = "all 0.6s";
    }
})
    document.getElementsByClassName("open_menu")[0].addEventListener("click",function(){
        document.getElementsByClassName("menu_principal")[0].style.setProperty("--tamaño","250px")
        document.getElementsByClassName("open_menu")[0].style.display = "none";
    })
    document.getElementsByClassName("boton_cerrar_contenedor")[0].addEventListener("click",function(){
        document.getElementsByClassName("menu_principal")[0].style.setProperty("--tamaño","0px")
        document.getElementsByClassName("open_menu")[0].style.display = "block";
    })

    window.sr = ScrollReveal();
    sr.reveal('.menu_principal',{duration:3000,origin:'left',distance:'10px'});
    sr.reveal('.Pagina_usuario',{duration:3000,origin:'top',distance:'10px'});
})