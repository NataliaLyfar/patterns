// for the needs of a goods delivery company can create
class Delivery {
  constructor(email, item) {
    this.email = email;
    this.item = item;
  }
  // ..some code
}

const delivery = new Delivery(
  "Ukraine, Zhytomyr city, Peremoga street, 47",
  "goods"
);
// class does not satisfy the business logic of expanding
//  the delivery of goods by different modes of transport depending on the distance, so can use fabric method

function deliveryFactory(address, item) {
  // need to calculate the distance at first and after:
  if (distance > 10 && distance < 50) {
    return new DeliveryByCar(address, item);
  }
  if (distance > 50) {
    return new DeliveryByTruck(address, item);
  }
  return new DeliveryByBike(address, item);
}

class DeliveryByBike {
  constructor(address, item) {
    this.address = address;
    this.item = item;
  }
}
class DeliveryByCar {
  constructor(address, item) {
    this.address = address;
    this.item = item;
  }
}
class DeliveryByTruck {
  constructor(address, item) {
    this.address = address;
    this.item = item;
  }
}

const newDelivery = deliveryFactory(
  "Ukraine, Zhytomyr city, Peremoga street, 47",
  "goods"
);
