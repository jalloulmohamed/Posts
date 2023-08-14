"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth/'
import { auth } from '../utils/firebase';
import {BiMessageSquareAdd} from  "react-icons/bi"
export const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div  className='p-4 flex items-center justify-between '>
       {user &&  <Link href="/dashbord" className=''><img className='rounded-full ' src={user.photoURL} alt="" srcset=""  width={32}/> </Link>}

        <Link href="/" className='text-xl font-bold' >posts</Link>
        {!user ?  <Link href="/auth" className='bg-[#181818] text-[#fff] text-sm  px-4 rounded-[4px] py-[5px]'>Join New</Link>
          :  <Link href="/post" className='text-[#1e9bf0] flex items-center   py-1.5'> <BiMessageSquareAdd className='' size={22}></BiMessageSquareAdd></Link>
      }
  
    </div>
  )
}
