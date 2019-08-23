// Question 1 - Classes

// class User {
//   constructor(email, password) {
//     this.email = email
//     this.password = password
//   }

//   isAdmin(){
//     return this.admin === true
//   }
// }

// class Admin extends User {
//   constructor(email, senha){
//     super(email, senha)
//     this.admin = true
//   }
// }

// const user1 = new User('email@test.com', '123')
// const adm1 = new Admin('email@test.com', '123')
// console.log(user1.isAdmin())
// console.log(adm1.isAdmin())

// Question 2 - Array operations
// const users = [
//   {name: 'Diego', idade: 23, empresa:'Rocketseat'},
//   {name: 'Gabriel', idade: 15, empresa:'Rocketseat'},
//   {name: 'Lucas', idade: 30, empresa:'Facebook'}
// ]

// 2.1 Using map()
// const usersAges = users.map(user => user.idade)
// console.log(usersAges)

// 2.2 Using filter()
// const usersRocketseat18 = users.filter(user => user.empresa === 'Rocketseat' && user.idade > 18)
// console.log(usersRocketseat18)

// 2.3 Using find()
// const usersGoogle = users.find(user => user.empresa === 'Google')
// console.log(usersGoogle)

// 2.4 Joining operations
// const calcUsersAges = users
//   .map(user => ({ ...user, idade: user.idade * 2}))
//   .filter(user => user.idade <= 50)
// console.log(calcUsersAges)

// Question 3 - Arrow functions

// 3.1
// const arr = [1, 2, 3, 4, 5]
// arr.map(item => item + 10)

// 3.2
// const user = {nome: 'Jaênia', age: 21}
// const showAge = (user) => user.age

// 3.3
// const name = 'Jaênia'
// const age = 21
// const showUser = (name = 'Jaênia', age = 21) => ({name, age})

// 3.4
// const promise = () => new Promise((resolve, reject) => resolve())

// Question 4 - Unstructuring
// const company = {
//   name: 'Rocketseat',
//   address: {
//     city: 'Rio do Sul',
//     state: 'SC'
//   }
// }

// 4.1
// const {name, address: {city, state}} = company
// console.log(name)
// console.log(city)
// console.log(state)

// 4.2
// const user = {
//   name: 'Jaênia',
//   age: 21,
//   address: {
//     city: 'Rio do Sul',
//     state: 'SC'
//   }
// }
// const showInfo = ({name, age}) => `${name} is ${age} year old.`
// console.log(showInfo(user))

// Question 5 - Rest/Spread

// 5.1
// const arr = [1, 2, 3, 4, 5, 6]
// const [x, ...y] = arr
// console.log(x)
// console.log(y)

// const sum = (...params) => params.reduce((total, next) => total + next)
// console.log(sum(1, 2, 10))

// 5.2
// const usuario = {
//   name: 'Jaênia',
//   age: 21,
//   address: {
//     city: 'Rio do Sul',
//     uf: 'SC',
//     country: 'Brazil'
//   }
// }

// const usuario2 = { ...usuario, name: 'Aaron'}
// console.log(usuario2)

// const usuario3 = { ...usuario, address: {...usuario.address, city: 'Lontras'}}
// console.log(usuario3)

// Question 6 - Template Literals
// const user = 'Jaênia'
// const age = 21
// console.log(`The user ${user} is ${age} years old`)

// Question 7 - Object Short Syntax
// const name = 'Jaênia'
// const age = 21
// const user = {
//   name, 
//   age,
//   city: 'João Pessoa'
// }
// console.log(user)
