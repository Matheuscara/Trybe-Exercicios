const exercise4 = require('./exercise4');
jest.mock('./exercise4');

describe('testing', () => {

  it('mocking uppercase function to receive string and transform to lowercase', () => {
    exercise4.uppercase.mockImplementation((str) => str.toLowerCase());

    expect(exercise4.uppercase('HI')).toBe('hi');
  });

  it('mocking firstLetter function to receive string and return last letter', () => {
    // exercise4.firstLetter = jest.fn()
    exercise4.firstLetter.mockImplementation((str) => str.slice(-1));

    expect(exercise4.firstLetter('Hi')).toBe('i');
  })
  it('mocking concatStrs function to concatenate 3 strings', () => {
    exercise4.concatStrs.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

    expect(exercise4.concatStrs('Hi ', "I'm", ' Matheus')).toBe("Hi I'm Matheus");
  })
})
