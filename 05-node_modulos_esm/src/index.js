// import connectToDataBase from "./utils/database.js";

//importar tudo
// import * as database from './utils/database.js'

import { connectToDataBase,databaseType } from "./utils/database.js"; 

import { getDataFromApi } from './utils/api.js';

import * as api from './utils/api.js';


console.log("hello ecma");

// connectToDataBase("my-data-baser");

// database.connectToDataBase("my-data-base");
// database.disconnectDataBase();

connectToDataBase("my-data-bvase-destructuring");

console.log(databaseType);

getDataFromApi();

console.log(api.key);