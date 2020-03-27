const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns instance of an object', () => {
    expect(new Pet('Romy')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const romy = new Pet('Romy');
    expect(romy.name).toEqual('Romy');
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

  it('increases fitness by 4', () => {
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

    romy.hunger = 8;
    romy.feed();

    expect(romy.hunger).toEqual(5);
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

  it('to tests if Romy is not alive', () => {
    const romy = new Pet('Romy')

    romy.fitnes = -1;
    romy.hunger = 11;
    romy.age = 31;

    expect(romy.isAlive).toBe(false)
  });

  it('test if Romy is alive', () => {
    const romy = new Pet('Romy')

    romy.fitness = 1;
    romy.hunger = 9;
    romy.age = 29;

    expect(romy.isAlive).toBe(true)
  });

 it('test if Romy is not alive', () => {
    const romy = new Pet('Romy')

    romy.fitness = -1;
    romy.hunger = 11;
    romy.age = 31;

    expect(romy.isAlive).toBe(false)
    expect(() => romy.growUp()).toThrow("Your pet is no longer alive :(");
    expect(() => romy.walk()).toThrow("Your pet is no longer alive :(");
    expect(() => romy.feed()).toThrow("Your pet is no longer alive :(");
    expect(() => romy.checkUp()).toThrow("Your pet is no longer alive :(");
  });

  it('checks adoption with D.I', () => {
    let romy, romlia;
    romy = new Pet('Romy');
    romlia = new Pet('Romlia');

    expect(romy.adoptRomlia(romlia)).toEqual([ { name: 'Romlia', age: 0, hunger: 0, fitness: 10} ]);
    expect(romy.children[0].name).toEqual('Romlia');
  });

  it('check if child can feed', () => {

    const romy = new Pet('Romy');
    const romlia = new Pet('Romlia');

    romy.adoptRomlia(romlia);
    romlia.hunger = 8;
    romy.children[0].feed()

    expect(romlia.hunger).toEqual(5);
  });





});