import Head from 'next/head'
import { Navbar } from './compenents/Navbar'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


export default function RootLayout({ children }) {
  return (
    <html className='bg-[#f6f9f9]' lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"/>
      </Head>
      <body className='bg-[#fff] h-[100vh] overflow-auto max-w-[500px] m-auto'>
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
