import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Learn from "./pages/learn";
import NavBar from "./component/navBar";

export default function App() {
  return(
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/learn' element={<Learn/>} />
      </Routes>
    </>

  )
}