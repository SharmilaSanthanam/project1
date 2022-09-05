import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/PageRoutes'



function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
     
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;



















// import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'
// import {DataProvider} from './GlobalState'
// import Header from './components/headers/Header'
// // import Home from './components/Home'
// import Pages from './components/PageRoutes'


// function App() {
//   return (
//     <DataProvider>
      
//       <Router>
//         <div className="App">
//           <Header />
//           <Pages />
//         </div>
//       </Router>
//     </DataProvider>
//   );
// }

// export default App;
















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { DataProvider } from './GlobalState';
// import Header from './components/headers/Header';


// import {useContext} from 'react'

// import Products from './components/products/Products'
// import DetailProduct from './components/detailProduct/DetailProduct'
// import Login from './components/auth/login'
// import Register from './components/auth/Register'
// // import OrderHistory from './history/OrderHistory'
// // import OrderDetails from './history/OrderDetails'
// // import Cart from './cart/Cart'
// import NotFound from './components/utils/notFound/NotFound'
// // import Categories from './categories/Categories'
// // import CreateProduct from './createProduct/CreateProduct'

// import {GlobalState} from './GlobalState'


// function App() {
// //     const state = useContext(GlobalState)
// //     const [isLogged] = state.userAPI.isLogged
// //     const [isAdmin] = state.userAPI.isAdmin


//     return (
//       <DataProvider>

//  <Router>
//  <Header/>
//         <Routes>
//             <Route path="/" element={<Products/>} />
//             <Route path="/detail/:id" element={<DetailProduct/>} />

//             <Route path="/login" element={ <Login/>} />
//             <Route path="/register" element={ <Register/>} />

//             {/* <Route path="/login" element={isLogged ? <NotFound/> : <Login/>} />
//             <Route path="/register" element={isLogged ? <NotFound/> : <Register/>} /> */}

//             {/* <Route path="/category" element={isAdmin ? Categories : NotFound} />
//             <Route path="/create_product" element={isAdmin ? CreateProduct : NotFound} />
//             <Route path="/edit_product/:id" element={isAdmin ? CreateProduct : NotFound} />

//             <Route path="/history" element={isLogged ? OrderHistory : NotFound} />
//             <Route path="/history/:id" element={isLogged ? OrderDetails : NotFound} />

//             <Route path="/cart" element={Cart} /> */}


//             <Route path="*" element={<NotFound/>} />
//         </Routes>
//         </Router>
//   </DataProvider>   
//     )
// }

// export default App















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { DataProvider } from './GlobalState';
// import Header from './components/headers/Headers';

// // import Navbar from './components/navbar/Navbar';
// import Home from './components/Home';
// import Products from './components/products/Products';
// import DetailProduct from './components/detailProduct/DetailProduct';
// import Login from './components/auth/login';
// import Register from './components/auth/Register';
// import Cart from './components/Cart'
// import ErrorPage from './components/Error';


// function App() {
//   return (
//  <DataProvider>

// <Router>
// <Header/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product" element={<Products />} />
//         <Route path="/detail/:id" element={<DetailProduct />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="*" element={<ErrorPage />} />
        

//       </Routes>

//     </Router>
//  </DataProvider>   

//   ); 
// }

// export default App;



