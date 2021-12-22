export = {}
// 10, '10'

// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Buscar Username dado un id

// function getUsernameById(id: number | string) {
//   // Logic de negocio
//   return 'Jeici'
// }

// getUsernameById(20);
// getUsernameById('20');

// Alias de tipos en TS

type IdUser = number | string;
type Username = string;

let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar Username dado un id

function getUsernameById(id: IdUser): Username {
  // Logic de negocio
  return 'Jeici'
}

getUsernameById(20);

// Tipos personalizados
// 100x100, 500x500x 1000x1000

type SquareSize = "100x100" | "500x500" | "1000x1000";

let smallPicture: SquareSize = "500x500";

