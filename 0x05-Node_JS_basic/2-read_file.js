const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const values = data.split('\n');
  const cs = [];
  const swe = [];

  values.forEach((value) => {
    const field = value.split(',');
    if (field.length > 3 && field !== null) {
      if (field[3].trim() === 'CS') {
        cs.push(field[0]);
      } else if (field[3].trim() === 'SWE') {
        swe.push(field[0]);
      }
    }
  });
  console.log(`Number of students: ${cs.length + swe.length}`);
  console.log(`Number of students in CS: ${cs.length} . List: ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${swe.length} . List: ${swe.join(', ')}`);
};

module.exports = countStudents;
