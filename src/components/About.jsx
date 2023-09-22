import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <header className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-700">
              About
            </p>
          </header>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Raphael, a friendly neighborhood front-end developer.</p>
          </div>
          <div>
            <p>
              I'm a front-end developer based in the Philippines. I enrolled
              myself in KodeGo to learn programming and embarked on a
              fascinating journey into the world of programming, eager to
              unravel its intricate codes and algorithms. Through countless
              hours of study and practice, I discovered the beauty of turning
              ideas into functional software, a journey I cherish every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
