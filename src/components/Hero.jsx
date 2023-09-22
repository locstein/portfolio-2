import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Hero */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#c1121f] md:text-xl ml-1 font-semibold tracking-wide">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200">
          Raphael Pascual
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#fca311] mb-2 ml-[0.2rem]">
          I'm a
          <TypeAnimation
            sequence={[" Developer", 1000, " KodeGeek", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", paddingLeft: "3px" }}
            repeat={Infinity}
          />
        </h2>

        <p className="text-slate-100 py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          dolores ab voluptate blanditiis. Voluptatem illo veritatis cum ullam,
          nemo sequi nihil consequatur voluptatibus neque dicta aliquam facilis
          corporis. In, autem!
        </p>
        <div className="flex gap-3">
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c1121f] hover:border-[#c1121f] duration-300 rounded">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c1121f] hover:border-[#c1121f] duration-300 rounded">
            <Link to="about" smooth={true} duration={500}>
              Learn More
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
