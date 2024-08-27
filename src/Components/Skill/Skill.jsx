import React from 'react';
import { FaUserTie, FaBrain, FaFacebook, FaClock, FaComments } from 'react-icons/fa';

function Skill() {
  const skills = [
    {
      icon: <FaComments />,
      name: "Communication",
      percentage: 80,
    },
    {
      icon: <FaUserTie />,
      name: "Personality Development",
      percentage: 75,
    },
    {
      icon: <FaBrain />,
      name: "Leadership",
      percentage: 85,
    },
    {
      icon: <FaClock />,
      name: "Time Management",
      percentage: 80,
    },
    {
      icon: <FaFacebook />,
      name: "Social Media Marketing",
      percentage: 75,
    },
    {
      icon: <FaBrain />,
      name: "Consulting",
      percentage: 80,
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-900">
      <div className="container mx-auto text-center mb-6">
        <h2 className="text-4xl font-bold text-teal-400 mb-3">Skills</h2>
        <p className="text-base text-gray-300">
          A showcase of the key skills I bring to the table.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-teal-400 text-3xl mb-3 md:text-4xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 md:text-xl">{skill.name}</h3>
              <div className="relative w-full bg-gray-700 rounded-full h-2">
                <div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${skill.percentage}%`,
                    background: "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
                  }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-2 md:text-base">
                {skill.percentage}% proficiency
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
