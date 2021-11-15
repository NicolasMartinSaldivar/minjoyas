let product1 = new Product(1,"anillo 1 ",500,"anillo de oro");
let product2 = new Product(2,"anillo 2 ",400,"anillo de plata");


let arregloProduct = new Array();
arregloProduct.push(product1);
arregloProduct.push(product2);

$(document).ready(()=>{
    for(let i=0; i<arregloProduct.length;i++){
        let objetoProduct = arregloProduct[i];
        $('#carrito').append(
            `<div id="div${objetoProduct.getId()} ">
            <h2>${objetoProduct.getTitle()}</h2>
            <p>${objetoProduct.description}</p>
            <button id="btn${objetoProduct.getId()}">Compralo!</button>
            </div>       
            `
        );

        $(`#btn${objetoProduct.getId()}`).on('click',function(){
            alert(`Compra ${objetoProduct.getName()}`);

        $(`#div${objetoProduct.getId()}`).fadeOut(1000);
        })
    }
})

$(document).ready(function(){
    $('#botonEnviar').click(function(){
        if(validarForm()){
            setTimeout(()=>{
                let resultado = Math.floor(Math.random()*2);
                mostrarMensaje(res);
            },2000)

        }


    })
})
function mostrarMensaje(res){
    $('#formulario').fadeOut("slow");
    if(res ==0){
        $('#exito').delay(500).fadeIn("slow");
    }else{
        $('#fracaso').delay(500).fadeIn("slow");
    }
}

function validarForm(){
    if($('#nombre').val() == ''){
        alert('El campo nombre no puede estar vacío');
        $('#nombre').focus();
        return false;
    }
    if($('#celular').val()==''){
        alert('El campo celular no puede estar vacío');
        $('#celular').focus();
        return false;
    }
    if($('#correo').val()==''){
        alert('El campo correo no puede estar vacío');
        return false;
    }

    return false;

}


/*Visibilidad de Guia de pasos*/

jQuery(function(){
    $("#button").on("click",function(){
        if($("#guia").is(":visible")){
            $("#guia").hide();
            $("#button").text("Mostrar");
        }else{
            $("#guia").show();
            $("#button").text("Ocultar");
        }
    })
})