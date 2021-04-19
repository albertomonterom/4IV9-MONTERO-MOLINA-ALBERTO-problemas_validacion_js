function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo() {
    var numero1 = parseFloat(document.formulario.numero1.value);
    var numero2 = parseFloat(document.formulario.numero2.value);
    if (numero1 === numero2) {
        document.formulario.resultado.value = numero1*numero2;
    } else if (numero1>numero2){
        document.formulario.resultado.value = numero1-numero2;
    } else {
        document.formulario.resultado.value = numero1+numero2;
    }
}

function borrar() {
    document.formulario.resultado.value = "";
    document.formulario.numero1.value = "";
    document.formulario.numero2.value = "";
}

