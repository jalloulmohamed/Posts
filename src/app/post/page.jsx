"use client";
import React, { useEffect, useState } from 'react'
import { auth ,db} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import {toast} from "react-toastify"

export default function page(){
    const [post,setPost] = useState({description: ""});
    const routes = useRouter()
    //SubmitPost 
    const [user, loading] = useAuthState(auth);
    const submitPost = async (e) => {
        e.preventDefault();

        // checks for dercreption
        if(!post.description )
        {
            toast.error("Description is empty ",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1000
            })
            return;
        }
        if(post.description.length> 300 )
        {
            toast.error("Description too long ",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1000
            })
            return;
        }
        //make an new post 
        const collectionRef = collection(db,'posts');
        await addDoc(collectionRef,{
            ...post,
            timestamp : serverTimestamp(),
            user : user.uid,
            avatar:user.photoURL,
            usernmae: user.displayName,
        })
        setPost({description:""})
        routes.push("/")
        toast.success("success add post ",{
            position: toast.POSITION.TOP_CENTER,
            autoClose:1000
        })
        return;
    }
  return (
    <div className='my-20 p-5 shadow-lg rounded-md max-w-md mx-auto'>
        <form onSubmit={submitPost} action="">
            <h1 className='text-2xl font-bold '>Create a new Post</h1>
            <div className='py-2'>
                <h3 className='text-lg font-medium'>Description</h3>
                <textarea value={post.description} onChange={(e) => setPost({...post , description :e.target.value})} className='border w-full rounded-lg p-2 focus:border-cyan-900 ' name="" id="" cols="30" rows="10"></textarea>
                <p className ={`text-sm text-end font-medium text-[#525252] ${(post.description.length > 300) ? "text-red-500" : ""} `}>{post.description.length}/300</p>
            </div>
            <button className='bg-[#181818]  text-white w-full py-2  rounded-md '>Submit</button>
        </form>
    </div>
  )
}
