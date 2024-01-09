export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, el) => sum + el.id, 0);
}
