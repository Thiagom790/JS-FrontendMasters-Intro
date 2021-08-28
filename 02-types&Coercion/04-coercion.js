// coersion é uma conversão de tipo
var msg01 = "There are ";
var numStudents = 16;
var msg02 = " students";

console.log(msg01 + numStudents + msg02);

// Concatenacao
console.log(`Nessa escola tem ${numStudents}`);

function addAStudent(numStudents) {
  return numStudents + 1;
}

// Com Number eu consigo converter valores validos a numeros
// ou seja strings validas e boleanos
addAStudent(Number("1"));
