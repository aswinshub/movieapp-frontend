
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from "./ui-components/Login";
import Signup from "./ui-components/Signup";
function App() {
  return (
    <>
      <Header/>



      <Routes>
    
        <Route
          path="/movie"
          element={
        
              <Home child={<Home />} />
           
          }
        />
        <Route
          path="/login"
          element={
         
              <Login child={<Login />} />
           
          }
        />
           <Route
          path="/signup"
          element={

              <Signup child={<Signup />} />
           
          }
        />

       
      </Routes>



    </>
  );
}

export default App;
