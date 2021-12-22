console.log('Main.ts')

// Number
//Explícito

let phone: number;
phone = 1;
phone = 5566554455
// phone = "5532321245" // Error

// Inferido
let phoneNumber = 55555555;
// phoneNumber = "nunmer" // Error

// ES6
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean

let isPro: boolean;
isPro = true;
isPro = false;
// isPro = 1 // Error

let isUserPro = false;
isUserPro = true;
// isUserPro = 1; // Error


// Tipo de dato String
let userName: string = "Jeici";
userName = "Juan C";
// userName = true;  // Error;

// ES6 backtik/backquote

// Template String
// Uso de back-tick
let userInfo: string;
userInfo = `
  UserInfo:
  Username: ${userName}
  firstName: ${userName} JC
  phone: ${phone}
  isPro: ${isPro}
`;

console.log('userInfo', userInfo);

