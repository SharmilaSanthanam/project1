import React from 'react'
// import  { useContext} from 'react'
// import { GlobalState } from '../../GlobalState'
import { useSearchParams } from "react-router-dom"
// import { NavLink } from 'react-router-dom'
import './cart.css'

const PaymentSuccess = () => {
  // const state = useContext(GlobalState)
  const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get("reference")
  // const [cart] = state.userAPI.cart

  return (
    <div className='success'>

      Congratulations!!!<br></br>
      Placed your Order Successfully!!!<br></br>
      <br></br>
      Payment Reference No. <b>{referenceNum} </b>
      {/* <span>{cart.length===0}</span>
      <NavLink to="/cart">
                        cart
                    </NavLink> */}
    </div>

  )
}

export default PaymentSuccess
