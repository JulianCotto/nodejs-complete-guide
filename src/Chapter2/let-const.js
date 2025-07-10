const name = 'Julian'; // string
let age = 32; // int
const hasHobbies = true; // boolean

// re-assigning const variable produces IDE errors
// name = 'Julian'

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name: ' +
        userName +
        '\nAge: ' +
        userAge +
        '\nHobbies?: ' + userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies));