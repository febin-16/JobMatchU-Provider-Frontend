import './App.css'
import Home from './pages/Home';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App() {
  return(
    <div>  
      <BrowserRouter>
            <div>
              <Routes>
                <Route path={"/"} element={<Home/>} exact />                
              </Routes>
            </div>
      </BrowserRouter>
  </div>
  );
}
export default App
