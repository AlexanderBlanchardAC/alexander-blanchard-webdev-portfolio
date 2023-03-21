import React from 'react';
import imageGallery from "../assets/portfolioPics/imageGallery.png";
import makeAMatch from "../assets/portfolioPics/makeAMatch.png";
import nownessClone from "../assets/portfolioPics/nownessClone.png";
import quizMe from "../assets/portfolioPics/quizMe.png";
import weatherWherever from "../assets/portfolioPics/weatherWherever.png";
import { Link } from 'react-router-dom';


const Portfolio = () => {
    

 
    const projects = [
        {
            id: 1,
            src: quizMe,
            demo: "https://alexanderblanchardac.github.io/quiz-me/",
            code:"https://github.com/AlexanderBlanchardAC/quiz-me"

        },
        {
            id: 2,
            src: imageGallery,
            demo: "https://alexanderblanchardac.github.io/photo-blog/",
            code: "https://github.com/AlexanderBlanchardAC/photo-blog"
        },
        {
            id: 3,
            src: weatherWherever,
            demo: "https://alexanderblanchardac.github.io/always-take-the-weather/",
            code: "https://github.com/AlexanderBlanchardAC/always-take-the-weather"
        },
        {
            id: 4,
            src: makeAMatch,
            demo: "https://alexanderblanchardac.github.io/make-a-match-phase-2/",
            code: "https://github.com/AlexanderBlanchardAC/make-a-match-phase-2"
        },
        {
            id: 5,
            src: nownessClone,
            demo: "https://alexanderblanchardac.github.io/clone-of-nowness/",
            code: "https://github.com/AlexanderBlanchardAC/clone-of-nowness"
        }
    ];

  
  return (
    <div name="projectsContainer"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Here are some examples of my projects:</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, src, demo, code }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-300 hover:scale-110"
                            />
                             <div className="flex items-center justify-center">
                               <Link to={demo} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110">
                                    Demo
                                </button></Link>
                               <Link to={code} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110">
                                    Code
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
