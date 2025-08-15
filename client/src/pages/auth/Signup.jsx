import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { useState } from 'react';
import  { useDispatch }  from 'react-redux';
import {toast} from 'react-hot-toast';
import { registerUser } from '../../store/slice/user/userThunk.js';



const Signup = () => {
const dispatch = useDispatch();
  const [signUpData, setSignUpData] = useState({
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
});
const handleInputChange = (e) => {
  setSignUpData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
const handleSignup = async (e) => {
  
  try {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
    e.preventDefault();
    
    }
    const response = await dispatch(registerUser(signUpData)).unwrap();

      console.log("Registration successful:", response.payload);
      toast.success("Registration successful!");
  
  
  } 
  catch (error) {
    console.error("Error during registration:", error);
    toast.error("An unexpected error occurred during registration");  
  }
};  
return (
    <div className="flex items-center justify-center h-screen rounded-lg bg-base-100">
  <div className="flex items-center justify-center h-screen rounded-lg bg-base-100">
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4 ">
      <label className="label">Full Name</label>
      <input name='fullName' type="text" className="input" placeholder="Full Name" onChange={handleInputChange}/>
      <label className="label"><FaUser />Username</label>
      <input name='username' type="text" className="input" placeholder="Username" onChange={handleInputChange}/>

      <label className="label"><FaLock />Password</label>
      <input name='password' type="password" className="input" placeholder="Password" onChange={handleInputChange} />
      <label className="label"><FaExclamation />Confirm Password</label>
      <input name='confirmPassword' type="password" className="input" placeholder="Enter Password Again" onChange={handleInputChange}/>

      <button onClick={handleSignup} className="btn btn-neutral mt-4">Sign Up</button>
      <p className="mt-4 text-center">
        Already have an account ? <a href="/login" className="link link-primary">Login</a>
      </p>
    </fieldset>
  </div>
</div>
)
}

export default Signup