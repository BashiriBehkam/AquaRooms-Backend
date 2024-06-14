const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  phone: {
    type: Number,
  },
  time: {
    type: String,
  },
  person: {
    type: Number,
  },
  teenager: {
    type: Number,
  },
  child: {
    type: Number,
  },
  food: {
    type: Number,
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  foodservices: {
    type: Boolean,
    default: false
  }
  ,
  complete: {
    type: Boolean,
    default: false
  }
  ,received: {
    type: String,
    default: 'Qebul Edilmeyib'
  }

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
