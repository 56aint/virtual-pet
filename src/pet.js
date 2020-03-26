const INITIAL_AGE = 0;
const MINIMUM_HUNGER_LEVEL = 0;
const MAXIMUM_FITNESS_LEVEL = 10;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = MINIMUM_HUNGER_LEVEL;
    this.fitness = MAXIMUM_FITNESS_LEVEL;
    /*this.sound = function (soundString) {
      return soundString ? soundString : 'ERROR! PLEASE, I NEED A SOUND'
    };*/
  }


  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  };


  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(")
    } else {
      this.hunger += 5;
      this.fitness -= 3;
      console.log(`My name is ${this.name}, I am ${this.age += 1} now and I can Meow when I am relaxed, but as i grow older, i feel less fit and hungrier, AND IRRESPECTIVE OF ANY SET LIMITS HERE, I AM HERE TO LIVE LONG!!!`);
    }
  }

  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(")
    } else {
      if ((this.fitness + 4) <= MAXIMUM_FITNESS_LEVEL) {
        this.fitness += 4;
      } else {
        this.fitness = MAXIMUM_FITNESS_LEVEL;
      }
    }
  };

  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(")
    } else {
      if (this.hunger >= MINIMUM_HUNGER_LEVEL) { 
        this.hunger -= 3;
      } else {
        this.hunger = MINIMUM_HUNGER_LEVEL;
      }
    }
  };

  checkUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(")
    } else {
      if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk!';
      } else if (this.fitness <= 3) {
        return 'I need a walk!';
      } else if (this.hunger >= 5) {
        return 'I am hungry!';
      } else {
        return 'I feel great!';
      }
    }
  };

  adoptRomlia(romlia) {
    return this.children = [romlia]
  }


}

module.exports = Pet;
