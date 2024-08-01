import React, { useRef } from 'react';
import { TbDevices2 } from "react-icons/tb";
import { AiOutlineDashboard, AiOutlineTeam, AiOutlineQuestionCircle, AiOutlineBook } from 'react-icons/ai'; // Importing AiOutlineBook
import { CgNotes, CgSmileMouthOpen } from 'react-icons/cg';
import { TbChartLine } from 'react-icons/tb';
import gsap from 'gsap';
import { AiOutlineHeart } from 'react-icons/ai';

const Card = ({ icon: Icon, text, iconColor }) => {
  const bgColorStyle = {
    backgroundColor: `${iconColor}`,
  };

  const heartRef = useRef(null);

  const handleHover = () => {
    gsap.to(heartRef.current, { scale: 1.2, duration: 0.2, repeat: 1, yoyo: true });
  };

  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 m-3 border bg-white border-gray-300 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleHover}
    >
      <div style={bgColorStyle} className="rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon size={25} color="black" />
        <div ref={heartRef} className="hidden absolute inset-0 flex items-center justify-center">
          <AiOutlineHeart size={25} color="#ff4d4f" />
        </div>
      </div>
      <p className="text-sm">{text}</p> {/* Reduced font size for the text */}
    </div>
  );
};

function Features() {
  return (
    <div id="features" className="text-black w-full p-5 dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="col">
        <p className="text-slate-400">EDUADAPT INNOVATIVE APPROACH</p>
        <h1 className="font-bold text-4xl ">Key Features</h1>
        <p className="pt-2">
          EduAdapt is an advanced educational platform tailored to each student needs. It uses JavaScript for a dynamic frontend and Node.js for a robust backend. Data is handled by MongoDB, ideal for diverse information. Machine Learning is central, adapting teaching methods to each students pace and style.
        </p>

        <div className="flex flex-wrap justify-center pt-5">
          <Card
            icon={TbDevices2}
            text="Adaptive Learning: Personalize content based on learning habits."
            iconColor="#dfff0726"
          />
          <Card
            icon={CgNotes}
            text="Interactive Quizzes: Adjust difficulty based on performance."
            iconColor="#ff4d4f2b"
          />
          <Card
            icon={TbChartLine}
            text="Instant Feedback: Quick feedback on quiz answers."
            iconColor="#1987542b"
          />
          <Card
            icon={CgSmileMouthOpen}
            text="Emotion Analysis: Detect emotions for better engagement."
            iconColor="#c7d2fe75"
          />
        </div>
        <div className="flex flex-wrap justify-center pt-5">
          <Card
            icon={AiOutlineDashboard}
            text="Educator Dashboard: Monitor student progress."
            iconColor="#ffecb3"
          />
          <Card
            icon={AiOutlineTeam}
            text="Collaborative Space: Engage in group projects."
            iconColor="#b2ebf2"
          />
          <Card
            icon={AiOutlineQuestionCircle}
            text="Gamification Elements: Reward learning milestones."
            iconColor="#ffcdd2"
          />
          <Card
            icon={AiOutlineBook}
            text="Educational Resources: Access a vast library of resources."
            iconColor="#ffd700"
          />
        </div>
   
      </div>
    </div>
  );
}

export default Features;
