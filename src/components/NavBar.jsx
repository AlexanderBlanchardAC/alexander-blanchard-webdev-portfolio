import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {

    const [ siteNav, setSiteNav ] = useState(false);

    const navLinks = [
        {
            id: 0,
            link: "home",
        },
        {
            id: 1,
            link: "about",
        },
        {
            id: 2,
            link: "projects",
        },
        {
            id: 3,
            link: "tech"
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        }
    ];

    //px - padding left and right py - padding top and bottom
    //hidden until 768px hidden md:flex
  return (
  <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
    <div>
        <h1 className="text-5xl font-signature ml-2">Alexander Blanchard</h1>
    </div>
    <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
            <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
            >
                <Link to={link} smooth duration={500}>
                    {link}
                </Link>
            </li>
        ))}
    </ul>

    <div onClick={() => setSiteNav(!siteNav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >  
        {siteNav ?  <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {siteNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {navLinks.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                    <Link onClick={() => setSiteNav(!siteNav)}
                    to={link}
                    smooth
                    duration={500}
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    )}
  
  </div>
  )
};

export default NavBar;
