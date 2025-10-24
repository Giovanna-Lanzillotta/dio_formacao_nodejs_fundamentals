const databaseType = {
    userType : "admin",
    typeData : "datalocal"
};


async function connectToDataBase(dataName) {
    //lógica de conexão

    console.log(`conectado ao banco ${dataName}`);
}

async function disconnectDataBase() {
    console.log("Desconectando do banco de dados")
}

// export default connectToDataBase;

// exporta mais de uma função,constante...
export {
    connectToDataBase,
    disconnectDataBase,
    databaseType,
};