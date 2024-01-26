import signUpuser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpuser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  const result = await Promise.allSettled([sign, upload]);
  const values_1 = [];
  result.forEach((element) => {
    if (element.status === 'fulfilled') {
      values_1.push({ status: element.status, value: element.value });
    } else {
      values_1.push({ status: element.status, value: `${element.reason}` });
    }
  });
  return result;
}
