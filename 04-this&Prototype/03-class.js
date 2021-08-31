class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJs = new Workshop("Kyle");
var reactJs = new Workshop("Suzy");

console.log(deepJs.a);

deepJs.ask("Is 'prototype' a class?");

deepJs.ask("Isn't 'prototype' a ugly?");
