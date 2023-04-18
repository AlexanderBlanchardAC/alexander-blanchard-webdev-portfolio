import React from 'react';
import portfolioAlexander from "../assets/portfolioAlexander.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./home.css";


const Home = () => {
  return (
    <div id="homeContainer" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 id='title' className="text-3xl sm:text-4xl font-bold">Frontend Web Developer</h2>
                <p id='intro' className="text-gray-500 py-4 max-w-md">
                    Responsive pages, games, online stores and anything that can be built with React or the MERN stack. Check out some of my projects below.
                </p>
                <div>
                    <Link
                        to="projectsContainer"
                        smooth
                        duration={600}
                    >
                    <button
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                        Portfolio
                    <span className="group-hover:rotate-90 duration-400">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                    </button>
                    </Link>
                </div>
            </div>
            <div>
                <img src={portfolioAlexander} alt="portfolio Alexander" className="rounded-2xl w-400 h-500 mx-auto w-2/3 md:w-full mb-1" />
            </div>
        </div>
    </div>
  )
}

export default Home;
