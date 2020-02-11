var texto = "um textao meu parceiro";
var int = -7;
var double = 10.5;
var bool = false;
var bool2 = true;
var nome = "nome";
var nome_1 = prompt ('digite seu nome');

//alert(int + double)
//console.log(int+double)
//document.write("Ola, "+nome+" tudo bem?")
alert("Ola, "+nome_1+" tudo bem?");

//identico === verifica se são iguais e do mesmo tipo
// !== nao identifico verifica se não são iguais e nem do mesmo tipo

var nota1 = parseFloat(prompt("digite a nota 1"));
var nota2 = parseFloat(prompt("digite a nota 2"));
var media = (nota1+nota2);
console.log(nota1.toString()+nota2.toString())
console.log(media/2);
if(((nota1+nota2)/2)>= 7){
	alert("aprovado");
}else{
	alert("reprovado");
}

var result = undefined;
console.log(result = 7+5 == 14 && 7 < 14 ? (true) : false)