import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
//getElementById 는 null을 return할수있어서 as Element를 붙여줘야 에러가 안남
root.render(<App />);
