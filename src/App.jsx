import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
