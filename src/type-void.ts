// Void

// Tipo explícito

function showInfo(user: any): any {
  console.log('User Info', user.id, user.username, user.firstName);
  // return 'hola';
}
showInfo({id: 1, username: 'jeici', firstName: 'Juan' });

function showFormatedInfo(user: any): void {
  console.log('userInfo', `
    id: ${user.id},
    username; ${user.username}
    firstName: ${user.firstName}
  `)
}

showFormatedInfo({id: 1, username: 'jeici', firstName: 'Juan' });

// Tipo Void como tipo de dato
// Es algo que no sirve de mucho, pero nos muestra que null y undefined son subtipos de Void
let unusable: void;
// unusable = null;
// unusable: undefined;

// Tipo Never:
// Representa un valor que nunca ocurre
// Funciones que lanzan exepciones
// Funciones que nunca retornan un valor.

// Never

function handleError(code: number, message: string): never{
  // Process yout code here
  // Generate a messahe
  throw new Error( `${message}. Code: ${code}` );
}
try {
  handleError(404, 'Not Found');
} catch {

}

// 

function sumNumbers(limit: number): never {
  let sum = 0;
  while(true) {
    sum++
  }
}

sumNumbers(10) // Ciclo ifinito. El programa nunca termina.