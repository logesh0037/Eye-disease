import React from 'react'
import { services } from '../assets'

const Services = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex flex-col bg-[#00000080] text-white gap-3 text-center py-16 px-5 lg:pb-42'>
          <h1 className='text-3xl'>Our Services</h1>
          <p>Comprehensive AI-powered solutions for eye health</p>
        </div>
        <div className='bg-white flex flex-col gap-2'>
          <div className='py-16 text-center flex flex-col gap-3 px-5'>
            <h1 className='text-3xl font-semibold'>What We Offer</h1>
            <p>Discover our range of innovative eye care services powered by artificial intelligence</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 lg:px-32 mb-5'>
            {
              services.map((service,index)=>{
                return(
                  <div key={index} className='border cursor-pointer rounded-lg shadow-md border-[#00000033 ] p-5'>
                    <div className='flex items-center gap-2 mb-2'>
                      <div className='w-8 h-8 bg-[#00000033]'></div>
                    <h1 className='text-lg'>{service.title}</h1>
                    </div>
                    <p className='text-sm mb-3'>{service.description}</p>
                    <ul className='flex flex-col gap-3 px-2'>
                      {
                        service.features.map((sub,index)=>{
                          return(
                            <div key={index}>
                              <li className='list-disc'>{sub}</li>
                            </div>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
