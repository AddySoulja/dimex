import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import store from "./redux/store";
import App from "./App";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Profile from "./components/pages/Profile";
import DisplayItem from "./components/product/DisplayItem";
import Wallet from "./components/pages/Wallet";
import Create from "./components/pages/Create";
import Sellers from "./components/pages/Sellers";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Explore from "./components/pages/explore/Explore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route index={true} path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore:id" element={<DisplayItem />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/create" element={<Create />} />
        <Route path="/sellers" element={<Sellers />} />
      </Route>
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
