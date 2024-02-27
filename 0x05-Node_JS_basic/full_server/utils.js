/**
 * function named readDatabase that accepts a file path as argument:
 */
import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        const values = data.split('\n');
        values.splice(0, 1);
        const dataVal = {};
        values.forEach((val) => {
          const field = val.split(',');
          if (field[3] && field[0]) {
            if (Object.keys(dataVal).indexOf(field[3]) === -1) {
              dataVal[field[3]] = [field[0]];
            } else {
              (dataVal[field[3]]).push(field[0]);
            }
          }
        });
        resolve(dataVal);
      }
    });
  });
}

export default readDatabase;
