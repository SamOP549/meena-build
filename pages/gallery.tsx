import React, { useState } from 'react'
import Hero from '@/components/Hero'
import Image from 'next/image'
import g1 from '../public/gallery/constr_port_1.jpg'
import g2 from '../public/gallery/constr_port_2.jpg'
import g3 from '../public/gallery/constr_port_3.jpg'
import g4 from '../public/gallery/constr_port_4.jpg'
import g5 from '../public/gallery/constr_port_5.jpg'
import g6 from '../public/gallery/constr_port_6.jpg'
import Modal from '@/components/Modal'

const Gallery = () => {
    const [clickedImg, setClickedImg] = useState("");
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item: any, index: any) => {
        setCurrentIndex(index);
        setClickedImg(`./gallery/constr_port_${index+1}.jpg`);
        const navbar=document.getElementsByClassName('navbar')
        navbar[0].classList.add('hidden')
    };
    const cards = [
        {
            title: 'Construction Project',
            category: 'Commercial',
            image: g1,
        },
        {
            title: 'House Project',
            category: 'Residential Project',
            image: g2,
        },
        {
            title: 'Custom Job',
            category: 'Interior Design',
            image: g3,
        },
        {
            title: 'Machine At Work',
            category: 'Industrial Work',
            image: g4,
        },
        {
            title: 'Work Day',
            category: 'People',
            image: g5,
        },
        {
            title: 'Excavation',
            category: 'Ground Work',
            image: g6,
        },
    ]
    return (
        <div>
            <Hero screen={0} title="Gallery" />
            <div className='md:px-6 sm:px-4 px-2 my-12'>
                <div className='overflow-hidden sm:px-14 px-4 py-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        cards.map((card, index) => {
                            return (
                                <div key={index} className="gallery-card">
                                    <div className="card-details">
                                        <Image src={card.image} alt="heroBackdrop" />
                                    </div>
                                    <div className="card-cover flex items-center justify-between p-4">
                                        <div>
                                            <p className='text-lg font-bold mb-2'>{card.title}</p>
                                            <p className='text-sm'>{card.category}</p>
                                        </div>
                                        <div className='flex space-x-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleClick(card, index)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-blue-400 ease-in-out duration-300 cursor-pointer">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-blue-400 ease-in-out duration-300 cursor-pointer">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {clickedImg && (
                        <Modal
                            clickedImg={clickedImg}
                            setClickedImg={setClickedImg}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Gallery