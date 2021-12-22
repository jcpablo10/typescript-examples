/* Se coinsidera siempre y vuando no tengamos un valor primitoivo Bool Numb Stri   */

let user: object;
user = {} // Object

user = {
  id: 1,
  username: 'Juan',
  firstName: 'Pablo',
  isPro: true

}

typeof user;
console.log("🚀 ~ file: type-object.ts ~ line 15 ~ typeof user;", typeof user)


// Object vs object (Clase JS vs tipo TS)

const myObject = {
  id: 1,
  username: 'Juan',
  firstName: 'Pablo',
  isPro: true
}
const isInsance = myObject instanceof Object;
// console.log("🚀 ~ file: type-object.ts ~ line 23 ~ isInsance", isInsance)

// console.log('user.username', myObject.username);

