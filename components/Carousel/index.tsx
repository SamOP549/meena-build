import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import Link from 'next/link';

function Demo() {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const heroData = [
        {
            title: "Today WeBuilt, Tommorow's Legacy",
            description: "We Understand How Building A Home Is One Of The Biggest Emotional And Financial Investment For Anyone In India.",
        },
        {
            title: "We Like To Build Things With Technology.",
            description: "Our Mission Is To Build Long Term Relationships With Our Clientele By Proving The Best Services With The Highest Ethical Standards In Conducting Our Business.",
        }
    ]
    const slides = heroData.map((data, index) => {
        return (
            <Carousel.Slide key={index}>
                <h3 className='md:text-5xl text-3xl font-semibold'>{data.title}</h3>
                <p className='mt-10 md:px-36 px-10'>{data.description}</p>
                <Link href="/contact">
                    <button className='bg-white rounded-3xl text-gray-800 text-sm font-bold py-4 px-8 mt-10 hover:bg-[#efcd4f] ease-in-out duration-500'>Book An Appointment With Our Team</button>
                </Link>
            </Carousel.Slide>
        )
    })
    return (
        <Carousel
            mx="auto"
            loop
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            previousControlIcon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            }
            nextControlIcon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            }
            className="text-white md:w-[90vw] w-[95vw]"
        >
            {slides}
        </Carousel>
    );
}

export default Demo;