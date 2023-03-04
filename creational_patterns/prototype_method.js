const vehicle = {
  type: "",
  transport(item) {
    console.log("transport", item);
  },
};

const car1 = Object.assign({}, vehicle);
car1.type = "civic";
car1.engine = "v6";

const car2 = Object.assign({}, vehicle);
car2.type = "ford";
car2.engine = "v8";

car1.transport("some apples");
car2.transport("bananas");

console.log("car1", car1);
console.log("car2", car2);
