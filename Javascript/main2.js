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


