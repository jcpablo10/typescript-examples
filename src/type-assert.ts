// Asersion de tipos

let username: any;
username = "Jeici PN :)";

let message: string = (<string>username).length > 5 ?
                        `Welcome ${username}` :
                        'Username is too short';

console.log('Message: ', message);

let usernameWithId: any = "Jeici PN"
// ¿Cómo obtener el username

// username = (<string>usernameWithId).substring(0,4);
username = (<string>usernameWithId).substring(1,5);
console.log('Username Only ', username);

//Sintaxis "as"

message = (username as string).length > 5 ?
                        `Welcome ${username}` :
                        'Username is too short';

                        console.log('Message "AS": ', message);

let helloUser: any;
helloUser = "Hello paparazzi";
username = (helloUser as string).substring(6);

console.log(username)