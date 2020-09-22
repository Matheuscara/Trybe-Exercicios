let random0to100 = () => Math.floor(Math.random() * 100);

describe('while mocking random0to100 function', () => {
  it('should return 10 with mockReturnValue 10', () => {
    random0to100 = jest.fn().mockReturnValue(10);
  
    expect(random0to100()).toBe(10);
    expect(random0to100).toHaveBeenCalled();
  });
  it('should return 3 with mockImplementation of a division of 6 with 2 ', () => {
    random0to100 = jest.fn().mockImplementation((a, b) => a / b);
  
    expect(random0to100(6, 2)).toBe(3);
    expect(random0to100).toHaveBeenCalledTimes(1);
    expect(random0to100).toHaveBeenCalledWith(6, 2);
  });

  it('should return a mult of 3 numbers and reset implementation to mult by 2 ', () => {
    random0to100 = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
    expect(random0to100(1, 2, 3)).toBe(6);
    expect(random0to100).toHaveBeenCalledTimes(1);
    expect(random0to100).toHaveBeenCalledWith(1, 2, 3);

  });

  it('should return the double of a number', () => {

    random0to100.mockReset();
    expect(random0to100).toHaveBeenCalledTimes(0);
    
    random0to100.mockImplementation((a) => a * 2);
    
    expect(random0to100(2)).toBe(4);
    expect(random0to100).toHaveBeenCalledTimes(1);
    expect(random0to100).toHaveBeenCalledWith(2);
  });

})

