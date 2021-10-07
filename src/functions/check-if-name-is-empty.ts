export function CheckIfNameIsEmpty(
  firstName: string | null,
  lastName: string | null
) {
  const firstNameString = firstName === null ? '' : firstName;
  const lastNameString = lastName === null ? '' : lastName;
  if (firstNameString.length + lastNameString.length === 0) {
    return 'No Name';
  }
  return `${firstName} ${lastName}`;
}
