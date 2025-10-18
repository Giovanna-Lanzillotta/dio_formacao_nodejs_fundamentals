// Todas as funções que lidam com produto

const productType = {
    version: "digital",
    tax : "x1",
}

//Hidden Const
const apiUrl = {
    url : 'www.google.com/api'
}

async function getFullName(codeId,productName){
    console.log("productX " + codeId + " -- " + productName);
    await doBreakLine();
}

//Função interna neste módulo - Hidden Members
async function doBreakLine(){
    console.log("\n");
}

async function getProductLabel(productName){
    console.log("Product " + productName)
}

// conteudo que quero exportar
module.exports = {
    getFullName,
    getProductLabel,
    productType,
};