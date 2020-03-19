class Pet {

  constructor(name){
    this.name = name;
    //this._sound = 0;
  }

  myPet () {
    return this.name;
  }

}

const pet = new Pet('Fido');
const romy = new Pet('Romy');


module.exports = Pet;
