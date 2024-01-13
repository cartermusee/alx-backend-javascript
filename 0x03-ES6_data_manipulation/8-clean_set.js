export default function cleanSet(set, startString) {
  const string = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      string.push(value.substring(startString.length));
    }
  });
  return string.join('-');
}
