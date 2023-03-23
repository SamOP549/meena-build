import React from 'react'
import Hero from '@/components/Hero'
import Image from 'next/legacy/image'
import aboutimg from '@/public/about.jpg'

const About = () => {
    return (
        <div>
            <Hero screen={0} title="About Us" />
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800">
                    <div className="flex flex-wrap items-center">
                        <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                            <Image quality="90" priority src={aboutimg}
                                className="w-full" alt="about" />
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                            <div className="px-6 py-12 md:px-12">
                                <h2 className="text-xl font-bold mb-4">ABOUT MEENABUILD</h2>
                                <p className='mb-6 text-gray-700 text-md'> We provide integrated design, engineering, procurement, construction and interior design services in the construction industry.
                                    Other than working with precision on mapping client requirements, planning and strategy making, project designing and vendor management.
                                    With the ultimate aim of client delight, the creative team has always added significant value in completing the projects both in commercial and residential sectors.</p>
                                <h2 className="text-xl font-bold mb-4">OUR BEGINNINGS</h2>
                                <p className='mb-6 text-gray-700 text-md'>Hamza Khan (Managing Director) founded Meenabuild, a residential home developer, in mid-2019. He has built the company with transparency as its core value. In early 2020, it started work on its first project which quickly cascaded into more projects as the company&apos;s reputation spread.</p>
                                <h2 className="text-xl font-bold mb-4">WHAT&apos;S NEW</h2>
                                <p>We have been meticulously delivering fully customized houses. We have also recently started working on a new projects, which will provide even faster delivery and efficient costing. In the future, we believe that we will scale-up this initiative which would further help the company in delivering beautiful homes to our customers in a fast and an additional cost-effective manner.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About