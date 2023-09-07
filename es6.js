const numbers =[45,69, 45, 414, 2, 22, 54];

const student ={
    name: 'akbar',
    age:53,
    movies:['king khan','sultan ']
}

//template string
const about =`My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}}`
console.log(about);

//2. arrow function 
const getFiftyFive =()=> 55;
//single parameter arrow function
const addSixtyFive = num => num + 65;

//various parameter arrow function
const addThree =(x,y,z) => x+y+z;

//multiline arrow function
const doMath = (num1, num2)=>{
    const sum =num1 +num2
    return sum
}

//spread operator
const newNumbers = [...numbers];
numbers.push(99);
//create a new array from an older array and add an element
const currentNumber =[...numbers,55];

console.log(currentNumber);
console.log(newNumbers);
console.log(numbers);