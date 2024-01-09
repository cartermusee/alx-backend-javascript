import getListStudents from "./0-get_list_students";

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((el) => el.location === city)
    .map((student) => {
    //   console.log(newGrades)
      newGrades.map();
    });
}