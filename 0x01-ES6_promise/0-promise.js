function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('API response received successfully'); // Resolve with a message
    } else {
      reject(Error()); // Reject with an error message
    }
  });
}
export default getResponseFromAPI;
