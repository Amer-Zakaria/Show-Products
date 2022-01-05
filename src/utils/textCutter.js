export default function textCutter(text, desiredCharacters) {
  if (text.length <= desiredCharacters) return false;
  let newText = text.slice(0, desiredCharacters);
  //for not cutting the last text in the word
  for (let i = desiredCharacters; i < text.length - 1; i++) {
    if (text[i] === " ") break;
    newText += text[i];
  }
  return newText;
}
