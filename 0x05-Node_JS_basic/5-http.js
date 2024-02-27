/**
 * create a small HTTP server using the http module:
 */

const http = require('http');
const students = require('./3-read_file_async')

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!')
    res.end()
  } else if (req.url == '/students') {
    res.write('This is the list of our students');
    try{        
        const allStd = await students(process.argv[2]);
        res.write(allStd);
    } catch (err) {
        res.write(err.message)
    }
    res.end();
  }
});

app.listen(1245);

module.exports = app;
