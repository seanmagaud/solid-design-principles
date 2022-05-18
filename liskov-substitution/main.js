class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {}
// You note that a duck can fly and swim, but we can extend only one classe. We have to use the composition instead of inheritance in this case

class Penguin extends SwimmingBird {}

// The duck can fly but not the penguin.
// This example violate the liskov substitution principle even if both of these animals are birds

// To understand liskov principle, if you have a function that is accept a class, every single sub class of that class must also be able to enter in that function and workd properly, and should have the same type

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
