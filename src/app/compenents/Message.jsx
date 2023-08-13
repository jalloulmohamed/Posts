import React from 'react'


export const Message = ({children,avatar,usernmae,description}) => {
  return (
    <div className='p-4 my-2  border-b-[#f6f9f9] border-b-[1px] w-full'>
        <div className='flex  items-center '>
            <img className='rounded-full  mr-2' src={avatar} alt=""  width={40}/>
            <h2 className='text-sm  font-bold text-[#181818]'>{usernmae}</h2>
        </div>
        <div className='ml-12  text-[13px]  py-2 text-[#181818]'>
            <p>{description}</p>
        </div>
    </div>
  )
}
