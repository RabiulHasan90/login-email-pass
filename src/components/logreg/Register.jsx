import { createUserWithEmailAndPassword } from "firebase/auth";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

import auth from '../../firebase/firebase.init'
import { useState } from "react";

export default function Register() {
  const [userError, setUserError] = useState(' ')
  const [success, setSuccess] = useState(' ')
  const [showPass, setShowPass] = useState(false)
  
  const handleLogin = (e) => {

   e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted)
    setSuccess(' ')
    setUserError(' ')
    if (password.length < 8) {
      setUserError('please given pass of  char')
      return;
    } else if (!/[a-z]/.test(password)) {
      setUserError('please small handed word')
      return;
    }else if (!accepted) {
      setUserError('please son terms and condition')
      return;
    }

     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
 
    const user = userCredential.user;
    console.log(user)
    setSuccess('success register ')
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    setUserError(errorMessage)
    
  });

  

    
  }
  return (
    <div>
       <div className="">
        <form action="form" onSubmit={handleLogin} className="border">
        <input className="border" type="email" name="email" id="" required placeholder='email' /> <br />
          <div className="relative">
             <input className="border" type={showPass ? "text" : "password"} name="password" id="" placeholder='pass' />
          <span className="absolute  text-2xl text-red-500 left-20" onClick={() => setShowPass(!showPass)}>{
          showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>
          }</span>
          </div>
          <br />
          <input type="checkbox" name="terms" id="" /> <p>accepted term and condition</p> <br />
          <button type="submit" className='btn'>Register</button>
        </form>
        {
          userError && <p>{userError }</p>
        }
        {
          success && <p>{ success}</p>
        }
      </div>
    </div>
  )
}
