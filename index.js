function getStudent() {
  return [
    {
      img: "download.png",
      name: "student1",
    },
    {
      img: "image.png",
      name: "student2",
    },
  ];
}

function loadStudentDetail() {
  let HTMLCode = "";
  let AllStudent = getStudent();
  AllStudent.forEach((student) => {
    HTMLCode += `<div class="student"><img src="source/${student.img}" alt="${student.name}">
    <div class="user-tittle">${student.name}</div></div>`;
  });

  document.getElementById("StudentList").innerHTML = HTMLCode;
}

loadStudentDetail();
