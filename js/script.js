function calcularImpuestos(){
    var divisaIngresada = document.querySelector("#monedaIngresada").value;
    var divisaFinal = document.querySelector("#monedaFinal").value;
    var valor = document.querySelector('#valor');
    var resultado = document.querySelector('.resultado');

    if(valor.value===''){
        resultado.textContent = '$0.00'
    }else{
        valor = parseInt(document.querySelector('#valor').value);
        if((divisaFinal=="arg" && divisaIngresada=="arg") || (divisaFinal=="usd" && divisaIngresada=="usd")){
            resultado.textContent = '$' + impuesto(valor).toFixed(2);
        }
        if(divisaFinal=="usd" && divisaIngresada=="arg"){
            resultado.textContent = '$' + (impuesto(valor)/parseInt(usd.textContent)).toFixed(2);
        }
        if(divisaFinal=="arg" && divisaIngresada=="usd"){
            resultado.textContent = '$' + (impuesto(valor)*parseInt(usd.textContent)).toFixed(2);
        }
    
    }
}
setInterval(calcularImpuestos,1)

function impuesto(valor){
    return (valor*1.65)
}



