export = {}
// Corchetes []

// Tipo explícito
let users: string[];
users = ['juan', 'carlos', 'pablo'];

// users = ['Perez', true] // Hace verirfiación de tipos, detecta errores pues el arreglo esta preparado para gestionar cadenas

// Tipos inferidos

let otherUsers = ['juan', 'carlos', 'pablo'];
// otherUsers = [true] // Error

// Array<Tipo>

let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacarion time', 'Landscape']

// Accediendo a los valores en un array

console.log('first user: ', users[0]);
console.log('first title: ', pictureTitles[0]);

// Propiedades en array

console.log(users.length);

// Uso de funciones

users.push('Ramirez')
users.sort();

console.log('Users:', users.length)