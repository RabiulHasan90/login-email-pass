import { useState } from "react";
import auth from "../../firebase/firebase.init";
import {  signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
  const [userError, setUserError] = useState('')
  const handleLogin = (e) => {
    e.preventDefault();
    setUserError(' ')
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)

  })
  .catch((error) => {
    const errorMessage = error.message;
    setUserError(errorMessage)
  });

    
  }
  return (
    <div>
      <div>
        <form action="form" onSubmit={handleLogin}>
        <input type="email" name="email" id="" placeholder='email' />
        <input type="password" name="password" id="" placeholder='pass'/>
          <button type="submit" className='btn'>submit</button>
          </form>
      </div>
      {
        userError && <p>{userError }</p>
      }
    </div>
  )
}
