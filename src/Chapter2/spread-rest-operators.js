// spread operator
const person = {
    name: 'Julian',
    age: 32,
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}
const copiedPerson = {...person};
console.log(copiedPerson);


const hobbies = ['Driving', 'Coding', 'Gaming'];
const copiedArray = hobbies.slice();
const nestedArrayCopy = [hobbies];
const newArrayCopy = [...hobbies];

console.log(copiedArray);
console.log(nestedArrayCopy);
console.log(newArrayCopy);

// rest operator
// not flexible approach
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

const toArrayRest = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3));
console.log(toArrayRest(1, 2, 3, 4, 5, 6));

