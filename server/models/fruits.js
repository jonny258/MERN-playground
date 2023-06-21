const mongoose = require("mongoose");

const fruitsSchema = new mongoose.Schema({
  fruit: { type: String, required: true },
  brand: String,
  price: String,
  stock: Number,

  lastAccessed: { type: Date, default: Date.now },
});

fruitsSchema.methods.protentialProfit = function() {

  if (this.price != null && this.stock != null) {
    console.log(
      `The potential profit if you were to sell all the fruit is ${
        this.price * this.stock
      }`
    );
  } else {
    console.log("One or more of the required fields isn't filled out");
  }
};

fruitsSchema.methods.printAdd = function (){
  if (this.brand != null && this.price != null) {
    console.log(
      `Come in and buy our ${this.fruit} today! ${this.brand} only sells the highest quality fruit, get one for only ${this.price}`
    );
  } else {
    console.log("One or more of the required fields isn't filled out");
  }
};

const Fruit = mongoose.model("Fruit", fruitsSchema);

// //TEST
// const pear = new Fruit({
//     fruit: "pear",
// 	brand: "dole",
// 	price: 10.4,
// 	stock: 10000
// })
// console.log(pear)
// pear.printAdd()
// pear.protentialProfit()
// //TEST
module.exports = Fruit;
