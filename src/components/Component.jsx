import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Component = () => {
  const Ques = [
    "Can I recover deleted files from desktop with this software?",
    "Is this software compatible with Mac and Windows?",
    "How secure is the recovery process?",
    "Can I recover files from external drives?",
    "What file types can be recovered?",
  ];

  const Data = [
    { value: "1M+", label: "CUSTOMERS" },
    { value: "12+", label: "YEARS OF EXCELLENCE" },
    { value: "41+", label: "R&D ENGINEERS" },
    { value: "78+", label: "COUNTRIES" },
    { value: "3287+", label: "PARTNERS" },
    { value: "41+", label: "AWARDS RECEIVED" },
  ];

  return (
    <>
    <section className="bg-white py-10 px-4">
      <div className="max-w-8xl w-[90%] mx-auto">
        <h2 className="text-center text-lg font-semibold text-yellow-700 mb-6">
          FAQ
        </h2>
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">
          Frequent Ask Questions
        </h3>

        <div className="space-y-4 w-[100%] mx-auto">
          {Ques.map((question, index) => (
            <div
              key={index}
              className="flex justify-end items-center bg-white shadow rounded-md hover:shadow-lg transition-shadow bg-gradient-to-br from-[#bd883d] via-[#245b92] to-[#1c4670]"
            >
              <div className="flex justify-evenly w-[99%] bg-white p-4">
                <div className="text-gray-800 font-medium w-[90%]">{question}</div>
                <div className="text-blue-500 text-xl text-center w-[10%]">&gt;</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            className={
              "mt-6 bg-[#1c4670] text-slate-50 pl-8 pr-8 pt-2 pb-2 rounded-md font-semibold text-center shadow-md"
            }
          >
            Show More
          </button>
        </div>
      </div>
    </section>
    <div className="bg-[#1C4670] text-white  px-6 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
      {/* Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">Manage Your Services by your Mobile Phone</h2>
        <p className="text-lg mb-6">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="flex items-center bg-white text-gray-900 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
          >
            <FaApple className="text-2xl mr-2" /> Get it on App Store
          </a>
          <a
            href="#"
            className="flex items-center bg-white text-gray-900 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
          >
            <FaGooglePlay className="text-2xl mr-2" /> Get it on Google Play
          </a>
        </div>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full h-auto max-w-md">
          <img
            src="static/mobile_image.png"
            alt="Phone 2"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-yellow-500 text-sm tracking-wide uppercase">WHY REGISTER KARO</h2>
        <h3 className="text-gray-900 text-2xl font-bold mb-8">Some Numbers are important</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Data.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold mb-2 bg-gradient-to-br from-[#bd883d] to-[#1c4670] text-transparent bg-clip-text">{stat.value}</p>
              <p className="text-gray-600 font-medium uppercase text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Component;
