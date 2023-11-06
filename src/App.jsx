import './assets/css/main.css'
import { Route, Routes } from "react-router-dom";
/* 
import Header from './components/Comon/Header/Header'
import Login from "./components/Authentication/Login/Login" 
import Register from "./components/Authentication/Register/Register"
import Footer from './components/Comon/Footer/Footer'
import RegisterGame from './components/Games/RegisterGame/RegisterGame'
import RatingBrowserGames from './components/Games/RatingBrowserGames/AvaliacaoBrowserGames';
import EditRegistrationData from './components/Authentication/EditRegistrationData/EditRegistrationData';
*/
import Home from './components/Games/Home/Home';


function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
  )
}

export default App
