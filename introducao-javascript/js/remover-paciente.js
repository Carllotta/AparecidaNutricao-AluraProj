var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("table")

table.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },5000);

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;

    // paiDoAlvo.remove();

    //event.target.parentNode.remove();

})