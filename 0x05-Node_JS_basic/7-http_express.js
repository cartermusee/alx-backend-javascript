/**
 * a more complex HTTP server using Express
 */
const express = require('express');
const fs = require('fs');

const app = express();

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
      let str = `Number of students: ${cs.length + swe.length}\n`;
      str += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
      str += `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
      resolve(str);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(process.argv[2]);
    res.write(data)
  } catch (err) {
    res.write(err.message);
  }
  res.end()
});

app.listen(1245);
module.exports = app;
