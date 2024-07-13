let object1 = { value: 25 };
let object2 = object1;
let object3 = { value: 25 };

// console.log(object1);
// console.log(object2);
// console.log(object3);

//Compare
// console.log(25 == 25);

//Compare Object
// console.log(object1 == object3); //output: false

// console.log(object1 == object2); //output: true because the reference of object 1 and object 2 are same and it will store in the same keap memory.

//REASSIGN

let object4 = { value: 45 };

// object4 = { value: 400 };

// console.log(object4);

//Reassign for Constant Object

const object5 = { value: 70 };

object5.value = 100; //the value change as 100 because in the constant variable can change the data value

object5 = { value: 10 }; //ERROR Because Object5 is a constant variable cannot be able to re assign

console.log(object5);
