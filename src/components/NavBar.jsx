import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";


const NavBar = () => {

    const [ siteNav, setSiteNav ] = useState(false);

    const navLinks = [
        {
            id: 0,
            label: "Home",
            link: "homeContainer",
          
        },
        {
            id: 1,
            label: "About",
            link: "aboutMeContainer",
        
        },
        {
            id: 2,
            label: "Projects",
            link: "projectsContainer",
          
           
        },
        {
            id: 3,
            label:"Experience",
            link: "experienceContainer",
        },
        {
            id: 4,
            label: "Contact",
            link: "contactContainer",
           
        }
    ];

    //px - padding left and right py - padding top and bottom
    //hidden until 768px hidden md:flex
  return (
  <div id="navContainer" className="flex justify-between items-center  h-20 px-4 text-white bg-black fixed">
    <div>
        <h1 id='name' className="text-4xl font-signature ml-2 mt-4">Alexander Blanchard</h1>
    </div>
    <ul className="hidden md:flex">
        {navLinks.map(({ id, label, link }) => (
            <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-pink-400"
            >
                <Link to={link} smooth duration={500}>
                    {label}
                </Link>
            </li>
        ))}
    </ul>

    <div onClick={() => setSiteNav(!siteNav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >  
        {siteNav ?  <FaTimes size={25} /> : <FaBars size={25} />}
    </div>

    {siteNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {navLinks.map(({ id, label, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                    <Link onClick={() => setSiteNav(!siteNav)}
                    to={link}
                    smooth
                    duration={500}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    )}
  
  </div>
  )
};

export default NavBar;
