import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home.component";
import Navigation from "./Routes/Navigation/Navigation.componet";
import SignIn from "./Sign-in/Sign-in.componet";

const Shop = () => {
  return <h1>TEST</h1>;
};

function App() {
  return (
    <Routes>
      <Route Path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
