function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function porcentajes(){
    var primvalor = document.problema5.numestud.value;
    var primresultado = parseInt(primvalor);

    var segvalor = document.problema5.numhomb.value;
    var segresultado = parseInt(segvalor);

    var tervalor = document.problema5.nummuj.value;
    var teresultado = parseInt(tervalor);

    var porcentajehom = (segresultado*100)/primresultado;
    var porcentajemuj = (teresultado*100)/primresultado;

    document.problema5.porcentah.value = porcentajehom+"%";
    document.problema5.porcentam.value = porcentajemuj+"%";
    
}

function borrar(){
    document.problema5.numestud.value= "";
    document.problema5.numhomb.value= "";
    document.problema5.nummuj.value= "";
    document.problema5.porcentah.value= "";
    document.problema5.porcentam.value= "";
}
