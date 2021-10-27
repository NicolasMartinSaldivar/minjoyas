

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

class Product {
    constructor(id, name, price, descripcion) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.descripcion = descripcion;
    }
}

let product1 = new Product(1,"anillo",500,"anillo de oro");
let product2 = new Product(2,"anillo",400,"anillo de plata");


let myShoppingCart = new ShoppingCart();
myShoppingCart.add(product1);
myShoppingCart.add(product2);

let contentShoppingCart = myShoppingCart.get();
let filterProduct = myShoppingCart.getById(1);
if(filterProduct.length>0){
console.log(filterProduct)
}else{
    console.log('error');
}

//DOM y Evento
let click = document.getElementById('agregar');
click.addEventListener('click',()=>{
    let compra = document.createElement("p");
    compra.innerHTML = `"<h3>Acabas de agregar al carrito ${product1.name} y sale $ ${product1.price}</h3>"`
    document.body.appendChild(compra)
})

