import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slice/user/userThunk.js';







const Login = () => {
  const dispatch = useDispatch();
  const [LoginData, setLoginData] = useState({
  username: "",
  password: "",
});
const handleLogin = async (e) => {
  try {
    e.preventDefault();
    const response = await dispatch(loginUser(LoginData)).unwrap();
    const data = response.payload;
    
      console.log("Login successful:", data);
      toast.success("Login successful!");
    
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("An unexpected error occurred during login");
  }
  
};
const handleInputChange = (e) => {
  setLoginData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
console.log(LoginData);
  return (
    <>
   <div className="flex items-center justify-center h-screen rounded-lg bg-base-100">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login </legend>

  <label className="label"><FaUser />Username</label>
  <input name = 'username'type="text" className="input" placeholder="Username" onChange={handleInputChange} />

  <label className="label"><FaLock />Password</label>
  <input name='password' type="password" className="input" placeholder="Password" onChange={handleInputChange} />

  <button onClick={handleLogin} className="btn btn-neutral mt-4">Login</button>
  <p className="mt-4 text-center">
    Don't have an account? <a href="/signup" className="link link-primary">Sign Up</a>
  </p>
</fieldset>
 
    </div>
    </>
  )
}

export default Login