"use client";
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import {PiSignOutFill} from 'react-icons/pi'
import { useRouter } from 'next/navigation';
import {useAuthState} from 'react-firebase-hooks/auth/'

export default function Page() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() =>  {
    if(loading) return;
    if(!user) return router.push("/auth")
  },[user,loading])
  return (
    <div className=''>
        <h1>Yours posts</h1>
        <div>posts</div>
        <button className='flex items-center mt-2 text-red-500'  onClick={() => auth.signOut()}> <PiSignOutFill className='mr-2' size={22}></PiSignOutFill> <span>Sign out</span></button>
    </div>
  )
}
