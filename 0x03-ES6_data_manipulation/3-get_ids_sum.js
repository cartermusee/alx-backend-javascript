export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, el) => {
    return sum += el.id;
  }, 0)
}