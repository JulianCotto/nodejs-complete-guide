const person = {
    name: 'Julian',
    age: 32,
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

const printName = (personData) => {
    console.log(personData.name);
}

// destructuring syntax
const printName2 = ({age}) => {
    console.log(age);
}

const { name, age} = person;

const hobbies = ['Driving', 'Coding', 'Gaming'];
const [firstHobby, secondHobby, thirdHobby] = hobbies;

printName(person);
printName2(person);
console.log(name, age);
console.log(firstHobby, secondHobby, thirdHobby);