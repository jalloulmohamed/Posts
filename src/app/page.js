"use client";
import React, { useEffect, useState } from 'react';
import { db } from './utils/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Message } from './compenents/Message';

export default function Home() {
  const [allPost, setAllPostes] = useState([]);
  const getPosts = async () => {
    const collectionRef = await  collection(db, 'posts');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const unsubscribe = await onSnapshot(q, (snapshot) => {
      const arr=[];
      snapshot.docs.forEach((doc) => {
        const documentData = doc.data();
        arr.push(documentData)
      })  
      setAllPostes([...allPost, ...arr]);; 
    });
    return unsubscribe;
  };

  useEffect(() => {
   getPosts();
  }, []);


  return (
    <main className= " md:max-w-[500px] mx-auto ">
      {allPost.map(post => (
         <Message {...post}></Message>
      ))}
    </main>
  );
}

