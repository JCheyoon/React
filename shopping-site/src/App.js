import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home.component";
import Navigation from "./Routes/Navigation/Navigation.componet";
import Authentication from "./Authentication/Authentication.componet";

const Shop = () => {
  return <h1>TEST</h1>;
};

function App() {
  return (
    <Routes>
      <Route Path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
