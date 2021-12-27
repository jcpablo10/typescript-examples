export = {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
};

class Picture {
  id: number;
  title: string;
  orientaion: PhotoOrientation;

  constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation,
    description: string,
  ) {
    this.id = id;
    this.title = title;
    this.orientaion = orientation;
  }

  //  Comportamiento

  toString() {
    return `[
      id: ${ this.id }
      title: ${ this.title }
      orientation: ${ this.orientaion }
    ]`;
  }
}

class Album {
  id: number;
  title: string;
  pictures: Picture[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures =  [];
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, "Personal picures");
let picture: Picture = new Picture(1, "Photo title", PhotoOrientation.Portrait, "Esta es la descripcion");
let picture2: Picture = new Picture(2, "Amazing", PhotoOrientation.Panorama, "This is an amazing picture");

album.addPicture(picture);
album.addPicture(picture2);

console.log("Album", album);
// console.log("Picture", picture);
