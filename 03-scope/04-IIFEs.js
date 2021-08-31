// IIFEs são funções expressas que são invocadas imediatamentes
// IIFEs -> immediately invoke functions expressions

var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
})();

console.log(teacher);
