const person = {
    name: 'Julian',
    age: 32,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}

// will return undefined name because `this` refers to global scope
const person1 = {
    name: 'Jace',
    age: 3,
    greet: () => {
        console.log('Hello, my name is ' + this.name);
    }
}

const person2 = {
    name: 'Aviana',
    age: 2,
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}



person.greet();
person1.greet(); // arrow functions refer to the global node runtime `this`
person2.greet();