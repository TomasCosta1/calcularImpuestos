var usd = document.querySelector(".usd");
var cambiar = document.querySelector(".cambiar");
var errorNeg = document.querySelector(".errorNeg");
var errorLet = document.querySelector(".errorLet");
var errorVac = document.querySelector('.errorVac')
var valor = 123*1.3;
var popup = document.querySelector('.promp')
var saveValue = document.querySelector('.saveValue')
usd.textContent = valor;

cambiar.onclick = activarPopup;
saveValue.onclick = cambiarValor

function cambiarValor(){ 
    var newValor = document.querySelector('.newValue').value
    if(newValor>0){
        usd.textContent = parseInt(newValor).toFixed(2);
        errorLet.style.display = "none";
        errorNeg.style.display = "none";
        errorVac.style.display = 'none';
        desactivarPopup()
    }else if(newValor<0){
        errorNeg.style.display = "flex";
        errorLet.style.display = "none";
        errorVac.style.display = 'none';
        desactivarPopup()
    }else if(newValor==''){
        errorLet.style.display = "none";
        errorNeg.style.display = "none";
        errorVac.style.display = 'flex';
        desactivarPopup()
    }
}

function activarPopup(){
    aplicarBlur('10')
    popup.style.display = 'flex';
}

function desactivarPopup(){
    aplicarBlur('0')
    popup.style.display = 'none';
}

function aplicarBlur(cantidad){
    var main = document.querySelector('main')
    var header = document.querySelector('header')
    var footer = document.querySelector('footer')
    main.style.filter= "blur(" + cantidad + "px)"
    header.style.filter= "blur(" + cantidad + "px)"
    footer.style.filter= "blur(" + cantidad + "px)"
}