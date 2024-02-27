/**
 * the Students controller
 */
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const datapath = process.argv[2];
      const data = await readDatabase(datapath);
      const fields = Object.keys(data);
      fields.sort((i, k) => {
        if (i < k) {
          return -1;
        }
        if (i > k) {
          return 1;
        }
        return 0;
      });
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      for (const fd of fields) {
        response.write(`Number of students in ${fd}: ${data[fd].length}. List: ${data[fd].join(', ')}`);
        if (fields.indexOf(fd) !== fields.length - 1) response.write('\n');
      }
    } catch (err) {
      response.statusCode = 500;
      response.write(err.message);
    }
    response.end();
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (['CS', 'SWE'].indexOf(major.toUpperCase()) === -1) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      const datapath = process.argv[2];
      try {
        const data = await readDatabase(datapath);
        response.statusCode = 200;
        response.write(`List: ${data[major.toUpperCase()].join(', ')}`);
      } catch (err) {
        response.statusCode = 500;
        response.write(err.message);
      }
      response.end();
    }
  }
}

export default StudentsController;
