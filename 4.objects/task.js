/* Домашнее задание к лекции 4 «Объекты»
Задача 1. Инкапсуляция студента
Мы хотим инкапсулировать логику работы со студентами в объекты так, чтобы могли создавать студентов,
устанавливать им предмет, добавлять оценки, считать средний балл и отчислять.*/


function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Алина", "женский", 27);
let student2 = new Student("Андрей", "мужской", 23);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks) {
    this.marks.push(...marks);    
  }  
}

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0
  };
  let sum = this.marks.reduce((acc, item) => acc + item, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;    
}