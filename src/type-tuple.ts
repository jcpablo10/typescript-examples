//Una tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya 
// que insertar un elemento se validará que dicho elemento
// coincida con el tipo de dato establecido en la tupla.



export = {}
let user: [number, string];
user = [1, 'Jc']
console.log("User: ", user);

console.log('Username: ', user[1]);
console.log('Username Lenght: ', user[1].length);
console.log('Name: ', user[0]);

// Tuplas con varios valores

let userInfo: [number, string, boolean];
userInfo =  [2, 'Jeici', true];

console.log('Usuario: ', userInfo )

// Arreglo de Tuplas

let array: [number, string][] = [];
array.push([1, 'Juan'])
array.push([2, 'Alejandro'])
array.push([3, 'Ximena'])


// Uso de funciones de Array
array[2][1] = array[2][1].concat('001');
array.push([1,'str']);
console.log('Array: ', array);
 // Los tipos deben ser diferentes para cada uno de las posiciones