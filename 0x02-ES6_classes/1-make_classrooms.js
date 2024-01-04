import ClassRoom from './0-classroom';

const class1 = new ClassRoom(19);
const class2 = new ClassRoom(20);
const class3 = new ClassRoom(34);

export default function initializeRooms() {
  return [class1, class2, class3];
}
