export = {}
// Crear una fotografía

// function createPicture(title, date, size) {
//   // title
// }

// Usamos TS, definimos tipos para parámetros

type SquareSize = "100x100" | "500x500" | "1000x1000";

function createPhoto(title: string, date: string, size: SquareSize){
  console.log("create Photo", title, date, size);
}

createPhoto("My birthday", "2021-03-10", "1000x1000");
// createPhoto("Colobia Trip", "2020-03-01");

// Parámetros opcionales en funciones

function createImage(title?: string, date?: string, size?: SquareSize){
  console.log("create Photo", title, date, size);
}

createImage("Hola");

//Flat array functions

let createPic = (title: string, date: string, size: SquareSize) => {
  // return {
  //   title: title,
  //   date: date,
  //   size: size
  // };
  return { title, date, size };
};

const picture = createPic("My first Photo","2021-10-10","100x100");
console.log("Picture: ", picture);

// console.log(picture.title);


function handleError(code: number, message: string): never | string {
  // Procesamiento del mensaje;
  if (message === "error") {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return "An error has ocurred";
  }
}


try {
  let result = handleError(200, "error");
  console.log('Result: ', result)
} catch (error) {
  console.log(`${error}`)
}