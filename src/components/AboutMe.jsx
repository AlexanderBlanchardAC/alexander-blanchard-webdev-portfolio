import React from 'react';
import './aboutMe.css';


const AboutMe = () => {
  return (
    // <div name="aboutMeContainer" className="w-full h-600 bg-gradient-to-b from-gray-800 to-black text-white">
    <div  id="me" name="aboutMeContainer" className='w-full h-fit-content bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* <div className="pb-8"> */}
          {/* <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p> */}
        {/* </div> */}
        <div className='text-xl font-bold '>
          <p className='inline border-b-4 border-blue-400 text-pink-400'>About Me</p>
        </div>


        <p className="<text-l mt-4">
         I have made the transition from teaching to web development and enjoy mixing creativity with an analytical approach to problem solving. I enjoy workign within the MERN stack, but also enjoy learning new technologies.
         I am confident in using Redux, Context, Material UI and Tailwind CSS and am well versed in including data from REST APIs in my websites. I enjoy playing with animation and making responsive pages using CSS, including Flexbox, CSS Grid and SASS. 
         On the back end, I work in Node.js (express) and enjoy working with MongoDB and Firebase for databases.
        </p>
        <br />
        <p className="text-l">
         Outside of work, I love being outdoors, whether it is at the beach, up a mountian or in the forest. I enjoy sports, especially surfing and mountain biking. I also have an ecclectic taste in music and play the guitar and am learning to play the piano.
         I enjoy documentaries, especially expository and performative modes. I am an avid reader, with my favourite series being Lee Child's 'Jack Reacher.'
        </p>
      </div>
    </div>
  )
};

export default AboutMe;
