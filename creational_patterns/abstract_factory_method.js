// abstracting "the factory": adding new features
function abstractFactory(address, item, options) {
  if (options.isSameDay) {
    return sameDayDeliveryFactory(address, item);
  }
  if (options.isExpress) {
    return expressDeliveryFactory(address, item);
  }
  return deliveryFactory(address, item);
}

function sameDayDeliveryFactory(address, item) {
  return new SameDayDelivery(address, item);
}
function expressDeliveryFactory(address, item) {
  return new ExpressDelivery(address, item);
}

class SameDayDelivery {
  constructor(address, item) {
    this.address = address;
    this.item = item;
  }
  // some code...
}
class ExpressDelivery {
  constructor(address, item) {
    this.address = address;
    this.item = item;
  }
  // some code ...
}

// and classes from fabric_method created from deliveryFactory dependinf on distanse
