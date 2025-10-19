import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("🛒 Welcome to the your Shoppe Cart! 🛒");

// Criando dois items
const item1 = await createItem("hotwheels ferrari", 25.99 , 1);
const item2 = await createItem("hotwheels lamborghini", 39.99 , 3);
const item3 = await createItem("hotwheels fusca", 19.99 , 4);

// console.log(item1.subtotal());
// console.log(item2.subtotal());

//adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1); 
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);


await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);


//deletei dois itens ao carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart,item1.name);


await cartService.calculateTotal(myCart);

