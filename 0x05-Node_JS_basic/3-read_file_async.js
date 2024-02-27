const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
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
      resolve();
    }
  });
});

module.exports = countStudents;
