import connectToDataBase from "./database/data.js";

async function main() {
    await connectToDataBase("kakashi","uchhatake");
    await connectToDataBase("naruto","uzumaki");
    await connectToDataBase(process.env.USERDATABASE,process.env.PASSWORDDATABASE);
   
}

main();
