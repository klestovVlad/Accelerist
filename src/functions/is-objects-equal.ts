export function isObjectsEqual(obj1: object, obj2: object) {
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
