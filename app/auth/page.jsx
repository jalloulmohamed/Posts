'use client';
import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import from 'firebase/auth'
import { auth } from '../utils/firebase';
import { useRouter } from 'next/navigation';
import {useAuthState} from 'react-firebase-hooks/auth/'

export default function Page() {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
   const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      router.push("/")
    } catch (error) {
      console.error(error); // Log the error for debugging
    }
  };
  useEffect(()=>{
    if(user)
      router.push("/")
  },[user])

  return (
    <div className=' rounded-md mt-10 text-[#212121] max-w-[400px] r p-10 mx-auto'>
      <h1 className='text-2xl font-medium'>Join Today</h1>
      <div className='py-4'>
        <h3 className='py-4'>Sign in with one of the providers</h3>
        <button onClick={GoogleLogin} className='text-[#212121] py-2  flex items-center justify-center rounded-full border w-full'>
          <FcGoogle className='mr-3' size={28} />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}