

import Provider from './context/Provider';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
    <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </Provider>
    </>
  );
}
