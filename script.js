function calcularImpuestos(){
    var valor = document.querySelector('#valor');
    var resultado = document.querySelector('.resultado');
    if(valor.value===''){
        resultado.textContent = '$0.00'
    }else{
    valor = parseInt(document.querySelector('#valor').value);
    var impuesto = (valor*65)/100;
    var total = valor + impuesto;
    resultado.textContent = '$' + total.toFixed(2);
    }
}
setInterval(calcularImpuestos,1)