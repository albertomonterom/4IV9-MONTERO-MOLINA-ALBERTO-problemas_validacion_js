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
    var numero3 = parseFloat(document.formulario.numero3.value);
    if (numero1>numero2 && numero1>numero3){
        document.formulario.resultado.value = numero1;
    } else if (numero2>numero1 && numero2>numero3){
        document.formulario.resultado.value = numero2;
    } else {
        document.formulario.resultado.value = numero3;
    }
}

function borrar() {
    document.formulario.resultado.value = "";
    document.formulario.numero1.value = "";
    document.formulario.numero2.value = "";
    document.formulario.numero3.value = "";
}