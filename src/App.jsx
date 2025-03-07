

import Provider from './context/Provider';
import Home from './pages/Home';
import LoginPage from './pages/Login'
import Register from './pages/Register';
import ProductDetail from './components/ProductDetail/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderSummary from './components/OrderSummary/OrderSummary';
import Checkout from './pages/Checkout';


export default function App() {
  return (
    <>
    <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </Provider>
    </>
  );
}
