import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h3 className="text-lg font-semibold">{question}</h3>
        <svg className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

const Faqs = () => {
  return (
    <div id="About" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <FaqItem
          question="What is Lorem Ipsum?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <FaqItem
          question="Why do we use it?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <FaqItem
          question="Where does it come from?"
          answer="Contrary to popular belief, Lorem Ipsum is not simply random text."
        />
      </div>
    </div>
  );
};

export default Faqs;
