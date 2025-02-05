import React from 'react'
import { faqs } from '../assets'

const Faq = () => {
  return (
    <div>
      <div>
        <div className='bg-[#00000080] flex flex-col gap-3 p-5 py-8  lg:py-28 text-center text-white'>
          <h1 className='text-3xl'>Frequently Asked Questions</h1>
          <p>Find answers to common questions about VisionAI</p>
        </div>
       <ul className='flex flex-col gap-3 items-center justify-center max-w-[90%] w-max mx-auto py-8'>
        {
          faqs.map((quetion,index)=>{
            return(
              <div key={index} className='border rounded-md shadow-md w-full border-[#00000080] px-2 lg:px-5 py-1'>
                <div className='flex items-center lg:gap-24 gap-3 justify-between cursor-pointer'>
                <li className='text-sm lg:text-base'>{quetion.question}</li>
                <i className="fa-solid fa-caret-down"></i>
                </div>
                <p className='hidden'>{quetion.answer}</p>
              </div>
            )
          })
        }
       </ul>
      </div>
    </div>
  )
}

export default Faq
