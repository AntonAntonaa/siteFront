import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/ProfilePage/Profile";
import Product from "./pages/ProductPage/Product";
import Layout from "./components/Layout";
import SinglePage from "./pages/ProductPage/Singlproduct";
import Creatproduct from "./pages/ProductPage/Creatprodukt";
import Editproduct from "./pages/ProductPage/Editproduct";
import Login from "./pages/ProfilePage/Login";
import AuthProvider from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RecuireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <RequireAuth>
            <Route path="profile" element={<Profile />} />
          </RequireAuth>
          <RequireAuth>
            <Route path="product/:new" element={<Creatproduct />} />
          </RequireAuth>
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<SinglePage />} />
          <RequireAuth>
            <Route path="product/:id/edit" element={<Editproduct />} />
          </RequireAuth>
          <RequireAuth>
            <Route path="/login" element={<Login />} />
          </RequireAuth>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
