import React from 'react';
import imageGallery from "../assets/portfolioPics/imageGallery.png";
import makeAMatch from "../assets/portfolioPics/makeAMatch.png";
import quizMe from "../assets/portfolioPics/quizMe.png";
import spaceinvaders from "../assets/portfolioPics/spaceinvaders.png";
import bookbay from "../assets/portfolioPics/bookbay.png";
import easybank from "../assets/portfolioPics/easybank.png";
import news from "../assets/portfolioPics/news.png";
import bikeamation from "../assets/portfolioPics/bikeamation.png";
import weatherWherever from "../assets/portfolioPics/weatherWherever.png";
import rocketanim from "../assets/portfolioPics/rocketanim.png";
import wirral from "../assets/portfolioPics/wirral.png";
import creativecoding from "../assets/portfolioPics/creativecoding.png";
import picslider from "../assets/portfolioPics/picslider.png";
import rockpaperscissors from "../assets/portfolioPics/rockpaperscissors.png";
import bonbakery from "../assets/portfolioPics/bonbakery.png";
import alextodo from "../assets/portfolioPics/alextodo.png";
import { Link } from 'react-router-dom';
import "./portfolio.css";


const Portfolio = () => {
    

 
    const apiProjects = [
        {
            id: 1,
            src: quizMe,
            demo: "https://alexanderblanchardac.github.io/quiz-me/",
            desc: "This app uses Open Trivia's API. It allows users to choose a category, amount of questions and type of question. It also trakcs their score. When a user answers incorrectly, the correct answer pops up as an alert, which I will be updating to a modal. It was built using React and utilizes Redux. I experimented with MUI for the styling of this app."

        },
        {
            id: 2,
            src: weatherWherever,
            demo: "https://alexanderblanchardac.github.io/always-take-the-weather/",
            desc: "I built this App as part of my bootcamp. It was built using React and uses ternary operators to give users the option of viewing the weather in celsius or fahrenheit. Using Open Weather's API, users can search for the weather in any city and will be provided with detailed information about the current weather and an overview of the forecast for the coming days."
        },
        {
            id: 3,
            src: bookbay,
            demo: "https://book-bay.netlify.app/",
            desc: "A simple app connected to google's book API that returns a maximum of 12 books per search. People can search by author, title or a key word. Users can select any books and a modal will pop up to give them more information about that book, including a blurb."
        }
    ];

    const fullStack = [
        {
            id: 1,
            src: alextodo,
            demo: "https://ab-to-do-list.netlify.app/",
            desc: "This app uses the MERN stack and allows users to create a todo list. It uses CRUD operations to allow users to control their list."

        }
    ];

    

    const gamesProjects = [
        {
            id: 1,
            src: makeAMatch,
            demo: "https://alexanderblanchardac.github.io/make-a-match-phase-2/",
            desc: "A game for children learning to read CVC words. Built in React, using animation to flip cards and simple logic to identify a match. When a new game is started, the cards are shuffled so that their position changes, creating a new challenge each time."
        },
        {
            id: 2,
            src: spaceinvaders,
            demo: "",
            desc: "Built in Vanilla JS, this classic game allowed me to experiment with Canvas."
        },
        {
            id: 3,
            src: rockpaperscissors,
            demo: "https://ab-rock-paper-scissors.netlify.app/",
            desc: "Another challenge from 'Frontend Mentor.' This game is built using HTML, CSS and JavaScript for the logic."
        }
    ]


    const landingPageProjects = [
        {
            id: 0,
            src: bonbakery,
            demo: "https://bon-bakery-beta.netlify.app/",
            desc: "Prototype of a website I am building for a local business. It is built with React and is built to be responsive using breakpoints."
        },
        {
            id: 1,
            src: easybank,
            demo: "https://ab-easybank-clone.netlify.app/",
            desc: "This challenge is from 'Frontend Mentor' and is built using HTML and CSS. It is fully responsive, using screen breakpoints. It also uses Javascript to control the dropdown menu." 
        },
        {
            id: 2,
            src: news,
            demo:"https://abnews-clone.netlify.app/",
            desc: "This challenge is from 'Frontend Mentor' and is built using HTML and CSS. It is fully responsive."
        },
        {
            id: 3,
            src: wirral,
            demo: "https://ab-welcome-to-the-wirral.netlify.app/",
            desc: "This is a landing page for the area I moved to; The Wirral. It is built using React and is responsive and features on-scroll animation."
        }
    ]

    const animationProjects = [
        {
            id: 1,
            src: bikeamation,
            demo: "https://bikeamation.netlify.app/",
            desc: "An animation built with HTML and SVGs from undraw which were animated using CSS."
        },
        {
            id: 2,
            src: rocketanim,
            demo:"https://abrocketanimation.netlify.app/",
            desc: "An animation built with HTML and CSS."
        },
        {
            id: 3,
            src: creativecoding,
            demo: "https://ab-creative-coding.netlify.app/",
            desc: "A project I built to explore Canvas."
        }
    ]
  const forFunProjects = [
    {
        id: 1,
        src: picslider,
        demo: "https://ab-picture-slider.netlify.app/",
        desc: "A simple React based app that slides through pictures of my puppy to keep track of some of her adventures."
    },
    {
        id: 2,
        src: imageGallery,
        demo: "https://alexanderblanchardac.github.io/photo-blog/",
        desc: "A responsive image gallery built using React. It also features a modal that pops up to display a larger version of a clicked photo."
    }
  ]
  return (
    <div id="projectsContainer"
        className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-xl font-bold inline border-b-4 border-blue-400 text-pink-400">
                        Portfolio
                    </p>
                    <p id='myProjects' className="py-6">Here are some examples of my projects:</p>
                </div>
                <p className='projectType'>Games</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
                    {gamesProjects.map(({ id, src, demo, desc }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="games project"
                                className="rounded-md duration-300 hover:scale-110"
                            />
                            <p className='p-2'>{desc}</p>
                             <div className="flex items-center justify-center">
                               <Link to={demo} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110 text-purple-700">
                                    Demo
                                </button></Link>
                            </div> 
                        </div>
                    ))}
                </div>
                <p className='projectType'>Animation</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-2 mb-12">
                    {animationProjects.map(({ id, src, demo, desc }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="games project"
                                className="rounded-md duration-300 hover:scale-110"
                            />
                            <p className='p-2'>{desc}</p>
                             <div className="flex items-center justify-center">
                               <Link to={demo} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110 text-purple-700">
                                    Demo
                                </button></Link>
                            </div> 
                        </div>
                    ))}
                </div>
                <p className='projectType'>Landing Pages</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
                    {landingPageProjects.map(({ id, src, demo, desc }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="games project"
                                className="rounded-md duration-300 hover:scale-110"
                            />
                            <p className='p-2'>{desc}</p>
                             <div className="flex items-center justify-center">
                               <Link to={demo} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110 text-purple-700">
                                    Demo
                                </button></Link>
                            </div> 
                        </div>
                    ))}
                </div>
                <p className='projectType'>API Projects</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
                    {apiProjects.map(({ id, src, demo, desc }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="games project"
                                className="rounded-md duration-300 hover:scale-110"
                            />
                            <p className='p-2'>{desc}</p>
                             <div className="flex items-center justify-center">
                               <Link to={demo} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110 text-purple-700">
                                    Demo
                                </button></Link>
                            </div> 
                        </div>
                    ))}
                </div>
                <p className='projectType'>Full Stack Projects</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
                    {fullStack.map(({ id, src, demo, desc }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="games project"
                                className="rounded-md duration-300 hover:scale-110"
                            />
                            <p className='p-2'>{desc}</p>
                             <div className="flex items-center justify-center">
                               <Link to={demo} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110 text-purple-700">
                                    Demo
                                </button></Link>
                            </div> 
                        </div>
                    ))}
                </div>
                <p className='projectType'>Just for Fun Projects</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
                    {forFunProjects.map(({ id, src, demo, desc }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="games project"
                                className="rounded-md duration-300 hover:scale-110"
                            />
                            <p className='p-2'>{desc}</p>
                             <div className="flex items-center justify-center">
                               <Link to={demo} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110 text-purple-700">
                                    Demo
                                </button></Link>
                            </div> 
                        </div>
                    ))}
                </div>

            </div>
        
    </div>
  )
}

export default Portfolio;
