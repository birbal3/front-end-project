import React from "react";

const Services = () => {
  const services = [
    {
      title: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
      icon: <img src="/static/Pasted Graphic 6.png" alt="Star" className="w-12 h-12" />    ,
      link: "#",
    },
    {
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
      icon:<img src="/static/Pasted Graphic 12.png" alt="Star" className="w-12 h-12" />,
      link: "#",
    },
    {
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
      icon: <img src="/static/Pasted Graphic 13.png" alt="Star" className="w-12 h-12" />,
      link: "#",
    },
    {
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
      icon: <img src="/static/Pasted Graphic 14.png" alt="Star" className="w-12 h-12" />,
      link: "#",
    },
    {
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      icon: <img src="/static/Pasted Graphic 15.png" alt="Star" className="w-12 h-12" />,
      link: "#",
    },
    {
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
      icon: <img src="/static/Pasted Graphic 24.png" alt="Star" className="w-12 h-12" />,
      link: "#",
    },
  ];

  return (
    <>
    <section className="flex flex-col justify-between p-10">
      <div className="text-center font-bold text-lg">
        Trusted By Over 100+ Startups and freelance business
      </div>
      <div className="flex justify-evenly items-center flex-wrap p-5">
        <img
          src="static/oracle.png"
          alt="oracle"
          className="h-4"
        />
        <img
          src="/static/morpheus.png"
          alt="morpheus"
          className="h-6"
        />
        <img
          src="static/monday.png"
          alt="Monday"
          className="h-6"
        />
        <img
          src="/static/SAMSUNG.png"
          alt="SAMSUNG"
          className="h-4"
        />
        <img
          src="/static/Pasted Graphic 3.png"
          alt="SAMSUNG"
          className="h-7"
        />
      </div>
    </section>
    <section className="bg-gray-50 py-12 w-full h-full flex flex-col">
      <div className="text-center">
        <h2 className="text-yellow-500 text-sm tracking-wide uppercase">
          Welcome to RegisterKaro.in
        </h2>
        <h1 className="text-3xl font-semibold mt-2">Explore Our Services</h1>
      </div>

      <div className="flex flex-wrap justify-center mt-10 px-4 md:px-20 w-full overflow-scroll no-scrollbar h-[auto] ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 hover:shadow-lg transition-shadow w-full md:w-1/3 px-20 cursor-pointer"
          >
            <div className="text-yellow-500 text-4xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-lg">{service.title}</h3>
            <p className="text-gray-600 mt-2 md:hidden lg:block">
              {service.description}
            </p>
            <a
              href={service.link}
              className="mt-4 text-blue-600 hover:underline flex items-center"
            >
              Learn more
              <span className="ml-1">&rarr;</span>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          className={
            "bg-[#1c4670] text-slate-50 pl-8 pr-8 pt-2 pb-2 rounded-md font-semibold text-center shadow-md"
          }
        >
          See all Services
        </button>
      </div>
    </section>
    </>
  );
};

export default Services;
