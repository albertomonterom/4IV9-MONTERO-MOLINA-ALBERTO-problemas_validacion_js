  
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;
    
    var patron = /[0-9\d .]/;
    
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);  
}

function interes(){
    var cant = parseInt(document.getElementById("cantidad").value);
    if(isNaN(cant)){
        alert("No dejes campos vacíos, gracias :)");
    }


    else{
        var interes = cant*0.02;
        var total = cant+interes;

        document.formulario.sueldoti.value="$"+total;
    }
}

function borrar(){
    document.formulario.sueldoti.value="";
    document.formulario.dinero.value="";
}