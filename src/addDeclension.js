export const addDeclension = (text, ending, number) => {
  if (number === 1) {
    return text;
  }

  if (number > 1 && number < 5) {
    return `${text}${ending}`;
  }

  if (number >= 5 && number <= 20) {
    return `${text}`;
  }

  if (number > 20 && number % 10 > 1 && number % 10 < 5) {
    return `${text}${ending}`;
  }

  return `${text}`;
};
