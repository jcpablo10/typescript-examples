// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape, // 0
  Portrait, // 1
  Square, // 2
  Panorama // 3
}

const landscape = PhotoOrientation.Landscape;
console.log(landscape);
console.log('Lanscape: ', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10, // 0
  Portrait, // 1
  Square, // 2
  Panorama // 3
}

console.log(PictureOrientation.Portrait);

enum Country {
  Bolivia = "bol",
  Colombia = "col",
  Mexico = "mex",
  EEUU = "usa",
  Espana = "esp"
}

enum Country {
  Argentina = "arg",
  Uruguay = "urg"
}

const country: Country = Country.Espana

console.log(country);