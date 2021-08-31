function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJs = new Workshop("Kyle");
var reactJs = new Workshop("Suzy");

deepJs.ask("Is 'prototype' a class?");

deepJs.ask("Isn't 'prototype' a ugly?");
