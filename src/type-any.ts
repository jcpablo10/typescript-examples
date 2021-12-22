// Tipo explícito

let idUser: any;
idUser = 1 //number
idUser = "1"
console.log("idUser", idUser);

let otherId; // Tipo inferido ANY
otherId = 1;
otherId = 'a';
// otherId = true;
console.log("idUser", otherId);


let surprise: any = "Hola TS";
// surprise.sayHello();
const res = surprise.substring(6); // Error en tiempo de ejecución
console.log('res', res);

