import './App.css'
import Home from './pages/Home';
import PostJob from"./pages/PostJob";

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App() {
  return(
    <div>  
      <BrowserRouter>
            <div>
              <Routes>
                <Route path={"/"} element={<PostJob/>} exact />                
              </Routes>
            </div>
      </BrowserRouter>
  </div>
  );
}
export default App;
