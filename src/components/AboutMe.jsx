import React from 'react';


const AboutMe = () => {
  return (
    <div name="aboutMeContainer" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>


        <p className="<text-xl mt-20">
          After working as a teacher for the past 6 years, I am now embarking on a journey to turn my interest in technology into a career. I have taken part in a bootcamp, which taught me skills in React JS, 
          MongoDB, and vanilla JavaScript. I worked on several projects during this course, including a group Fantasy Football App and a Phonics App which was constructed during a team hackathon.
          Since the course, I have deepend my understanding of React JS, especially the use of Redux, and become confident in using Next JS and Node JS. I have also explored the use of Tailwind CSS.
        </p>
        <br />
        <p className="text-xl">
         I enjoy: learning - especially when the subject is challenging, music - I am a self-taught guitarist and a fan of an eclectic range of music, sports - mountain biking is one of my favourites, being outdoors - 
         whether it's at the beach or in the woods, few things beat nature, reading - I am a massive fan of Lee Child.
        </p>
      </div>
    </div>
  )
};

export default AboutMe;
