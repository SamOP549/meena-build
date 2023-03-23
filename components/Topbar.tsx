import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [display, setDisplay] = useState('block')
    const [shadow, setShadow] = useState('')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#transparent');
                setTextColor('#ffffff');
                setShadow('shadow-md')
                setDisplay('none')

            } else {
                setColor('transparent');
                setTextColor('#ffffff');
                setShadow('')
                setDisplay('block')
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}`, display: `${display}` }}
            className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${shadow}`}
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link rel="preload" href='/'>
                    <Image quality="90" priority className='cursor-pointer' src='/logo.png' width={150 * 1.5} height={50} alt="navbarLogo" />
                </Link>
                <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                    <Link href="tel:05223518426">
                        <li className='p-4'>
                            <div className='flex items-center justify-between space-x-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#efcd4f" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <div>
                                    <p className='text-sm'>CALL US</p>
                                    <p className='text-sm'>+91 05223518426</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link href="mailto:contact@meenabuild.com">
                        <li className='p-4'>
                            <div className='flex items-center justify-between space-x-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#efcd4f" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <div>
                                    <p className='text-sm'>E-MAIL</p>
                                    <p className='text-sm'>contact@meenabuild.com</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <li className='p-4'>
                        <div className='flex items-center justify-between space-x-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#efcd4f" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <div>
                                <p className='text-sm'>WORKING HOURS</p>
                                <p className='text-sm'>Mon. - Sat. 10 AM - 7 PM</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;