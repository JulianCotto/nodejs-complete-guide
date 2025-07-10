var name = 'Julian'; // string
var age = 32; // int
var hasHobbies = true; // boolean

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name: ' +
        userName +
        '\nAge: ' +
        userAge +
    '\nHobbies?: ' + userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies));