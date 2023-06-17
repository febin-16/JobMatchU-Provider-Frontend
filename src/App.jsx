import './App.css'
import Home from './pages/Home';
import  Profile from './pages/Profile';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Applicants_Info from './pages/Applicants_Info';
import Navbar from './components/Navbar';
import Selected_Appl_Info from './pages/Selected_Appl_Info';
import PostJob from './pages/PostJob'
import JobDetails from './pages/JobDetails';

function App() {
  return(
    <div>  
      <BrowserRouter>
            <div>
              <Navbar />
              <Routes>
                <Route path={"/"} element={<Home/>} exact />
                <Route path='/PostJob' element={<PostJob />}></Route>
                <Route path='profile' element={<Profile />}></Route>  
                <Route path='/Applicants_Info/:job_id' element={<Applicants_Info />} exact></Route>     
                <Route path='/Selected_Appl_Info/:job_id' element={<Selected_Appl_Info />} exact></Route>  
                <Route path='/JobDetails/:job_id' element={<JobDetails />} exact></Route>        
              </Routes>
            </div>
      </BrowserRouter>
  </div>
  );
}
export default App;
