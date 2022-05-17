class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Duck extends Bird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends Bird {
  fly() {
    console.error("Im a penguin, I cannot fly");
  }

  swim() {
    console.log("I can swim");
  }
}

// The duck can fly but not the penguin.
// This example violate the liskov substitution principle even if both of these animals are birds

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);
