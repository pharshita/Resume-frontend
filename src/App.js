import React  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Newfile from './Components/Newfile';
import Education from './Components/Education';
import SideNav from './Components/Sidenav';
import Date from './Components/Date';
import Skill from './Components/Skill';
import Experience from './Components/Experience';
import Resume1 from './Components/Resume1';
import All_Resume from './Components/All_Resume';
import Resume2 from './Components/Resume2';
import Education_form from './Components/Education_form';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Resume3 from './Components/Resume3';
import Resume4 from './Components/Resume4';
import Resume5 from './Components/Resume5';
import Resume6 from './Components/Resume6';
import Resume7 from './Components/Resume7';
import Basic from './Components/Basic';
import Professional from './Components/Professional';
import Tamplates from './Components/Tamplates';
import Resume8 from './Components/Resume8';
import Resume9 from './Components/Resume9';
import Resume10 from './Components/Resume10';
import Resume11 from './Components/Resume11';
import Test from './Components/Test';
import Const from './Components/Const';
import Education2 from './Components/Education2';
import Page1 from './Components/Page1';
import Table from './Components/Table';
import Forgot_pass from './Components/Forgot_pass';
import Change_password from './Components/Change_password';
import Verify_code from './Components/Verify_code';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} ></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/user' element={<SideNav />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path='/date' element={<Date />}></Route>
          <Route path='/skill' element={<Skill />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/all_resume' element={<All_Resume />}></Route>
          <Route path='/resume1' element={<Resume1 />}></Route>
          <Route path='/resume2' element={<Resume2 />}></Route>
          <Route path="/resume3" element={<Resume3 />}></Route>
          <Route path="/resume4" element={<Resume4 />}></Route>
          <Route path="/resume5" element={<Resume5 />}></Route>
          <Route path="/resume6" element={<Resume6 />}></Route>
          <Route path="/resume7" element={<Resume7 />}></Route>
          <Route path="/resume8" element={<Resume8 />}></Route>
          <Route path="/resume9" element={<Resume9 />}></Route>
          <Route path="/resume10" element={<Resume10 />}></Route>
          <Route path="/resume11" element={<Resume11 />}></Route>
          <Route path="/basic" element={<Basic />}></Route>
          <Route path="/profession" element={<Professional />}></Route>
          <Route path="/tamplates" element={<Tamplates />}></Route>
          <Route path="/const" element={<Const/>}></Route>
          <Route path="/education2" element={<Education2/>}></Route>
          <Route path="/page1" element={<Page1/>}></Route>
          <Route path="/forgot_password" element={<Forgot_pass/>}></Route>
          <Route path="/change_password" element={<Change_password/>}></Route>
          <Route path="/verify" element={<Verify_code/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
