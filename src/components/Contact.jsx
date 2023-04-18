import React from 'react';
import { FaGithub, FaFileDownload } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import AlexanderBlanchardCV from "../assets/AlexanderBlanchardCV.pdf";

const Contact = () => {

   
  return (
    <div name="contactContainer" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
         <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-2xl inline text-pink-400 border-b-4 border-blue-400">
                    Contact Me
                </p>
                <div className="py-6">
                    <ul className='flex flex-col md:flex-row justify-evenly'>
                        <li className="pb-4 pl-2"><a href="mailto: alexanderblanchardac@yahoo.com"><HiOutlineMail size={25}/> alexanderblanchardac@yahoo.com </a></li>
                        <li className="pb-4 pl-2"><BsFillTelephoneFill size={25}/>07711240217</li>
                        <li className="pb-4 pl-2"><a href="https://github.com/AlexanderBlanchardAC"><FaGithub size={25} />GitHub</a></li>
                        <li className="pb-4 pl-2"><a href={AlexanderBlanchardCV} download="AlexanderBlanchardCV"><FaFileDownload size={25} />CV</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <form
                    action="https://getform.io/f/e4bcb0f0-264a-4294-b788-99daaa55a5d4"
                    method="POST"
                    className="flex flex-col w-full md:w-1/2"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outine-none'
                    />
                    <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        rows="10"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">

                    </textarea>
                    <button
                        className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-400">
                            Let's Connect
                    </button>
                </form>
            </div>
        </div> 
       
      
    </div>
  )
};

export default Contact;
