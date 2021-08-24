function greetStudent(student) {
  console.log(`Ola ${student.name}`);
}

greetStudent({ name: "Thiago" });

function timeRemainig(timeElapsed, endTime) {
  return endTime - timeElapsed;
}

var left = timeRemainig(42, 140);

left;
