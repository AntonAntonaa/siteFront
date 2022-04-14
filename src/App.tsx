import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Layout from "./components/Layout";
import SinglePage from "./components/Singlproduct";
import Login from "./pages/Login";
import RequireAuth from "./hoc/RecuireAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Register from './pages/Register';
import { useEffect, useState } from "react";

function App() {
  
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {

  }, [])

  if (!isInitialized) return <h1>Loading...</h1>
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SinglePage />} />
          <Route path="/registration" element={<Register />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
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
    </Provider>
  );
}

export default App;
