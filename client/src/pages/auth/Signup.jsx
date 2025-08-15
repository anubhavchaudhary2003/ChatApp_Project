import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { useState } from 'react';

const signup = () => {
  const [SignUpData, setSignUpData] = useState({
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
});
const handleinputChange = (e) => {
  setSignUpData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
console.log(SignUpData);
return (
    <div className="flex items-center justify-center h-screen rounded-lg bg-base-100">
      <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
  <legend className="fieldset-legend">Register</legend>
  <label className="label">Full Name</label>
  <input name='fullName' type="text" className="input" placeholder="Full Name" onChange={handleinputChange}/>
  <label className="label"><FaUser />Username</label>
  <input name = 'username' type="text" className="input" placeholder="Username" onChange={handleinputChange}/>

  <label className="label"><FaLock />Password</label>
  <input name='password' type="password" className="input" placeholder="Password" onChange={handleinputChange} />
  <label className="label"><FaExclamation />Confirm Password</label>
  <input name='confirmPassword' type="password" className="input" placeholder="Enter Password Again" onChange={handleinputChange}/>

  <button className="btn btn-neutral mt-4">Sign Up</button>
  <p className="mt-4 text-center">
    Already have an account ? <a href="/signup" className="link link-primary">SignUp</a>
  </p>
</fieldset>
</div>
  )
}

export default signup