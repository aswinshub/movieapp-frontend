import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

import Signup from "./ui-components/Signup";
import Admin from "./components/Admin";

import Login from "./ui-components/Login";
import User from "./components/User";
import Moviepage from "./components/Moviepage";
import Adminform from "./components/Adminform";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

      
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/movieupdate" element={<Adminform />} />
        <Route path="/movieupdate/:_id" element={<Adminform />} />

<Route path="/page" element={<Moviepage />} />
<Route path="/:_id" element={<Moviepage />} />


      </Routes>
    </>
  );
}

export default App;
