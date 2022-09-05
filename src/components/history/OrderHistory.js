import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
import './history.css'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/getPayments', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>History</h2>

            <h4>You have {history.length} ordered</h4>

            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Date of Purchased</th>
                        {/* <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th> */}
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items.razorpay_payment_id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                {/* <td><img src={items.images.url} alt="" /></td> */}
                            {/* <td>{items._id}</td>
                            <td>{items.isPaid}</td> */}
                            {/* <td>{items.amount}</td> */}
                            {/* <td>$ {items.price * items.quantity}</td> */}
                                {/* <td><NavLink to={`/history/${items._id}`}>View</NavLink></td> */}
                                {/* console.log(res.data) */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory