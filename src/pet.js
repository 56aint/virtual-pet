const INITIAL_AGE = 0;

class Pet {  
  constructor(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.sound_1 = 'Meow';
    //this.relaxed = 'Meow';
  }

  growUp () {
    console.log(`My name is ${this.name}, I am ${this.age += 1} now and I can ${this.sound_1} when I am relaxed.` );
  };


}

const pet = new Pet('Romy');
pet.name
pet.growUp();
//const romy = new Pet('Romy');


module.exports = Pet;
