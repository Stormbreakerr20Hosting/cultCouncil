// components/TeamSection.js
import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Luna Turner",
      role: "Founder",
      image: "/assets/images/designauts.jpeg",
    },
    {
      name: "Bryant Hall",
      role: "Developer",
      image: "/assets/images/designauts.jpeg",
    },
    {
      name: "Hope Watkins",
      role: "Designer",
      image: "/assets/images/designauts.jpeg",
    },
    {
      name: "Hope Watkins",
      role: "Designer",
      image: "/assets/images/designauts.jpeg",
    },
    {
      name: "Hope Watkins",
      role: "Designer",
      image: "/assets/images/designauts.jpeg",
    },
    {
      name: "Hope Watkins",
      role: "Designer",
      image: "/assets/images/designauts.jpeg",
    },
    {
      name: "Hope Watkins",
      role: "Designer",
      image: "/assets/images/designauts.jpeg",
    },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col justify-center items-center mb-24">
        <div className="mt-32 sm:mt-48 text-xl font-medium text-neutral-100/[0.7] text-center">
          This is the Cultural Society, IIT Mandi
        </div>
        <h1 className="text-6xl max-w-screen-md font-semibold text-center leading-tight">
          Core Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-20 flex justify-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-800 hover:bg-gradient-to-r text-gray-600 from-purple-600 to-purple-400 hover:text-white cursor-pointer">
              <div className="w-40 h-40 bg-purple-200 p-2 rounded-full mx-auto mb-6 overflow-hidden transform hover:scale-110 transition-all duration-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl text-center font-semibold">{member.name}</h3>
              <p className="uppercase text-center tracking-widest text-sm font-light">
                {member.role}
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-xl hover:text-purple-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-xl hover:text-purple-200">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-xl hover:text-purple-200">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="text-xl hover:text-purple-200">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
