import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </PageContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
