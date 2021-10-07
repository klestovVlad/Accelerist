export function CheckIfNameIsEmpty(
  firstName: string | null,
  lastName: string | null
) {
  const Name = [firstName, lastName].filter(Boolean).join();
  return Name.length === 0 ? 'No Name' : Name;
}
