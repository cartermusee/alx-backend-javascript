export default function divideFunction(numerator, denominator) {
  let div;
  try {
    if (denominator === 0) {
      throw Error('cannot divide by 0');
    }
    div = numerator / denominator;
  } catch (error) {
    console.log(error);
  }
  return div;
}
