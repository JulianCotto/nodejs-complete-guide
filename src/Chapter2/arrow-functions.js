const name = 'Julian';
let age = 32;
const hasHobbies = true;

// traditional implementation
const summarizeUser = function(userName, userAge, userHasHobby) {
    return (
        'Name: ' +
        userName +
        '\nAge: ' +
        userAge +
        '\nHobbies?: '
        + userHasHobby
    );
}

// arrow function
const summarizeUserArrow = (userName, userAge, userHasHobby) => {
    return (
        'Name: ' +
        userName +
        '\nAge: ' +
        userAge +
        '\nHobbies?: '
        + userHasHobby
    );
}

const add = (a, b) => a + b;
const addWReturn = (a, b) => { return a + b; }
const addOne = a => a + 1;
const addRandom = () => Math.random();

console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUserArrow(name, age, hasHobbies));
console.log(add(1, 2));
console.log(addWReturn(2, 3));
console.log(addOne(1));
console.log(addRandom());