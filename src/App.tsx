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
import Register from "./pages/Register";
import { useEffect, useState } from "react";

function App() {
  // const [isInitialized, setIsInitialized] = useState(false)

  // useEffect(() => {

  // }, [])

  // if (!isInitialized) return <h1>Loading...</h1>
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/product"
            element={
              <RequireAuth>
                <Product />
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/product/:id"
            element={
              <RequireAuth>
                <SinglePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
