import Image from 'next/image';
import { TbSchool } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { FaBook } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-16">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        {/* Left Column */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 mt-8">Best Online Platform for Education</h1>
          <p className="text-lg text-gray-700 mb-6">
            Access world-class online courses from prestigious institutions and industry leaders. Join the largest education community and elevate your skills today.
          </p>
       
          <div className="flex  space-x-4 ">
            <div className="w-24 h-12 flex  filter grayscale">
              <Image
                src="/standford.png"
                alt="Stanford University Logo"
                layout="intrinsic"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="w-24 h-12 flex justify-center items-center filter grayscale">
              <Image
                src="/cambridge.png"
                alt="Cambridge University Logo"
                layout="intrinsic"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="w-24 h-12 flex justify-center items-center filter grayscale">
              <Image
                src="/mit.png"
                alt="MIT Logo"
                layout="intrinsic"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="w-24 h-12 flex justify-center items-center filter grayscale">
              <Image
                src="/harvard.png"
                alt="Harvard University Logo"
                layout="intrinsic"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
            <a
            href="/signup"
            className="inline-block mt-6 bg-cyan-500  text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition duration-300"
          >
            Enroll Now
          </a>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex justify-end items-end">
          <Image
            src="/student.jpg"
            alt="Learning"
            width={450}
            height={400}
            className=""
          />
        </div>
      </div>
      <div className="bg-cyan-500 mt-8 py-8 ml-5 mr-5 rounded-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center border-r border-white">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <TbSchool className="text-3xl mr-2" />
              Best universities
            </h2>
            <p className='p-2 mr-5' >
              Access courses from top universities like Stanford, MIT, e.t.c Enhance your knowledge.
            </p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center text-center border-r border-white">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <FaBook className="text-3xl mr-2" />
              Great study material
            </h2>
            <p className='p-2 mr-4'>
              Benefit from high-quality study materials, video lectures and creative quizzes your learning.
            </p>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <BiWorld className="text-3xl mr-2 " />
              Worldwide community
            </h2>
            <p className='p-2'>
              Join a global community of learners and professionals share insights around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
