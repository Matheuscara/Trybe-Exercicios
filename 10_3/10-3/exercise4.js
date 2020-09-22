const uppercase = (str) => str.toUpperCase();

const firstLetter = (str) => str.slice(0, 1);

const concatStrs = (str1, str2) => `${str1}${str2}`;

module.exports = { uppercase, firstLetter, concatStrs };