let Student = {
  name: "ABC",
  address: "road",
  mobile: ["123", "456"],
};

// let { name } = Student;

// console.log(name);

// let displayMobile = (Student) => {
//   Student.mobile.forEach((element) => {
//     console.log(element);
//   });
// };

// displayMobile(Student);

let displayMobile = (Student) => {
  let { mobile } = Student;
  mobile.forEach((element) => {
    console.log(element);
  });
};
displayMobile(Student);
