import React from "react";

// images
import HTML from "../assets/images/html.png";
import Github from "../assets/images/skills-github.png";
import CSS from "../assets/images/skills-css.png";
import JS from "../assets/images/skills-javascript.png";
import ReactImg from "../assets/images/skills-react.png";
import Tailwind from "../assets/images/skills-tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-black text-gray-300 overflow-x-hidden h-screen"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <header className="pb-8 sm:mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-red-700">
            Experience
          </p>
        </header>
        <div></div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-100">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <img className="w-20 mx-auto" src={JS} alt="HTML icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <img className="w-20 mx-auto" src={Github} alt="HTML icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
