/* function square(x){
    return x * x;
};
console.log(square(3));

//const squareArrow = (x) => {
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(4)); */

//Challenge  -  Use arrow functions
//getFirstName('Mike Smith') -> "Mike"
//Create regular arrow functions
//Create arrow function using shorthand syntax

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Mike Smith'));

const getLastName = (fullName) => fullName.split(' ')[1];
console.log(getLastName('Mike Smith'));