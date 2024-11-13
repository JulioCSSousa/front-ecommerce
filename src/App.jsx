

import Provider from './context/Provider';
import Home from './pages/Home';
import CartResume from './pages/CartResumePage'
import ProductDetail from './components/ProductDetail/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
    <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/CartResume" element={<CartResume />} />
      </Routes>
    </Router>
    </Provider>
    </>
  );
}
