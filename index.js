console.log("hola mundo");

// -- funciones

function hello() {
    console.log("hola mundo")
    console.log('trabajando con JS')
}

hello()
hello()
hello()
hello()


function hello2() {
    return 'hola mundo'
}
const result = hello2()
console.log(result)
console.log(hello2())

function hello3() {
    return {name: 'Ryan'}
}

function hello4() {
    return function () {
        return 'hola mundo'
    }
}
console.log('programacion funcional: ',hello4()())

// -- parametros en funciones
function hola(name) {
    return 'hola ' + name;
}

console.log(hola('Ryan'))
console.log(hola('Juan'))
console.log(hola('Diego'))

// -- multiples parametros
function add(a,b) {
    return a + b;
}
console.log(add(10,20))
console.log(add(4,5))
console.log(add(10,7))

// -- default parameters
function add2(x, y) {
    if (y == undefined) y = 0
    return x + y;
}
console.log(add2(10))

function add3(x, y=0) {
    return x + y;
}
console.log(add3(10))

// -- Objetos

const user = {
    name: 'Ryan',
    lastname: 'Perez',
    age: 30,
    address: {
        country: 'Colombia',
        city: 'Bogota',
        street: 'Main Street 123'
    },
    friends: ['brandon', 'elena'],
    active: true,
    sendMail: function () {
        return 'send mail...'
    }
}
console.log('----- USER -----')
console.log(user)
// -- notacion punto para acceder a las propiedades
console.log(user.address)
console.log(user.address.city)
console.log(user.friends)
console.log(user.active)
console.log(user.sendMail())

// -- 
const name2 = 'laptop'
const price = 3000
const newProduct = {
    name2,
    price
}
console.log('----- NEW PRODUCT -----')
console.log(newProduct)
const name = 'Joe'
// -- Manipulacion del DOM (Document Object Model)

const title = document.createElement('h1')
console.log(title)
title.innerText = 'Hola mundo desde JS'
document.body.append(title)

const button = document.createElement('button')
button.innerHTML = 'click'
document.body.append(button)

// -- Eventos
button.addEventListener('click', function() {
    console.log('hola mundo!!')

    title.innerText = "Texto actualizado con JS"
    alert('se realizo un click')
})

// oBJETOS
const user2 = {
    name: 'Joe',
    age: 30
}

function printInfo(user) {
    return '<h1>Hola ' + user.name + '</h1>'
}
console.log('----- USER 2 -----')
console.log(printInfo(user2))

//document.body.innerHTML = printInfo(user2)

// -- Destructuring

const user3 = {
    name: 'Joe',
    age: 30
}

function printInfo2({user}) {
    return '<h1>Hola ' + name + '</h1>'
}
console.log('----- USER 3 -----')
console.log(printInfo2(user3))

function printInfo3(user) {
    const {name, age} = user
    return '<h1>Hola ' + name + '</h1>'
}
console.log('----- USER 4 -----')
console.log(printInfo2(user3))

// -- anonimas
function start() {
    return 'starting...'
}

console.log(start())

console.log(function () {
    return 'starting...'
}())

const button2 = document.createElement('button')
button2.innerText = 'click me'

function handleClick() {
    alert('clicked')
}

button.addEventListener('click', handleClick)

document.body.append(button2)

// arrow functions

function sumar(x, y) {
    return x + y
}

const sumar2 = (x, y) => {
    return x+y 
}

const sumar3 = (x, y) => x + y 

console.log(sumar(4,3))
console.log(sumar2(6,3))
console.log(sumar3(8,3))