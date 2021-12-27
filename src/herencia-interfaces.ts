export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number,
  title: string
}

interface Album extends Entity {
  description: string
}

interface Picture extends Entity{
  orientation: PhotoOrientation
}

const album: Album = {
  id: 1,
  title: "My Album",
  description: "Description of my album"
}

const picture: Picture = {
  id: 2,
  title: "Photo title",
  orientation: PhotoOrientation.Panorama
}

const newPicture = {} as Picture;
newPicture.id = 1;
newPicture.title = "Test";
newPicture.orientation = PhotoOrientation.Square

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);