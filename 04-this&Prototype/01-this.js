/* o this de uma função se refere ao contexto de execução
    do que chamou por ela, tudo é determindo por como a
    função é chamad
*/

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicity binding?");

// Exemplo 2
function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };
  ask.call(myContext, "Why?");
}

otherClass();
