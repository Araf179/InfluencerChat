import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UserList from "./pages/UserList";
import Pay from "./pages/Pay";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
