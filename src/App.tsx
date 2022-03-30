import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Layout from "./components/Layout";
import SinglePage from "./pages/Singlproduct";
import Creatproduct from "./pages/Creatprodukt";
import Editproduct from "./pages/Editproduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<SinglePage />} />
          <Route path="product/:new" element={<Creatproduct />} />
          <Route path="product/:id/edit" element={<Editproduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
