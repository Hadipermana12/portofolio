import React from "react";

const Hexagon = ({ tech }) => (
  <div className="relative group w-20 h-[92px] sm:w-24 sm:h-[110px] cursor-pointer">
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
    
    {/* Hexagon Outer (Border) */}
    <div className="absolute inset-0 bg-indigo-500/30 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] group-hover:bg-purple-500 transition-colors duration-300"></div>
    
    {/* Hexagon Inner (Content) */}
    <div className="absolute inset-[1px] sm:inset-[2px] bg-[#0a0a1a] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] group-hover:bg-[#13132b] flex flex-col items-center justify-center gap-1 sm:gap-2 transition-colors duration-300">
      <img src={tech.icon} alt={tech.language} className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-[8px] sm:text-[10px] text-slate-300 group-hover:text-white text-center px-1">
        {tech.language}
      </span>
    </div>
  </div>
);

const HexagonTechStack = ({ techStacks }) => {
  return (
    <div className="flex flex-col items-center justify-center py-5 w-full">
      {/* Baris 1: 3 item */}
      <div className="flex justify-center gap-1 sm:gap-2">
        {techStacks.slice(0, 3).map(tech => <Hexagon key={tech.language} tech={tech} />)}
      </div>
      {/* Baris 2: 4 item */}
      <div className="flex justify-center gap-1 sm:gap-2 -mt-[22px] sm:-mt-[26px]">
        {techStacks.slice(3, 7).map(tech => <Hexagon key={tech.language} tech={tech} />)}
      </div>
      {/* Baris 3: 3 item */}
      <div className="flex justify-center gap-1 sm:gap-2 -mt-[22px] sm:-mt-[26px]">
        {techStacks.slice(7, 10).map(tech => <Hexagon key={tech.language} tech={tech} />)}
      </div>
      {/* Baris 4: 3 item */}
      <div className="flex justify-center gap-1 sm:gap-2 -mt-[22px] sm:-mt-[26px]">
        {techStacks.slice(10, 13).map(tech => <Hexagon key={tech.language} tech={tech} />)}
      </div>
    </div>
  );
};

export default HexagonTechStack;
