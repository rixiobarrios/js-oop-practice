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

class Card {
  constructor(suit, rank, score) {
    this.suits = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    // initialize length as zero
    this.length = 0;

    // can call a function _in_ the constructor, everything in the constructor runs!
    this.generateDeck();
  }

  generateDeck() {
    // create Arrays for all the values of "suits", "ranks", and "cards"
    const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
    const ranks = [
      "Ace",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Jack",
      "Queen",
      "King"
    ];
    const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    // Use Array Methods to go over each suit AND each rank
    suits.forEach(suit => {
      // forEach can take a second argument in the callback function
      // by using the same Index, we can have the respective "score" value since they match across all 13 items in each list
      ranks.forEach((rank, rankIndex) => {
        this.cards.push(new Card(suit, rank, scores[rankIndex]));
      });
    });

    this.length = this.cards.length;
  }

  draw() {
    // this is a fun pattern!
    // 1. Math.random gives a random decimal between 0 and 1
    // 2. if you multiply that decimal by the length of an array, you'll get an value less than the length of the array. Which we can use for an index!
    // 3. Because we need an integer to reference an item of an array, we have Math.floor() around everything
    // 4. Use the bracket no
    const randomCardIndex = Math.floor(Math.random() * this.length);
    return this.cards[randomCardIndex];
  }
}

const hammadDeck = new Deck();
