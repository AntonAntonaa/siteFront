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
          <Route path="/login" element={<Login />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<SinglePage />} />
          {/* <Route
            path="/protected"
            element={
              <RequireAuth>
                <Editproduct />
              </RequireAuth>
            }
          />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Creatproduct />
              </RequireAuth>
            }
          /> */}
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
