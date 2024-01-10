interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
let student1: Student = {
    firstName: 'carter',
    lastName: 'masila',
    age: 20,
    location: 'Kitui',
}

let student2: Student = {
    firstName: 'musee',
    lastName: 'charl',
    age: 23,
    location: 'nairobi',
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);

studentsList.forEach((student) => {
  const cell1 = table.insertRow(0)
  const cell2 = table.insertRow(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
document.body.appendChild(table);