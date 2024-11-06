import React from 'react'

export default function Header() {
  return (
    <div className='grid grid-cols-2 mt-20 md:mt-0'>
      <div className='flex md:ml-5 '>
        <h2 className='md:text-[33px] font-medium font-outfit md:leading-[31px] pt-3 md:pt-0'>Profile</h2>
      </div>
      <div className='flex justify-end gap-3 md:mr-8'>
        <button className='md:px-5 md:py-3 px-3 py-2 border border-black rounded-[12px] text-black'
          style={{ opacity: "20%" }}
        >Cancel</button> 
        <button className='md:px-5 md:py-3 px-3 py-2 rounded-[12px] text-white'
          style={{ background: "#1C6CE5" }}
        >Save</button>
      </div>
    </div>
  )
}
