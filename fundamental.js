// How to declare a variable using let and const
const fatherName ='haronor rashid'
let season ='rainy';
season ='winter';

// 2 conditions
// 6 basic condition: >,<, ===,!==,<=, >=
// multiple condition: &&, ||
if(fatherName ==='haron'|| season ==='rainy'){

}
else if ( fatherName='haronor rashid'){

}

else{

}
// 3. array
// index
// length , push

const numbers =[45, ,698, 45, 414, 2, 22, 54]
numbers[0]=56;
// 4.for loop,(while loop)optional 
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    
}
// 5. function 
function multiply(num1,num2){
    const result =num1 * num2;
    return result;
}
multiply(35, 78);

// 6. object 
// 3 ways to access property by name 
const student ={
    name: 'akbar',
    age:53,
    movies:['king khan','sultan ']
}
const myVariable = 'age';
console.log(student.age); //direct by property
console.log(student['age']); //access via property name string 
console.log(student[myVariable]); //access via property name in a variable


