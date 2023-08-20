import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./Component/ProductListing";
import ProductDetail from "./Component/ProductDetail";
import ProductComponent from "./Component/ProductComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
