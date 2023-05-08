import './App.css'
import Home from './pages/Home';
import  Profile from './pages/Profile';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Applicants_Info from './components/Applicants_Info';
import Navbar from './components/Navbar';
import Selected_Appl_Info from './components/Selected_Appl_Info';

function App() {
  return(
    <div>  
      <BrowserRouter>
            <div>
              <Navbar />
              <Routes>
                <Route path={"/"} element={<Home/>} exact />
                <Route path='profile' element={<Profile />}></Route>  
                <Route path='/profile/Applicants_Info' element={<Applicants_Info />} exact></Route>     
                <Route path='/profile/Selected_Applicants_Info' element={<Selected_Appl_Info />} exact></Route>          
              </Routes>
            </div>
      </BrowserRouter>
  </div>
  );
}
export default App
