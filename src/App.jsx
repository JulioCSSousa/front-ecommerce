

import Provider from './context/Provider';
import Home from './pages/Home';
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
      </Routes>
    </Router>
    </Provider>
    </>
  );
}
