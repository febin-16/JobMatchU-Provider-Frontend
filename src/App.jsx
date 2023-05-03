import './App.css'
import Home from './pages/Home';
import  Profile from './pages/Profile';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App() {
  return(
    <div>  
      <BrowserRouter>
            <div>
              <Routes>
                <Route path={"/"} element={<Home/>} exact />
                <Route path='profile' element={<Profile />}></Route>                
              </Routes>
            </div>
      </BrowserRouter>
  </div>
  );
}
export default App
