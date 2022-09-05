const crypto = require("crypto");
const Payment = require("../models/paymentModel.js");
const Razorpay = require("razorpay");
const { setUncaughtExceptionCaptureCallback } = require("process");

const paymentCtrl = {

    //   getPayments: async(req, res) =>{
    //     try {
    //         const payments = await Payment.find()
        
    //         res.json(payments)
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },

    checkout: async (req, res) => {
      try {

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_API_SECRET,
          });

  const options = {
    amount: req.body.amount * 100,
    // amount: 50000,    //for testing
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };
  const order = await instance.orders.create(options);

// console.log(order);


  res.status(200).json({
    success: true,
    order,
  })
 } catch (err) {
  console.log(err)
                return res.status(500).json({msg: err.message})
            }
        },


    paymentVerification: async (req, res) => {
        try {
          // console.log(req.body)      // for testing
          const {cart} = req.body;
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

    // console.log("sig received" ,razorpay_signature);
    // console.log("sig generrated" ,expectedSignature);     //for testing

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      cart,
      isPaid: true,
      
    });
    cart.length===0;
    $setCart([]);
    $addToCart([]);
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
    

  //   cart.filter(item => {
  //                     return sold(item._id, item.quantity, item.sold)
  //                 })
   }
} catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }

    //         getPayments: async(req, res) =>{
    //     try {
    //         const instance = new Razorpay({
    //             key_id: process.env.KEY_ID,
    //             key_secret: process.env.KEY_SECRET,
    //         });
    //         // instance.payments.fetch(paymentId)
           

    //         const payments = await Payments.find()
    //         instance.payment.all(option)
    //         res.json(payments)
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // }
 };
const sold = async (id, quantity, oldSold) => {
    await Products.findOneAndUpdate({ _id: id }, {
        sold: quantity + oldSold
    })
}


module.exports = paymentCtrl

























// const Payments = require('../models/paymentModel')
// const Users = require('../models/userModel')
// const Products = require('../models/productModel')
// const Razorpay = require("razorpay")
// const crypto = require("crypto")



// const paymentCtrl = {
//     getPayments: async(req, res) =>{
//         try {
//             const instance = new Razorpay({
//                 key_id: process.env.KEY_ID,
//                 key_secret: process.env.KEY_SECRET,
//             });
//             // instance.payments.fetch(paymentId)
           

//             const payments = await Payments.find()
//             instance.payment.all(option)
//             res.json(payments)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     createPayment: async(req, res) => {
//         try {
//             const user = await Users.findById(req.user.id).select('name email')
//             if(!user) return res.status(400).json({msg: "User does not exist."})

//             const {cart, paymentID, address} = req.body;

//             const {_id, name, email} = user;

//             const newPayment = new Payments({
//                 user_id: _id, name, email, cart, paymentID, address
//             })

//             cart.filter(item => {
//                 return sold(item._id, item.quantity, item.sold)
//             })

            
//             await newPayment.save()
//             res.json({msg: "Payment Succes!"})
            
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     }
// }

// const sold = async (id, quantity, oldSold) =>{
//     await Products.findOneAndUpdate({_id: id}, {
//         sold: quantity + oldSold
//     })
// }

// module.exports = paymentCtrl














// const Payments = require('../models/paymentModel')
// const Users = require('../models/userModel')
// const Products = require('../models/productModel')
// const Razorpay = require("razorpay");
// const crypto = require("crypto");


// const paymentCtrl = {
//     getPayments: async (req, res) => {
//         try {

//             // var instance = new Razorpay({
//             //      key_id: process.env.KEY_ID,
//             //       key_secret: process.env.KEY_SECRET, 
//             //     })

//             // instance.orders.fetchPayments(orderId)
            
            
//             const payments = await Payments.find()
//             res.json(payments)
//         } catch (err) {
//             return res.status(500).json({ msg: err.message })
//         }
//     },
//     createPayment: async (req, res) => {
//         try {

//             const instance = new Razorpay({
//                 key_id: process.env.KEY_ID,
//                 key_secret: process.env.KEY_SECRET,
//             });

//             const options = {
//                 amount: req.body.amount * 100,
//                 currency: "INR",
//                 receipt: crypto.randomBytes(10).toString("hex"),
//             };

//             instance.orders.create(options, (error, order) => {
//                 if (error) {
//                     console.log(error);
//                     return res.status(500).json({ message: "Something Went Wrong!" });
//                 }
//                 res.status(200).json({ data: order });

//             });

          

//             instance.orders.fetchPayments(orderId)
//         } catch (error) {
//             res.status(500).json({ message: "Internal Server Error!" });
//             console.log(error);
//         }
//     },

//     verifyPayment: async (req, res) => {
//         try {
    
//             const {razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//                 req.body;
//             const sign = razorpay_order_id + "|" + razorpay_payment_id;
//             const expectedSign = crypto
//                 .createHmac("sha256", process.env.KEY_SECRET)
//                 .update(sign.toString())
//                 .digest("hex");


//             if (razorpay_signature === expectedSign) {
//                 return res.status(200).json({ message: "Payment verified successfully" });
//             } else {
//                 return res.status(400).json({ message: "Invalid signature sent!" });
//             }
//         } catch (error) {
//             res.status(500).json({ message: "Internal Server Error!" });
//             console.log(error);
//         }
//     },

//     savePayment: async (req, res) => {
//         try {

//             const user = await Users.findById(req.user.id).select('name email')
//             if(!user) return res.status(400).json({msg: "User does not exist."})

//             const { cart, razorpay_payment_id, address } = req.body;

//             const { _id, name, email } = user;

//             const newPayment = new Payments({
//                 user_id: _id, name, email, cart, razorpay_payment_id, address
//             })

//             cart.filter(item => {
//                 return sold(item._id, item.quantity, item.sold)
//             })


//             await newPayment.save()
//             res.json({ msg: "Payment Success!" })

//         } catch (err) {
//             return res.status(500).json({ msg: err.message })
//         }
//     }
// }

// const sold = async (id, quantity, oldSold) => {
//     await Products.findOneAndUpdate({ _id: id }, {
//         sold: quantity + oldSold
//     })
// }

// module.exports = paymentCtrl