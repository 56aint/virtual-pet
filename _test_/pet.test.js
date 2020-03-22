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
      expect(romy.hunger).toBe(5);
      expect(romy.fitness).toBe(7);
    });

    xit('increases fitness by 4', () => {
      const romy = new Pet('Romy');
  
      romy.fitness = 4;
      romy.walk();
  
      expect(romy.fitness).toEqual(8);
    });

    it('increases fitness by 8 to a maximum of 10', () => {
      const romy = new Pet('Romy');
  
      romy.fitness = 8;
      romy.walk();
  
      expect(romy.fitness).toEqual(10);
    });

    it('decreases hunger level by 3', () => {
      const romy = new Pet('Romy');

      romy.hunger = 3;
      romy.feed();

      expect(romy.hunger).toEqual(0);
    });

    it('to check if romy needs a walk', () => {
      const romy = new Pet('Romy');

      romy.fitness = 3;
      romy.checkUp();

      expect(romy.checkUp()).toBe('I need a walk!');
    });

    it('to check if romy needs to eat', () => {
      const romy = new Pet('Romy');

      romy.hunger = 5;

      expect(romy.checkUp()).toBe('I am hungry!');
    });

    it('to check if romy is hungry and needs a walk', () => {
      const romy = new Pet('Romy');

      romy.hunger = 5;
      romy.fitness = 3;
      
      expect(romy.checkUp()).toBe('I am hungry AND I need a walk!');
    });

    it('to check if romy is neither hungry nor needs a walk', () => {
      const romy = new Pet('Romy');

      romy.hunger = 0;
      romy.fitness = 10;

      expect(romy.checkUp()).toBe('I feel great!');
    });




});