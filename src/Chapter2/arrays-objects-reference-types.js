const person = {
    name: 'Julian',
    age: 32,
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

const hobbies = ['Driving', 'Coding', 'Gaming'];

// this is not changing the const variable, it is changing the thing the const variable is referencing
hobbies.push('Reading');
console.log(hobbies);