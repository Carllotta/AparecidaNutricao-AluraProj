var titulo = document.querySelector(".titulo");

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso/ (altura*altura);

console.log(imc);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

