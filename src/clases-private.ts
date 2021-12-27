export = {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
};

class Picture {
  private id: number;
  private title: string;
  private orientaion: PhotoOrientation;

  public constructor(
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
  private id: number;
  private title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures =  [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, "Personal picures");
let picture: Picture = new Picture(1, "Photo title", PhotoOrientation.Portrait, "Esta es la descripcion");
let picture2: Picture = new Picture(2, "Amazing", PhotoOrientation.Panorama, "This is an amazing picture");
let picture3: Picture = new Picture(2, "Amazing", PhotoOrientation.Panorama, "This is an amazing picture");

// picture3.id = 200; // Error

album.addPicture(picture);
album.addPicture(picture2);

console.log("Album", album);
// console.log("Picture", picture);
