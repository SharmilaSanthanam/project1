import React from 'react'
import BtnRender from './BtnRender'
import './productItem.css'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            {/* <img src={product.images.url} alt="" /> */}

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                 {/* <img src={product.images.url} alt="" /> */}
                 <img src={product?.images?.url} alt="Loading..." />
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem



















// import React from 'react'
// import BtnRender from './BtnRender'
// import './productItem.css'

// // function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
//     function ProductItem({product}) {
//     return (
//         <div className="product_card">
//             {/* {
//                 isAdmin && <input type="checkbox" checked={product.checked}
//                 onChange={() => handleCheck(product._id)} />
//             } */}
//             {/* <img src={product.images.url} alt="" /> */}

//             <div className="product_box">
//                 <h2 title={product.title}>{product.title}</h2>
//                 <span>${product.price}</span>
//                 <p>{product.description}</p>
//             </div>

            
//             <BtnRender product={product}  />
//             {/* <BtnRender product={product} deleteProduct={deleteProduct} /> */}
//         </div>
//     )
// }

// export default ProductItem