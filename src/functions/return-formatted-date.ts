export function ReturnFormattedDate(date: string) {
  const DateFormat = new Date(date);
  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${DateFormat.getDate()} ${Months[DateFormat.getMonth()]} ${DateFormat.getFullYear()}`;
}