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
        <Link href="/" >poster</Link>
        {!user ?  <Link href="/auth" className='bg-[#181818] text-[#fff]  px-5 rounded-md py-1.5'>Join New</Link>
          :  
          <div className='flex items-center justify-center' >
            <Link href="/post" className='text-[#1e9bf0] mr-4 border-r-[1px] flex items-center px-5  py-1.5'> <BiMessageSquareAdd className='mr-2' size={22}></BiMessageSquareAdd><span>Add Post</span></Link>
            <Link href="/dashbord" className=''><img className='rounded-full ' src={user.photoURL} alt="" srcset=""  width={40}/> </Link>
          </div>
      }
       
       
    </div>
  )
}
