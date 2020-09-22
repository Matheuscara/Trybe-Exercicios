const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('verify uppercase function with callback', (done) => {
  uppercase('oi', (result) => {
    expect(result).toBe('OI');
    done();
  })
});