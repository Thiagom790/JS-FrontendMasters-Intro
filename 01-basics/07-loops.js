var students = [
  "Maria",
  "Lucas"
];

for (let i = 0; i < students.length; i++) {
  console.log("Ola novo aluno");
}

for (let student of students) {
  console.log("Ola aluno", student);
}
