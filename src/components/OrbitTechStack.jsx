import React from "react";

const OrbitTechStack = ({ techStacks }) => {
  // Pisahkan tech stack (5 di dalam, 8 di luar)
  // Menyesuaikan array yang masuk
  const innerOrbit = techStacks.slice(0, 5);
  const outerOrbit = techStacks.slice(5, 13);

  // Kalkulasi posisi x dan y dalam persentase untuk responsivitas penuh
  const calculatePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = 50 + 50 * Math.cos(angle);
    const y = 50 + 50 * Math.sin(angle);
    return { top: `${y}%`, left: `${x}%` };
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-indigo-900/10 to-[#030014] rounded-full blur-3xl opacity-50"></div>

      {/* Center Hub */}
      <div className="absolute z-30 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#030014] border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.4)]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
        <div className="text-center z-10">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-lg md:text-xl tracking-wider drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            Software<br/>Engineer
          </span>
        </div>
      </div>

      {/* Inner Orbit (Berputar Searah Jarum Jam) */}
      <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-indigo-500/20 animate-spin-slow">
        {innerOrbit.map((tech, index) => {
          const pos = calculatePosition(index, innerOrbit.length);
          return (
            <div
              key={index}
              className="absolute w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#0a0a1a]/90 border border-indigo-500/30 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-spin-slow-reverse group hover:bg-indigo-500/20 transition-colors"
              style={{
                top: pos.top,
                left: pos.left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img src={tech.icon} alt={tech.language} className="w-6 h-6 md:w-8 md:h-8" />
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-8 md:-top-10 bg-black/90 text-white text-[10px] md:text-xs px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                {tech.language}
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer Orbit (Berputar Berlawanan Jarum Jam) */}
      <div className="absolute w-[380px] h-[380px] md:w-[550px] md:h-[550px] rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '60s' }}>
        {outerOrbit.map((tech, index) => {
          const pos = calculatePosition(index, outerOrbit.length);
          return (
            <div
              key={index}
              className="absolute w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-[#0a0a1a]/90 border border-purple-500/30 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-spin-slow-reverse group hover:bg-purple-500/20 transition-colors"
              style={{
                animationDirection: 'reverse',
                animationDuration: '60s',
                top: pos.top,
                left: pos.left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img src={tech.icon} alt={tech.language} className="w-5 h-5 md:w-7 md:h-7" />
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-8 md:-top-10 bg-black/90 text-white text-[10px] md:text-xs px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                {tech.language}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitTechStack;
