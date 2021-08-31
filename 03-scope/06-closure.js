/*  Clousure é quando uma função lembra das variaves
 que estão do lado de fora dela, mesmo se for passada
 para outro lugar
 */

//  Exemplo 1
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("Quat is clousure?");

// Exemplo 2
function ask2(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask2("Quat is clousure?");

myQuestion();
