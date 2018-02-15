//It is possible to redefine and reassign a var
var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

//It is not possible to redefine a let, but it is possible to reassign
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//It is not possible to redefine and reassign a const
const nameConst = 'Frank';
console.log('nameConst', nameConst);


//Declare a function to test variable scope
function getPetName(){
    var petName = 'Hal';
    return petName;
}

//In a function, its not possible to access a var only calling the function
getPetName();
//To do this, it is necessary to declare a var assigned with the function you want
const petName = getPetName();
console.log(petName);

// Block scoping
var fullName = 'Jen Mead';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);