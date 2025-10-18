// const product = require("./services/products");
const { getFullName, productType} = require("./services/products");
const products = require("./services/products");
const config = require("./services/config");
const dataBase = require("./services/database")

async function main () {
    console.log("Carrinho de Compras");
    // product.getFullName(408, "mousepad");
    // product.getFullName(508, "mouse");
    getFullName("1", "teclado");
    
    // product.getProductLabel("mousepad")

    products.getProductLabel("monitor");

    console.log(config.devArea.version);
    console.log(config.devArea.production);

    console.log(config.client);

    // console.log(product.productType);
    // console.log(product.productType.tax);
    // console.log(product.productType.version);

    dataBase.connectToDataBase("abc123");
    dataBase.disconnectDataBase();

}

main();