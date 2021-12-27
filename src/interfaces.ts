export = {}

enum PhotoOrientation {
  Lanscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientation
}
// Funcion para mostrar una fotografía

function showPicure(picture: Picture) {
  // console.log(`[
  //   title:${picture.title},
  //   date: ${picture.date},
  //   orientaion: ${picture.orientation}
  // ]`)

  console.log(picture);
}

let myPicture = {
  title: "Test Title",
  date: "2021-03-01",
  orientation: PhotoOrientation.Lanscape
}

showPicure(myPicture);
showPicure({
  title: "Super Title",
  date: "2020-03-10",
  orientation: PhotoOrientation.Portrait,
  // extra: "prueba" // Error 
})

interface PictureConfig {
  title?: string,
  date?: string,
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
  const picture = {
    title: 'Default',
    date: "2020-12-01",
    orientation: PhotoOrientation.Panorama
  };
  if (config.title) {
    picture.title = config.title;
  }
  if (config.date) {
    picture.date = config.date
  }
  if (config.orientation) {
    picture.orientation = config.orientation
  }

  return picture;
}

let picture = generatePicture({title: 'Non default title', date: "2021-12-22", orientation: PhotoOrientation.Square});
console.table(picture);

// Interfaz:

interface User {
  readonly id: number,
  username: string,
  isPro: boolean,
}

let user: User;
user = {
  id: 1,
  username: "jeici",
  isPro: true
}
user.username = "Jeici1000"
//user.id = 2; // Error
console.log('user: ', user)