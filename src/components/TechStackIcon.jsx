import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group relative flex items-center gap-3 p-4 rounded-xl bg-slate-800/20 border border-white/5 hover:bg-slate-800/50 hover:border-white/10 transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon container */}
      <div className="relative p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300 border border-white/5 group-hover:border-white/10">
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className="h-8 w-8 md:h-10 md:w-10 object-contain transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
        />
      </div>

      {/* Text */}
      <span className="relative z-10 text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;