// import mongoose from "mongoose";
const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  // user_id: {
  //   type: String,
  //   required: true
  // },
  // name: {
  //   type: String,
  //   required: true
  // },
  // email: {
  //   type: String,
  //   required: true
  // },
  // paymentID: {
  //   type: String,
  //   required: true
  // },
  isPaid: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    // required: true
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
  // address: {
  //   type: Object,
  //   required: true
  // },
  cart: {
    type: Array,
    default: [],
  }
  
}, {
  timestamps: true
})
module.exports = mongoose.model("Payment", paymentSchema)





// const mongoose = require('mongoose')


// const paymentSchema = new mongoose.Schema({
//     user_id: {
//         type: String,
//         required: true
//     },
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     paymentID:{
//         type: String,
//         required: true
//     },
//     address:{
//         type: Object,
//         required: true
//     },
//     cart:{
//         type: Array,
//         default: []
//     },
//     status:{
//         type: Boolean,
//         default: false
//     }
// }, {
//     timestamps: true
// })


// module.exports = mongoose.model("Payments", paymentSchema)