// import "/category.style.scss";
// import "./category.style.scss";
import { Routes, Route } from "react-router-dom";
import { Hello } from "./components/hello";
import Navbar from "./components/navbar/navbar";
import SignComponent from "./components/auth/Authentication.component";
import { Home } from "./routes/home/home.component";
import { Shop } from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<SignComponent />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
