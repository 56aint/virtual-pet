const INITIAL_AGE = 0;
const INITIAL_HUNGER_LEVEL = 0;
const MINIMUM_HUNGER_LEVEL = 0;
const INITIAL_FITNESS_LEVEL = 10;
const MAXIMUM_FITNESS_LEVEL = 10;

class Pet {  
  constructor(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER_LEVEL;
    this.fitness = INITIAL_FITNESS_LEVEL;
    //this.sound_1 = 'Meow';
    this.sound = function (soundString) {
      return soundString ? soundString : 'ERROR! PLEASE, I NEED A SOUND'
    };
  }

  growUp () {
    this.hunger += 5; 
    this.fitness -= 3;
    console.log (`My name is ${this.name}, I am ${this.age += 1} now and I can ${this.sound('Meow')} when I am relaxed. And as i grow older, i feel less fit and hungrier`);
  };

  walk () {
    this.fitness += 4;
    if ((this.fitness + 4) <= MAXIMUM_FITNESS_LEVEL) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS_LEVEL;
    }
  };

  feed () {
    this.hunger -= 3;
    if((this.hunger - 3 >= INITIAL_HUNGER_LEVEL)) {
      this.hunger -= 3;
    }else{
      this.hunger = INITIAL_HUNGER_LEVEL;
    }
  };

  checkUp () {
    if (this.fitness <= 3 && this.hunger >= 5) {
      return 'I am hungry AND I need a walk!';
    }else if (this.fitness <= 3) {
      return 'I need a walk!';
    }else if (this.hunger >= 5) {
      return 'I am hungry!';
    } else {
      return 'I feel great!';
    }
  };

}

const romy = new Pet('Romy');
//romy.name
//romy.growUp();
//const romy = new Pet('Romy');


module.exports = Pet;
