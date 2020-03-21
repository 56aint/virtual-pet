const INITIAL_AGE = 0;

class Pet {  
  constructor(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    //this.sound_1 = 'Meow';
    this.sound = function (soundString) {
      return soundString ? soundString : 'ERROR! PLEASE, I NEED A SOUND'
    };
  }

  growUp () {
    console.log (`My name is ${this.name}, I am ${this.age += 1} now and I can ${this.sound('Meow')} when I am relaxed.`);
  };


}

const romy = new Pet('Romy');
romy.name
romy.growUp();
//const romy = new Pet('Romy');


module.exports = Pet;
