const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns instance of an object', () => {
    expect(new Pet('Romy')).toBeInstanceOf(Object);
  });
  
  it('sets the name property', () => {
    const pet = new Pet('Romy');
    expect(pet.name).toEqual('Romy');
    
    //const romy = new Pet('Romy');
    //expect(romy.name).toEqual('Romy');
  });

  it('sets the initial age', () => {
    const pet = new Pet('Romy');
    expect(pet.age).toBe(0);
    });

    it('sets the growth in increament of 1', () => {
      const pet = new Pet('Romy');
      pet.growUp();
      expect(pet.age).toBe(1);
    });
});