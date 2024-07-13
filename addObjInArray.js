let Students = [];

function addStudents(id, name) {
  Students.push({ id, name });
}

addStudents(1, "student 1");
addStudents(2, "student 2");
addStudents(3, "student 3");

console.log(Students);

//Foreach loop for display all student details

function displayAll() {
  Students.forEach((student) => {
    console.log("ID : " + student.id + " Name:" + student.name);
  });
}

displayAll();
