import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import axios from "axios";

   const RazorPay = () => {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    //  const [ setCart, addToCart] = state.userAPI.cart
        const [total, setTotal] = useState(0)
	

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

          setTotal(total)
        }

        getTotal()

    },[cart])

    const checkoutHandler = async () => {

        const { data: { key } } = await axios.get("http://localhost:5000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
            amount : total
            
        })
       
    //     console.log(window)   // for testing
    
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Santacraft",
            description: "Craft Products",
            
            order_id: order.id,
            callback_url: "http://localhost:5000/api/paymentverification",
            prefill: {
                name: "SantaCraft",
                email: "santacraft@gmail.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "rgb(69, 120, 179)"
            }
            

           
        };
        const razor = new window.Razorpay(options);
        razor.open();
        // console.log(order)
        }
    
  
    return (
        <div>

<button style={{border:"1px solid blue", backgroundColor:"rgb(69, 120, 179)", color:"white", marginLeft:"7%"}} onClick={()=>checkoutHandler()}>
             Buy Now
</button>
               
    </div>
  
    );
}
export default RazorPay
