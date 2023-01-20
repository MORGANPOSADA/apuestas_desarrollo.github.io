//let, var y const
// const: Genera una constante
//var y let generan una variable
//$scope = fragmento de codigo
/*
$scope
    $scope primero
function suma(){
    const numero = 2;
    let numero2 = 4;
    var numero3 =4;
    function sumaSegunda(){
        const numero = 3
        let numero2 = 4;
        var numero3 =5;
        //$scope segundo
    }
}*/ 

//arrow function
function suma(numero1, numero2){
return numero1+numero2
}

const suma = function(numero1, numero2){
return numero1+numero2
}
//=> : funcion lambda
const suma = (numero1, numero2) => numero1+numero2 

//Templete String
const name = "Andrea"
const surname = "Díaz"
const lastname = "Zagal"
const fullname = `${name} ${surname} ${lastname}`
const person ={
    name: '',
    surname: '',
    lastname: ''
}
(()=>{
const name = person.name.toString();
const name2 = `${person.name} ${person.lastname? person.lastname: ''}`
})()
//array
const roles = []
//arrayList
const roles2= [
    {
        key: 'ADMIN',
        name: 'supera dministrador'
    },
    {
        key: 'USER',
        name: 'Usuario'
    }
]
//List
const roles3 ={}

//push, splice, indexOf, find,filter, map
roles.forEach((elemet, index) => {
    console.log(elemet.name);
})

for (let i = 0; i <= roles.length; i++){
    console.log(roles[i].name);
}

//desestructuración de objetos
const person2= {
    name: 'Andrea', 
    age: 19,
    address: {
        street: 'barona', 
        number: 9
    }
}
console.log(person2.name);
console.log(person2.address.street);
(() =>{
    const {name, address:{street}} = person2
    console.log(street)
})