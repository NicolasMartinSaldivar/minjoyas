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

