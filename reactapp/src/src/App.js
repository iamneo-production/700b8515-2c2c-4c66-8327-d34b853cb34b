import React from 'react'
import Login from './Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup/Signup';
import Userviewpolicy from './Userviewpolicy/Userviewpolicy'
import Adminaddpolicy from './Adminaddpolicy/Adminaddpolicy'
import Userprofile from './Userprofile/Userprofile'
import Userappliedpolicy from './Userappliedpolicy/Userappliedpolicy'
import Adminappliedpolicy from './Adminappliedpolicy/Adminappliedpolicy'
import Admineditappliedpolicy from './Admineditappliedpolicy/Admineditappliedpolicy'
import Adminviewapplicants from './Adminviewapplicants/Adminviewapplicants'
import Admineditapplicants from './Admineditapplicants/Admineditapplicants'
import Adminsignup from './Adminsignup/Adminsignup'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Userviewpolicy" element={<Userviewpolicy />} />
          <Route path="/Userprofile" element={<Userprofile />} />
          <Route path="/Userappliedpolicy" element={<Userappliedpolicy/>} />
          <Route path="/Adminaddpolicy" element={<Adminaddpolicy/>} />
          <Route path="/Adminappliedpolicy" element={<Adminappliedpolicy/>} />
          <Route path="/Admineditappliedpolicy" element={<Admineditappliedpolicy/>} />
          <Route path="/Adminviewapplicants" element={<Adminviewapplicants/>} />
          <Route path="/Admineditapplicants" element={<Admineditapplicants/>} />
          <Route path="/Adminsignup" element={<Adminsignup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
