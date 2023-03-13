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


        <p className="text-xl mt-20">
          After spending the last 6 years as a Primary School and Special Needs School teacher, I decided to change career and embarked on a web development bootcamp to further my skills in web development. During the course, I learned to use React JS to 
          create a range of applications. These include a weather app, and a quote generator. Both of these projects required me to access REST APIs and for the latter project, I used MongoDB  I also took part in a group project, during which we created a fantasy football app. This gave me experince in sharing my code with others, contributing to correcting issues when merging branches on GitHub and coding alongside other. At the end of the course, we also completed a hackathon, during which we were tasked with creating an app that aimed to help children learn to read. 
          After the course, I chose to create my own phonica app, expanding on the origional ideas and drawing on my teaching experience. 

          Since bootcamp, I have dedicated time to enhancing my web development skills independently, drawing on sources including Codecademy, Stack Overflow, and Harvard's online Intoduction to Computer Science. I have focused on embedding and expanding on my skills in the languages I focused on in bootcamp, for example, becoming confident in using React Redux, experimenting with TailWind CSS and accessing a range of APIs. 
          In addition to this, I have begun to include Node JS, with Express JS and  Next JS in my applications.
        </p>
        <br />
        <p className="text-xl">
          As Web Development has come as a career change, there are many transferrable skills that I bring with me from my 6 years working as a teacher. I am highly adaptable, I am able to take things changing at short notice in my stride while remaining focussed on the final goal and am well versed in staying calm under pressure while working to resolve problems.
          I am eperienced in building relationships with both colleagues and stake-holders, including explaining information in a level of detail that is appropriate to the audience. I am confident in supporting others to further their skills by breaking down large tasks or skills into small, managable ones. I am also very open 
          to feedback on how I can improve my practise and am keen to draw on the skills of those more experienced than me, while also independently furthering my learning. I have led a team of up to 6 other professionals and am comfortable delegating work and supporting others. 
          I am able to manage my own time effectivley, prioritising tasks as needed.
        </p>
      </div>
    </div>
  )
};

export default AboutMe;
