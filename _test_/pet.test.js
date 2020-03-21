const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns instance of an object', () => {
    expect(new Pet('Romy')).toBeInstanceOf(Object);
  });
  
  it('sets the name property', () => {
    const romy = new Pet('Romy');
    expect(romy.name).toEqual('Romy');
    
    //const romy = new Pet('Romy');
    //expect(romy.name).toEqual('Romy');
  });

  it('sets the initial age', () => {
    const romy = new Pet('Romy');
    expect(romy.age).toBe(0);
    });

    it('sets the growth in increament of 1', () => {
      const romy = new Pet('Romy');
      romy.growUp();
      expect(romy.age).toBe(1);
    });
});