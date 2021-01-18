class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  speak() {
    console.log(this.sound);
  }
  
}


const oggy = new Pet('cat', 1, 'jug', 'meow');

console.log(oggy.speak());
