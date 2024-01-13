export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'musee',
    lastName: 'carter',
    experienceTeachingC: 10,
}

console.log('C++:');
console.log(cpp.setTeacher(cTeacher));
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('java:');
console.log(java.setTeacher(cTeacher));
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React:');
console.log(react.setTeacher(cTeacher));
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());