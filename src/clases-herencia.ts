export = {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
};

// SUPERclase
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string){
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  // set id(id:number) {
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

// _(underscore) Es una simple convención que indica una variable privada.

class Picture extends Item{
  // private _id: number;
  // private _title: string;
  private _orientaion: PhotoOrientation;
  public static photoOrientation = PhotoOrientation;

  public constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation,
    description: string,
  ) {
    super(id, title)
    // this._id = id;
    // this._title = title;
    this._orientaion = orientation;
  }

  get orientation() {
    return this._orientaion;
  }

  set orientation(o: PhotoOrientation){
    this._orientaion = o;
  }

  //  Comportamiento

  toString() {
    return `[
      id: ${ this._id }
      title: ${ this._title }
      orientation: ${ this._orientaion }
    ]`;
  }
}

class Album extends Item{
  
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    // Constructor de SUPERclase
    super(id, title);
    this._pictures =  [];
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture)
  }
}

const album: Album = new Album(1, "Personal picures");
let picture: Picture = new Picture(1, "Photo title", PhotoOrientation.Portrait, "Esta es la descripcion");
let picture2: Picture = new Picture(2, "Amazing", PhotoOrientation.Panorama, "This is an amazing picture");
let picture3: Picture = new Picture(2, "Amazing", PhotoOrientation.Panorama, "This is an amazing picture");

// const item = new Item(1,Generic title);

// picture3.id = 200; // Error
// picture3.id = 201; // Error

album.addPicture(picture);
album.addPicture(picture2);
album.addPicture(picture3);

console.log("Album", album);
// console.log("Picture", picture);

// Probar el miembro estático
console.log(Picture.photoOrientation.Square);