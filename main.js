class ShoppingCart {
    constructor() {
        let cart = [];
        this.add = function (product) {
            cart.push(product);
        };
        this.get = function () {
            return cart;
        };
        this.getById = function (id) {
            let product = [];
            cart.forEach(function (currentProduct) {
                if (currentProduct.id === id) {
                    product.push(currentProduct);
                }
            });
            return product;
        };
    }
}

class Producto {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    getTitle(){
        return this.name + this.price;
    }
    getPrice(){
        return this.price;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    
}

$(document).ready(()=>{
    const ANILLOSJSON = "../Javascript/anillos.json";

    $('.producto').prepend(`<div>
                            <button class="btn-comprar">Comprar</button>
                            </div>`)
    $('.btn-comprar').click(()=>{
        $.get(ANILLOSJSON,function(respuesta,estado){
            
            if(estado = "success"){
                let misProductos = respuesta;
                const enJSON =  JSON.stringify(Producto);

                for(const producto of misProductos){
                    $('.producto').append(`<div class="producto">
                                            <h3>${producto.name}</h3>
                                            <img ${producto.image}/>
                                            <p>${producto.description}</p>
                                            <div class="precio">${producto.price}</div>
                                            <button value="Comprar" class="botonComprar">Comprar</button>
                                            <div class="comprado">Agregado al carrito</div>
                                            </div>`)

                localStorage.setItem(misProductos, enJSON);
                }
            }else{
                alert("error al hacer get");
            }
        })
    })
})

//funcion para boton comprar

$(function(){
    $(".botonComprar").on("click",function(){
        if($(".comprado").is(":visible")){
            $(".comprado").hide(3000);
        }else{
            $(".comprado").show(8000);
            
        }
    })
})