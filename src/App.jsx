import {Routes,Route} from 'react-router';
import './App.css';
import {HomePage} from "./pages/HomePage.jsx";
import {Checkout} from "./pages/Checkout.jsx";
import {Orders} from "./pages/Orders.jsx";
import {Tracking} from "./pages/Tracking.jsx";

function App() {


  return (
      <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/tracking" element={<Tracking />}/>
      </Routes>

  )
}

export default App
