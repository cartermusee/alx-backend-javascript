/**
 * create a small HTTP server using the http module:
 */
const http = require('http');
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
      let str = `Number of students: ${cs.length + swe.length}\n`;
      str += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
      str += `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
      resolve(str);
    }
  });
});

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const data = process.argv[2];
    try {
      const allStd = await countStudents(data);
      res.write(allStd);
    } catch (err) {
      res.write(err.message);
    }
  }
  res.end();
});

app.listen(1245);

module.exports = app;
