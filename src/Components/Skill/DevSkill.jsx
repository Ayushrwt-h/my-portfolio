import React from "react";

function DevSkill({ logo, name, percentage }) {
  return (
    <div className="flex flex-col items-center mt-5 mb-5 p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      {/* Skill Logo */}
      <div className="flex items-center justify-center mb-3">
        <img className="h-16 w-16 rounded-full border-4 border-indigo-500" src={logo} alt={name} />
      </div>

      {/* Skill Name */}
      <h4 className="text-xl font-semibold text-white mb-2">{name}</h4>

      {/* Skill Progress Bar */}
      <div className="relative w-full bg-gray-700 rounded-full h-2">
        <div
          className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage Text */}
      <div className="mt-1 text-sm text-gray-300">
        {percentage}%
      </div>
    </div>
  );
}

export default DevSkill;
