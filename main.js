// let total = 0;
// function agregarAlCarrito(){
//    do{
//       let producto = prompt("¿Queres comprar cadenita, anillo o ambos?", "Ej: ambos")
//       let cantidad = parseInt(prompt("Cuanto queres comprar?",0));

//       let precio = 0;
//       switch(producto){
//          case "cadenita":
//             precio = 1000;
//             break;
//          case "anillo":
//             precio = 600;
//             break; 
//          case "ambos":
//             precio=1500;
//             break;
//          default:
//             alert("Alguno de los datos ingresados es incorrecto");
//             precio=0;
//             cantidad=0;     
//       }
//       total = total + precio*cantidad;
//       otroProducto = confirm("¿Quieres agregar otro producto?")

//    }while(otroProducto)
// }

// function aplicarDescuento(total){
//    if(total >= 5000){
//       total = total *0.80;
//    }
//    return total;
// }

// function calcularEnvio(total){
//    let confirmacion = confirm("¿Quieres envio a domicilio")
//       if( confirmacion && total >= 2000){
//          alert("Tienes envio gratis. El total de tu compra es " + total);
//       }else if(confirmacion && total < 2000 && total != 0) {
//          alert("El envio cuesta $200. El total de tu compra es  $"+ total)
//       } else{
//          alert("El total de tu compra es $"+total)
      
//    }
//    return total;
// }
// agregarAlCarrito();
// calcularEnvio(aplicarDescuento(total));


let producto =0;
let cantidadProducto =0;
let precio =0;

class Pedido{
    constructor(producto,precio,cantidad){
        this.producto = producto;
        this.precio=precio;
        this.cantidad=cantidad;
        this.envio = 0;
        this.subTotal=0;
        this.total=0;
    }

    calcularSubTotal(){
        this.subTotal=this.precio*this.cantidad;
    }
    calcularIva(){
        return this.subTotal*0.21;
    }
    calcularEnvio(){
        if(this.subTotal>5000){
            this.envio=0;
        }else{
            this.envio=500;
        }
    }
    calcularTotal(){
        this.total = this.subTotal + this.envio + this.calcularIva();
    }
}
function pedidoProducto(){
    while(!producto || producto == 0 || producto > 4){
        producto = parseInt(prompt("¿Que producto queres comprar?\n 1:Cadenita($950)\n 2:Anillo($500)\n 3:Cadenita2($1100)\n 4:Anteojos($6000)"));
    }
    switch(producto){
        case 1:
            producto ="Cadenita";
            precio = 950;
            break;
        case 2:
            producto ="Anillo";
            precio = 500;
            break;
        case 3:
            producto ="Cadenita2";
            precio = 1100;
            break;
        case 4:
            producto ="Anteojos";
            precio = 6000;
            break;
            
    }

    while(!cantidadProducto || cantidadProducto==0){
        cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n Introduzca la cantidad deseada."))       
    }
    return new Pedido(producto,precio,cantidadProducto);
}

const pedidos = [];

const pedido1 = new Pedido("Anillo",500);
pedidos.push(pedido1);
const pedido2 = new Pedido("Aros",1000);
pedido.push(pedido2);

pedidos.push(new Pedido("collar", 1500));

for(const pedido of pedidos)
    pedido.calcularTotal();

console.log(pedidos);

alert("Bienvenidx a la tienda");

const pedido = pedidoProducto();
pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle del pedido:\n"+" - " + pedido.producto + " x " + pedido.cantidad + " :$ " + pedido.precio * pedido.cantidad + "\n" + " IVA 21% $" + pedido.calcularIva() +
"\n" + " - Costo de envio $" + pedido.envio + "\n" + "total = $" + pedido.total) 