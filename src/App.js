// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Pages/Home";

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<Home/>} />

     </Routes>
     
     
     </BrowserRouter>
    </>
  );
}

export default App;
