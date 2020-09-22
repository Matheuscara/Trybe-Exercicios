const exercise4 = require('./exercise4');

describe('testing', () => {

  it('mocking uppercase function to receive string and transform to lowercase', () => {
    const upper = jest.spyOn(exercise4, 'uppercase')
      .mockImplementation((str) => str.toLowerCase());
    
    expect(upper('HI')).toBe('hi');

    exercise4.uppercase.mockRestore();

    expect(exercise4.uppercase('hi')).toBe('HI');
  });

})
