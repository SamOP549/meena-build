import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/Hero'
import mision from '../public/mission.jpg'
import processBanner from '../public/process-banner.png'
import { useState } from 'react'

export default function Home() {
  const process = [
    {
      title: 'PLANNING',
      description: 'We Try To Thoughrly Understand The Requirment & Needs Of Our Customers So As To Give The Best In Class Solutions For The Said Requirement. Followed By The Measurment To Calculate The Estimated Cost Of The Project.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>`
    },
    {
      title: 'DRAWING & DESIGN',
      description: 'We Will Provide The Clients With Custom 2d, 3d And Elevation Designs For Better Understanding Of The Project By The Client. We Will Make Sure For The Satisfaction Of The Customer And To Incorporate His Design Preference To The Best Of Our Understanding.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>`
    },
    {
      title: 'PROCUREMENT',
      description: 'We Will Make Sure That All Procurement Activities Are In Place Before The Start Of The Construction So As To Finish The Project Hassle Free And In Stipulated Time With Best Quality Material Which Is Already Been Agreed With Our Client.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256s-22.1-118.9-58.8-163.3L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L58.8 92.7C22.1 137.1 0 193.9 0 256s22.1 118.9 58.8 163.3L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>`
    },
    {
      title: 'EXECUTION',
      description: 'To Make Sure Simultaneous Mobilization Of Manpower And Material So As To Go About The Project With Precision And Staged Manner To Avoid Wastage Of Man Hours And Material Keeping In Mind The Deadlines.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`
    },
    {
      title: 'HANDOVER',
      description: 'We Will Provide Proper Inspection Of The Property To The Client, So As To Make Sure That The Material Used Is As Per The Standard Agreed During The Commencement Of The Project And All The Amenities Are Properly Functioning And The Project Is Well Executed.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528 512"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"/></svg>`
    }
  ]
  const [selected, setSelected] = useState(process[0])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero screen={0} />
        <section data-aos="fade-up" className="text-gray-800 body-font mb-10 mt-10">
          <div className={`container mx-auto flex md:flex-row flex-col items-center`}>
            <div className="lg:max-w-lg w-full md:mb-0 mb-8">
              <Image quality="90" priority className="rounded" src={mision} alt="Mission" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:px-20 sm:px-12 px-12 flex flex-col text-center items-center">
              <h1 className="title-font md:text-4xl tracking-tighter text-3xl mb-4 font-medium text-black">Our Mission</h1>
              <p className="md:text-base text-xs mb-8 leading-relaxed">At Meenabuild, we all come to work every day because we want to make home construction hassle-free for our clients. Our mission at Meenabuild is to transform the individual residential development market in India. The company wants to make this journey a happy, hassle-free and memorable experience for all. With Meenabuild it just won&apos;t be the final product you get, but also the experience.</p>
              <div className="flex justify-center">
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container lg:px-10 px-5 py-24 mx-auto">
            <div className="text-center mb-12">
              <h1 className="sm:text-4xl text-3xl font-medium text-center tracking-tighter title-font text-gray-900 mb-4">Our Process</h1>
            </div>
            <div className="flex md:flex-row flex-col md:items-start md:space-x-4">
              <div className='flex sm:flex-row flex-col items-center px-4 md:w-3/4 w-full mx-auto space-x-8 py-8'>
                <ul className='md:w-fit sm:w-1/2 sm:mr-0 mr-auto'>
                  {process.map((item, index) => (
                    <li key={index} className={`mb-4 flex px-6 items-center font-bold space-x-3 cursor-pointer ${selected.title == item.title ? "border-r-4 border-[#efcd4f] text-black" : "border-r-4 text-gray-600"}`} onClick={() => setSelected(item)}>
                      <h2 className="text-lg title-font ml-auto">{item.title}</h2>
                      <div className='h-4 w-4' dangerouslySetInnerHTML={{ __html: `${item.svg}` }} />
                    </li>
                  ))}
                </ul>
                <div className='sm:w-2/4 sm:mt-0 mt-4'>
                  <h4 className='text-2xl text-gray-700 font-bold'>{selected.title}</h4>
                  <p className='mt-4 text-sm text-gray-600'>{selected.description}</p>
                </div>
              </div>
              <Image src={processBanner} alt="process" className='mx-auto' />
            </div>
          </div>
        </section>
        <section className=''>
          <div className="lg:px-10 py-24" style={{ background: "url('./constr_counter_parallax.jpg')", height: "fit" , backgroundPosition: "" }}>
            <div className="flex flex-col text-center justify-center mx-auto text-white">
              <div className='flex flex-col justify-center space-y-12 py-[100px]'>
                <div>
                  <p className="text-sm tracking-[0.3em] font-medium text-center title-font">BEST IN CLASS</p>
                  <p className="mx-auto leading-relaxed text-5xl break-words font-bold">FOR TURNKEY PROJECTS</p>
                </div>
                <div className='flex md:flex-row flex-col items-center justify-between md:space-y-0 space-y-10'>
                  <div className='md:border-r md:w-1/3'>
                    <p className='text-6xl font-bold'>11</p>
                    <p className='font-bold mt-3'>RUNNING PROJECTS</p>
                  </div>
                  <div className='md:border-r md:w-1/3'>
                    <p className='text-6xl font-bold'>23</p>
                    <p className='font-bold mt-3'>FINISHED PROJECTS</p>
                  </div>
                  <div className='md:w-1/3'>
                    <p className='text-6xl font-bold'>33</p>
                    <p className='font-bold mt-3'>HAPPY CLIENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
