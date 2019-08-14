/*
 * Instructions:
 * Work through the following prompts. Prompts marked with "We Do", we will work
 * on together, as a class; prompts marked with "You Do", you will be given time
 * to work through on your own.
 *
 * Tip: comment out your solution to each prompt before moving on to the next
 * one! This will keep your console clear.
 */

/*
 * Prompt 1: We Do
 *
 * Define a class for a Car. Your Car class should have the following
 * properties:
 *
 *    - make
 *    - model
 *    - color
 *
 * Your Car class should have the following methods:
 *
 *    - drive: print 'vroom vroom' to the console
 *
 * Once you create your class definition create two instances.
 */

// class Car {
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//     this.isNew = true;
//   }

//   drive() {
//     console.log("vroom vroom");
//   }
// }

// const carolla = new Car("Toyota", "Carolla", "Grey");
// const outback = new Car("Subaru", "Outback", "Forest Green");
// const hammadCar = new Car("Subaru", "Impreza", "Green");

/*
 * Prompt 2: You Do
 *
 * Define a class for your favorite animal (dog, cat, giraffe, etc). Give your
 * class 3 attributes and two methods.
 *
 * After you've defined your class, create 3 instances.
 */

// class Fox {
//   constructor(gender, name, color, hasSkin, age = 5) {
//     this.gender = gender;
//     this.name = name;
//     this.color = color;
//     this.hasSkin = hasSkin;
//     this.age = age;
//   }

//   say() {
//     console.log("yiyiypyiyppyiyp");
//   }
// }

// const foxy = new Fox("male", "Foxy", "orange", false);

/*
 * Prompt 3: We Do
 *
 * We're going to modify our Car class from the previous prompt and extend it to
 * create a Toyota class:
 *
 *   - Make a Car class with make, model, and color properties.
 *   - Extend your Car class to create a Toyota class. The make property will always
 *     be 'Toyota'. Add a drive method to your Toyota class.
 *
 * Make an instance of your Toyota class.
 *
 * You Do:
 *
 * Once we've completed the above, work through the following changes to your
 * Car and Toyota classes:
 *
 *   - move the color property to your Toyota class
 *   - move the drive method to your Car class
 *   - add a property to your Toyota class
 *   - add a property to your Car class and "fill it in" for your Toyota class
 */

// class Car {
//   constructor(model, year, make) {
//     this.model = model;
//     this.year = year;
//     this.make = make;
//   }

//   drive() {
//     console.log("vroom vroom");
//   }
// }

// class Toyota extends Car {
//   constructor(model, year) {
//     super(model, year, "Toyota");
//   }

//   drive() {
//     console.log("vroom vroom, but a Toyota");
//   }
// }

// const hammadToyota = new Toyota("Camry", "Red");

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log("vroom vroom");
  }
}

class Toyota extends Car {
  constructor(model, year) {
    super("Toyota", model, year);
  }

  drive() {
    console.log("vroom vroom, but a Toyota");
  }
}

const hammadCar = new Car("Subaru", "Impreza", "Green");
const hammadToyota = new Toyota("Camry", "Red");

/*
 * Prompt 4: You Do
 *
 * Define and Animal class with the following properties and methods:
 *
 *   - group (Invertebrates, Fish, Amphibians, Reptiles, Birds, and Mammals)
 *   - eat: log "yum yum" to the console
 *   - sleep: log "zzzzz" to the console
 *
 * Modify your animal from the previous prompt so that it extends your new
 * Animal class.
 *
 * Create an instance of your animal class (the one that extends the Animal
 * class).
 */

class Animal {
  constructor(genus, species) {
    this.genus = genus;
    this.species = species;
  }
}

class Dog extends Animal {
  constructor(genus, name) {
    super(genus, "dog");
    this.name = name;
  }

  greet() {
    console.log(`${this.name} says hi!`);
  }
}

const flynn = new Dog("mutt", "Flynn Rider");

/*
 * Prompt 5: You Do
 *
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 *
 * Define a Deck class with the following properties and methods:
 *
 *   - length (the number of cards - should start at 52)
 *   - cards (an array of cards in the deck)
 *   - draw: return a random card from the cards array
 *
 * When you create an instance of your Deck class (i.e. in your constructor),
 * fill in the cards array with 52 instances of your Card class. You can do
 * this with a nested for loop - first loop through an array of all possible
 * suits, then loop through an array of all possible ranks. Inside your inner
 * loop, create an instance of your Card class and push it into the Deck's cards
 * array.
 *
 * Instantiate an instance of your Deck and start drawing random cards!
 */
