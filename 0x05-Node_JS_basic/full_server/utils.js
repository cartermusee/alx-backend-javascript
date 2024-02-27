/**
 * function named readDatabase that accepts a file path as argument:
 */
import fs from 'fs';

function readDatabase(path) {
  return new Promise ((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else{
        const values = data.split('\n');
        const fname = [];
        values.forEach((value) => {
          const field = value.split(',');
          for (let i = 0; i < field.length; i++){
            if (field[i] === 'firstname'){
                fname.push(field[0])
            }
          }
        })
      }
      resolve(fname);
    });
  });
};
export default readDatabase;
