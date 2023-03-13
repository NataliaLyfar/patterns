//suppose we have app for sandwich shop
let ingredients = {
  bread: "plain",
  meat: "cheacked",
  mayo: true,
  mastard: true,
  lettuce: true,
  type: "6 inch",
};
class Sandwich {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }
  getPrice() {
    return 5.5;
  }
  setBread(bread) {
    this.ingredients.bread = bread;
  }
}

let chickenSandwich = new Sandwich(ingredients);
console.log(chickenSandwich.getPrice());

// if any sandwich differs from the standard one? some properties
// need to be changed? but not all. For this, we create a decorator function
// thaat will provide additional logic
function footLong(ingredients) {
  let sandwich = new Sandwich(ingredients);
  sandwich.ingredients.type = "foot long";

  let price = sandwich.getPrice();
  sandwich.getPrice();
  sandwich.getPrice = function () {
    return price + 3;
  };
  return sandwich;
}

let footLongSandwich = footLong(ingredients);
console.log("---->>>", footLongSandwich.getPrice());
console.log("type", footLongSandwich.ingredients);

// any number of custom objects can be created this way
function beefSandwichFootLong(ingredients) {
  let sandwich = footLong(ingredients);
  sandwich.ingredients.meat = "beaf";
  let price = sandwich.getPrice();
  sandwich.getPrice = function () {
    return price + 1;
  };
  return sandwich;
}
let beefFootLong = beefSandwichFootLong(ingredients);
console.log("Beef foot", beefFootLong.ingredients.meat);
console.log("Beef foot price", beefFootLong.getPrice());

// thus, the Decorator pattern allows to follow the DRY principle.
// thanks to the functional composition, the code can be reused.