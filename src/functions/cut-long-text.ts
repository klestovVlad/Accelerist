export function cutLongText(text: string, length: number) {
  if (text.length > length) {
    return text.substr(0, length - 3) + '...';
  }
  return text;
}
