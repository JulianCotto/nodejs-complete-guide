const person = {
    name: 'Julian',
    age: 32,
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

const hobbies = ['Driving', 'Coding', 'Gaming'];
for (let hobby of hobbies) {
    console.log(hobby);
}

// map creates and adjusts a copy of the input array
console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
console.log(hobbies)