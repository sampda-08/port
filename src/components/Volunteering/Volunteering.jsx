import React from "react";
import { volunteering } from "../../constants";

const Volunteering = () => {
  return (
    <section
      id="volunteering"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Volunteering</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my volunteering experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Volunteering Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteering.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center space-x-4 mb-4">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={item.img}
                  alt={item.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role and Company */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.role}</h3>
                <h4 className="text-sm text-gray-300">{item.company}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400">{item.desc}</p>

            {/* Skills */}
            <div className="mt-4">
              <h5 className="font-medium text-white">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                {item.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
