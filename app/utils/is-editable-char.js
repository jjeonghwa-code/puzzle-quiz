export default function isEditableChar(char) {
  const nonEditableChars = ' -';
  return nonEditableChars.indexOf(char) === -1;
}
