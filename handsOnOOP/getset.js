class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {
    const today = new Date();
    const hour = today.getHours();
    
    if(hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }
  
  speak() {
    console.log(this.sound);
  }
  
  get owner() {
    return this._owner;
  }
  
  set owner(owner) {
    this._owner = owner;
    console.log('setter called: ${owner}');
  }
  
  
}


const oggy = new Pet('cat', 1, 'dqdqw', 'meow');
oggy.owner = 'Guru';
console.log(oggy.owner);

console.log(oggy.activity());
