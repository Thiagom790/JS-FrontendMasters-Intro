// Quando não temos uma variavel no escopo ele preocura
// no escopo de cima

var teacher = "Kyle";

function otherClass() {
  console.log(teacher);
}

otherClass();
