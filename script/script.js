let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById ("skills");
    var dispancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(dispancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sql");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("bootstrap");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detector de scrolling para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
} 

