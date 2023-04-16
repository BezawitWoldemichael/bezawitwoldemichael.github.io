let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputGrade: function (grade) {
    this.grades.push(grade);
  },
  computeAverageGrade: function () {
    return (
      this.grades.reduce((sumR, num) => sumR + num, 0) / this.grades.length
    );
  },
};
let student1 = Object.create(student);
student1.firstName = "John";
student1.lastName = "Doe";
student1.inputGrade(2);
student1.inputGrade(4);
let student2 = Object.create(student);
student2.firstName = "Cassie";
student2.lastName = "Grenner";
student2.inputGrade(3);
student2.inputGrade(4);
let student3 = Object.create(student);
student3.firstName = "Jenner";
student3.lastName = "Seth";
student3.inputGrade(4);
student3.inputGrade(4);
let students = [];
students.push(student1);
students.push(student2);
students.push(student3);
let AverageForAll =
  students.reduce(
    (avgT, num) => avgT + num.computeAverageGrade(num.grades),
    0
  ) / students.length;
console.log(AverageForAll);
