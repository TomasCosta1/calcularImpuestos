var usd = document.querySelector(".usd");
var cambiar = document.querySelector(".cambiar");
var errorNeg = document.querySelector(".errorNeg");
var errorLet = document.querySelector(".errorLet");
var valor = 123*1.3;
usd.textContent = valor;

cambiar.onclick= cambiarValor

function cambiarValor(){
    var newValor= prompt("Ingrese el nuevo valor:")
    if(newValor>0){
        usd.textContent = parseInt(newValor).toFixed(2);
        errorLet.style.display = "none";
        errorNeg.style.display = "none";
    }else if(newValor<=0){
        errorNeg.style.display = "flex";
        errorLet.style.display = "none";
    }else{
        errorLet.style.display = "flex";
        errorNeg.style.display = "none";
    }
}