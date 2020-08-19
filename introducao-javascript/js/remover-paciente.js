var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("table")

table.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.remove();

    //event.target.parentNode.remove();

})