// Arquivo para poder lidar com o carrinho

// quais ações meu carrinho pode fazer??
// CASOS DE USO
// adicionar item no carrinho  
async function addItem(userCart, item) {
    userCart.push(item);
}

// calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\n 💰 Shoppe cart TOTAL IS:");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💲 Total: ${result.toFixed(2)}`);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover um item (quantidade de itens)
    async function removeItem(userCart, item) {
        // 1.encontar o indice do intem
        const indexFound = userCart.findIndex((p) => p.name === item.name)

        // 2.caso não encoontre o item
        if (indexFound === -1){
            console.log("Item não encontrado!");
            return;
        }

        // 3.item maior que 1 subtrair um item
        if (userCart[indexFound].quantity > 1) {
            userCart[indexFound].quantity -=1; 
            return;
        }

        // 4. Caso item = 1 deletar o item
        if (userCart[indexFound].quantity === 1) {
            userCart.splice(indexFound, 1);
            return;
        } 
}

async function displayCart(userCart) {
    console.log("\n 📋 Shoppe cart list: ");
    userCart.forEach((item, index) => {
        console.log(` ${index + 1} . ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal :${item.subtotal()}`)
    })
}


export { addItem, calculateTotal, deleteItem, removeItem, displayCart }