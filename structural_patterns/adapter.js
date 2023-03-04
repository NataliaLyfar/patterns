// used to convert one interface to another
// suppose there is an app for booking plane tickets

// old interface
function TicketPrice() {
  this.request = function (start, end, overweightLuggage) {
    // cost calculation...
    return "$125.00";
  };
}
// suppose we want to add a new feature for certain users
// that will calculate the cost of discounted tickets

// new interface
function NewTicketPrice() {
  this.discount = function (discountCode) {
    // process account data
  };
  this.setStart = function (start) {
    // set the point of departure
  };
  this.setDestination = function (destination) {
    // set the distance
  };
  this.calculate = function (overweightLuggage) {
    // calculate the cost
    return "$110.00";
  };
}

// in order not to make changes to the app, we will use an adapter interface
function TicketAdapter(discount) {
  const pricing = new NewTicketPrice();
  pricing.discount(discount);

  return {
    request: function (start, end, overweightLuggage) {
      pricing.setStart(start);
      pricing.setDestination(end);
      return pricing.calculate(overweightLuggage);
    },
  };
}

const pricing = new TicketPrice();
const discount = { code: "wtyp" };
const adapter = new TicketAdapter(discount);

//old cost calculation ticket price
let price = pricing.request("Warsaw", "Paris", 20);
console.log("Old --->>" + price);

//new cost calculation ticket price
price = adapter.request("Warsaw", "Paris", 20);
console.log("New --->>" + price)