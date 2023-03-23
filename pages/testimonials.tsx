import React, { useRef } from 'react'
import Hero from "@/components/Hero"
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';


const Testimonial = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const heroData = [
    {
      review: "Meenabuild has really proved to be a boon for the expansion of home seekers. They are the one who promise and complete the projects as promised on time and with perfection. I wish the team for a great future ahead with the same working efficiency.",
      name: "- Col. Vijay Prakash Diwedi",
    },
    {
      review: "I am very delighted to speak anything good about Meenabuild team. They are the one who has just completed my biggest desire in the interior designing field. I would not regret announcing that the Meenabuild are the best in the designing.",
      name: "- Capt. Shubham Sinha"
    },
    {
      review: "Meenabuild has helped us in expansion of our home. They are a team of professionals, who have guided us each step in constructing my dream house. And they have also explained us different options for better understanding.",
      name: "- Capt. Abhishek Singh"
    },
    {
      review: "Thank you for guiding us through the construction process, being kind, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best! All the best for to your whole team of hard working people.",
      name: "- Mr. Shivam Shankar"
    }
  ]
  const slides = heroData.map((data, index) => {
    return (
      <Carousel.Slide key={index}>
        <div className='sm:px-0'>
          <h3 className='sm:text-base text-sm text-center'>{data.review}</h3>
          <p className='sm:text-base text-sm mt-10 text-center'>{data.name}</p>
        </div>
      </Carousel.Slide>
    )
  })
  return (
    <div>
      <Hero screen={0} title="Our Reviews" />
      <div className='md:px-20 sm:px-10 px-4 break-words my-12'>
        <div className='flex flex-col items-center justify-between overflow-hidden rounded-xl shadow-xl sm:px-14 px-4 py-16 space-y-20'>
          <div className='flex flex-col items-center'>
            <h4 className='tracking-[.3em] text-gray-400 sm:text-base text-sm'>CLIENT</h4>
            <h2 className='sm:text-3xl text-xl font-semibold text-gray-700'>TESTIMONIALS</h2>
          </div>
          <Carousel
            loop
            draggable={false}
            withIndicators
            styles={{
              indicator: {
                width: 12,
                height: 12,
                transition: 'width 250ms ease',

                '&[data-active]': {
                  backgroundColor: "#efcd4f",
                },
              },
            }}
            plugins={[autoplay.current]}
            slidesToScroll={1}
            previousControlIcon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            }
            nextControlIcon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            }
            className="md:h-[35vh] h-[25vh] sm:w-full w-[80vw]"
          >
            {slides}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonial