const router = require('express').Router()
const productCtrl = require('../controllers/productController')


const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/products')
    .get(productCtrl.getProducts)
    .post(auth, authAdmin, productCtrl.createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .put(auth, authAdmin, productCtrl.updateProduct)

    module.exports = router


// router.route('/products')
//     .get(productCtrl.getProducts)
//     .post( productCtrl.createProduct)


// router.route('/products/:id')
//     .delete( productCtrl.deleteProduct)
//     .put( productCtrl.updateProduct)

// module.exports = router






//for product authentication, add below code along with above

// const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')

// router.route('/products')
//     .get(productCtrl.getProducts)
//     .post(auth, authAdmin, productCtrl.createProduct)


// router.route('/products/:id')
//     .delete(auth, authAdmin, productCtrl.deleteProduct)
//     .put(auth, authAdmin, productCtrl.updateProduct)