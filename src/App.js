import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './containers/Header';
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
