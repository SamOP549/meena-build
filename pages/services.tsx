import React from 'react'
import Hero from '@/components/Hero'

const Services = () => {
    const services = ['Turn-key And Construction', 'Interior Designing', '2D & 3D Drawings', 'Vastu Consultancy', 'Landscaping', 'Renovation']
    return (
        <div>
            <Hero screen={0} title="Services" />
            <div className='flex lg:flex-row flex-col items-center bg-[rgba(248,248,248,1)] py-16 lg:pr-6'>
                <div className="lg:w-1/2 w-full">
                    <img src="/services-background.png" className='w-full bg-no-repeat bg-cover mb-8 bg-center relative' alt="heroBackdrop" />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col px-4" >
                    <h3 className='text-4xl text-gray-700'>Our Services</h3>
                    <p className='text-md text-gray-400 mt-4'>Turning your cherished dreams into reality. Which You&apos;ll admire.</p>
                    <ul className='mt-4'>
                        {services.map((service, index) => (
                            <li key={index} className="mt-4 group cursor-pointer">
                                <div className='bg-white flex items-center justify-between px-6 py-4 font-extrabold text-gray-800 text-md'>
                                    <div className='flex items-center space-x-6'>
                                        <p className='text-[#efcd4f]'>0{index + 1}</p>
                                        <p className='group-hover:text-[#efcd4f]'>{service}</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover:text-[#efcd4f]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services