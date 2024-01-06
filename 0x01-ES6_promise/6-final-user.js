import signUpuser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpuser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([sign, upload])
    .then((result) => {
      const values = [];
      result.forEach((element) => {
        if (element.status === 'fulfilled') {
          values.push({ status: element.status, value: element.value });
        } else {
          values.push({ status: element.status, value: `${element.reason}` });
        }
      });
      return result;
    });
}
