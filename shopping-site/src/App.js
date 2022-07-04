import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home.component";
import Navigation from "./Routes/Navigation/Navigation.componet";
import Authentication from "./Authentication/Authentication.componet";
import Shop from "./Routes/Shop/Shop.components";
import Checkout from "./Routes/Checkout/Checkout.component";

function App() {
  return (
    <Routes>
      <Route Path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
