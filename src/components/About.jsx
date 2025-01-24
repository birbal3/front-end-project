const About = () => {
  const benefits = [
    {
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      icon: <img src="/static/Pasted Graphic 25.png" alt="Star" className="w-10 h-10" />,
      bgColor: "bg-red-50",
    },
    {
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      icon: <img src="/static/Pasted Graphic 26.png" alt="Star" className="w-12 h-12" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
      icon: <img src="/static/Pasted Graphic 27.png" alt="Star" className="w-12 h-12" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      icon: <img src="/static/Pasted Graphic 30.png" alt="Star" className="w-12 h-12" />,
      bgColor: "bg-pink-50",
    },
    {
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      icon: <img src="/static/Pasted Graphic 25.png" alt="Star" className="w-12 h-12" />,
      bgColor: "bg-green-50",
    },
  ];
  return (
    <>
    <section className="bg-gray-50 py-4">
      <div className="flex flex-wrap justify-between items-center px-4 md:px-20 gap-2 ">
        <div className="w-full md:w-[60%]">
          <h2 className="text-yellow-500 text-sm tracking-wide uppercase">
            Welcome to spanRegisterKaro.in
          </h2>
          <h1 className="text-3xl font-semibold mt-2">About <span className="text-yellow-500">Register Karo</span></h1>
          <p className="text-gray-600 mt-4">
            We have been using Inteligencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever-changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations.
          </p>
          <p className="text-gray-600 mt-4">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className={"mt-6 bg-[#1c4670] text-slate-50 pl-8 pr-8 pt-2 pb-2 rounded-md font-semibold text-center shadow-md"}>Learn More</button>
        </div>
        <div className="w-[60%] md:w-[35%] flex justify-center">
          <img
            src="static/about.png"
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-12 flex justify-end gap-2 w-full flex-wrap">
    <div className="md:w-[45%] w-full ml-4">
      <h2 className="text-yellow-500 text-sm tracking-wide uppercase">
        Why RegisterKaro.in
      </h2>
      <h1 className="text-3xl font-semibold mt-2">
        Why Choose Register Karo
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        It is with consistent services and results that build trust with the
        people and that in turn help us to serve the business better.
      </p>
    </div>
    {benefits.map((benefit, index) => (
      <div
        key={index}
        className={`flex flex-col items-center text-center shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow w-full md:w-1/4 ${benefit.bgColor}`}
      >
        <div className="text-yellow-500 text-4xl mb-4">{benefit.icon}</div>
        <h3 className="font-bold text-lg">{benefit.title}</h3>
        <p className="text-gray-600 mt-2">{benefit.description}</p>
      </div>
    ))}
  </section>
  <section className="bg-top_strip_blue py-12">
      <div className="flex flex-wrap justify-between items-center px-4 gap-2 md:px-20 w-full">
        <div className="w-full md:w-[48%] text-white">
          <h1 className="text-3xl font-semibold">Our Video Introductions</h1>
          <p className="text-gray-300 mt-4">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <div className="text-yellow-500 text-2xl mr-4"><img src="/static/Pasted Graphic 32.png" alt="Star" className="w-14 h-12" />  </div>
              <div>
                <h3 className="text-xl font-bold">Explore ideas together</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-yellow-500 text-2xl mr-4"><img src="/static/Pasted Graphic 36.png" alt="Star" className="w-14 h-12" /></div>
              <div>
                <h3 className="text-xl font-bold">Bring those ideas to life</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[70%] md:w-[48%] flex justify-center">
          <div className="relative">
            <img
              src="static/youtube_video.png"
              alt="Video Introduction"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
    <div className="bg-gray-50 py-12 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">Our Happy Clients</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>

      <div className="flex gap-6 px-4 md:px-20 flex-wrap justify-center">
           <img src="/static/Pasted Graphic 5.png" alt="Star" className="w-120 h-120" />    
      </div>

      <div className="text-center mt-8">
        <button className="text-blue-600 hover:underline flex items-center justify-center">
          Show more
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
    <section className="bg-[#FFA229] p-6">

    <div className="flex md:justify-between justify-center items-center flex-wrap gap-2">
    <img src="/static/Fill up Application Form.png" alt="Star" className="w-100% h-12" />

    <img src="/static/Make Online Payment.png" alt="Star" className="w-100% h-12" />
  <img src="/static/Executive will Process Application.png" alt="Star" className="w-100% h-12" />
      <div display="flex" className="flex flex-wrap justify-between items-center">
      <img src="/static/Pasted Graphic 42.png" alt="Star" className="w-50% h-12" />
      <img src="/static/Get Confirm Mail.png" alt="Star" className="w-40 h-7" />
      </div>
    </div>
  </section>
    </>
  );
};

export default About;
