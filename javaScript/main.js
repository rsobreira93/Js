
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
   // window.open("https://google.com"); abre em uma nova guia
    window.location.href = "https://google.com"; // abre na mesma guia
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(1, 2));

function validaIdade(idade){
    var  validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade: ");
console.log(validaIdade(idade));

var d = new Date();
alert(d.getMonth()+1);



for(count = 0; count <= 5; count++){
    console.log(count);
}

var count = 0;
while(count < 5){
    console.log(count);
    count ++;
}

var idade = prompt("Qual sua idade:? ");
var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}


var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);

var lista =["maça", "pêra", "laranja"];
lista.push("uva"); adicona elemento  na lista
lista.pop(); //remove o ultimo elementoda lista


console.log(lista[1]);
console.log(lista.length); para ver o tamanho da lista
console.log(lista.reverse()); //para imprimir ao contrario
console.log(lista.toString());
console.log(lista.join(" |"));

var nome = "Romulo Sobreira";
var idade = 27;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos") ;
alert(idade + idade2);
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toLocaleLowerCase());*/