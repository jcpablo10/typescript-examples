import { User, Picture, PhotoOrientation, Album } from "./photo-app"

const user = new User(1, "jeici", "Juan", true);
const picture = new Picture(2,"City of chaos", "2020-10-12",PhotoOrientation.Portrait);
const picture2 = new Picture(2,"City of calm", "2021-12-1",PhotoOrientation.Landscape);
const album = new Album(5,"Photos of Jeci");

// Creamos relaciones entre 

user.addAlbum(album);
album.addPicture(picture);
album.addPicture(picture2);

console.log("user", user);
console.log("picture", picture);
console.log("album", album);