import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

import Signup from "./ui-components/Signup";
import Admin from "./components/Admin";

import Login from "./ui-components/Login";
import User from "./components/User";
import Moviepage from "./components/Moviepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

      
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/page" element={<Moviepage />} />
      </Routes>
    </>
  );
}

export default App;
