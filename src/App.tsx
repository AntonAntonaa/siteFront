import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/ProfilePage/Profile";
import Product from "./pages/ProductPage/Product";
import Layout from "./components/Layout";
import SinglePage from "./pages/ProductPage/Singlproduct";
import Creatproduct from "./pages/ProductPage/Creatprodukt";
import Editproduct from "./pages/ProductPage/Editproduct";
import Login from "./pages/ProfilePage/Login";

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
          <Route path="login" element={<Login />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
