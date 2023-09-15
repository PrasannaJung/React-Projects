// importing icons
import googleIcon from "../assets/Google.svg";
import githubIcon from "../assets/GitHub.svg";

// import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = function (e) {
    setEmail(e.target.value);
  };
  const onPasswordChange = function (e) {
    setPassword(e.target.value);
  };

  const registerUser = async function (e) {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  };

  const loginWithGoogle = function () {
    signInWithPopup(auth, provider)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

  return (
    <div className=' basis-1/3'>
      <form onSubmit={registerUser}>
        <input
          className='bg-[#e1f0f7] w-full px-4 py-2 rounded-md'
          onChange={onEmailChange}
          value={email}
          type='text'
          name='email'
          id='email'
        />
        <input
          className='bg-[#e1f0f7] w-full mt-4 px-4 py-2 rounded-md'
          onChange={onPasswordChange}
          value={password}
          type='password'
          name='password'
          id='password'
        />

        <button className='font-medium bg-[#4461f2]  py-2 text-white rounded-md w-full mt-8'>
          Sign Up
        </button>
      </form>
      <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
        <span className='mx-2'>Or continue with</span>
      </div>
      <div className='flex justify-center gap-8'>
        <button
          className='bg-white px-3 py-1 shadow-2xl rounded-md'
          onClick={loginWithGoogle}
        >
          <img src={googleIcon} alt='Google Icon' />
        </button>
        <button className='bg-white px-3 py-1 shadow-2xl rounded-md'>
          <img src={githubIcon} alt='Github Icon' />
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
