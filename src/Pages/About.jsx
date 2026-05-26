import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, Github, Linkedin, Mail, Terminal, Briefcase } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import profil from "../assets/profil-ecamp.png"
import { dummyProjects } from "../components/Project";

// Header
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p 
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

// Profile Image (statis)
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg">
        <img
          src="/profil-ecamp.png"   // langsung dari JSX, statis
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
));

// StatCard
const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-4xl font-bold text-white">
          {value}
        </span>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

// AboutPage
const AboutPage = () => {
  const statsData = [
  {
    icon: Code,
    color: "from-[#6366f1] to-[#a855f7]",
    value: dummyProjects.length,
    label: "Total Projects",
    description: "Innovative web solutions crafted",
    animation: "fade-right",
  },
  {
    icon: Award,
    color: "from-[#a855f7] to-[#6366f1]",
    value: 0, // <- langsung angka statis
    label: "Certificates",
    description: "Professional skills validated",
    animation: "fade-up",
  },
  {
    icon: Globe,
    color: "from-[#6366f1] to-[#a855f7]",
    value: 1,
    label: "Years of Experience",
    description: "Continuous learning journey",
    animation: "fade-left",
  },
];

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="About">
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200">Hadi Permana</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0">
              A passionate Software Engineer dedicated to building innovative and scalable digital solutions. 
              With a strong foundation in system architecture and user experience, 
              I am driven to translate complex problems into reliable, efficient applications 
              that deliver real impact for users.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href="https://drive.google.com/drive/folders/1BOm51Grsabb3zj6Xk27K-iRwI1zITcpo" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
            <div 
              className="w-full relative" 
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full max-w-[380px] mx-auto group perspective-1000">
                {/* Main glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#6366f1] rounded-[2rem] blur-xl opacity-40 group-hover:opacity-80 transition-all duration-700 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#6366f1] via-transparent to-[#a855f7] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                {/* Card Container */}
                <div className="relative bg-[#0a0a1a]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:scale-[1.03] shadow-2xl z-10 transform-gpu group-hover:-translate-y-2">
                  
                  {/* Decorative faint grid in background */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBMNDAgMEgwdjQweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSIvPgo8L3N2Zz4=')] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 left-6 p-2 rounded-full bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 z-20">
                    <Terminal className="w-4 h-4 text-[#6366f1]" />
                  </div>
                  <div className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 z-20">
                    <Sparkles className="w-4 h-4 text-[#a855f7]" />
                  </div>

                  {/* Top Badge */}
                  <div className="flex justify-center mb-6 relative z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Available for hire
                    </div>
                  </div>

                  {/* Image container */}
                  <div className="relative w-40 h-40 mx-auto mb-6 z-20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#6366f1] to-[#a855f7] rounded-full animate-[spin_4s_linear_infinite] blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-1 bg-black rounded-full z-10"></div>
                    <div className="absolute inset-1.5 rounded-full overflow-hidden z-20 ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-500">
                      <img 
                        src={profil} 
                        alt="Hadi Permana" 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center relative z-20">
                    <h3 className="text-3xl font-black tracking-tight mb-1">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                        Hadi Permana
                      </span>
                    </h3>
                    <p className="text-[#a855f7] font-medium text-sm tracking-wide mb-6 flex items-center justify-center gap-2">
                      <Code className="w-4 h-4" />
                      Software Engineer
                    </p>
                    
                    {/* Social/Action Dock */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#6366f1]/20">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#a855f7]/20">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#Contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold flex-1 flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#a855f7]/25">
                        <Mail className="w-4 h-4" />
                        Let's Talk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>

        {/* Experience Section */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3" data-aos="fade-right">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#a855f7]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Work Experience
            </span>
          </h3>

          <div className="space-y-6">
            {[
              {
                role: "Software Engineer (Intern)",
                company: "PT. Menara Terus Makmur",
                period: "Magang / Internship",
                description: "Membangun aplikasi perangkat lunak secara penuh untuk mendukung inisiatif digitalisasi. Peran utama meliputi dari mulai perancangan schema database, analisis sistem, desain, implementasi dan pemeliharaan aplikasi berbasis web yang bertujuan untuk merubah prosses kerja dari mulai membuat laporan, melihat data, mendonlod data, dan approval menggunakan tanda tangan digital. Mengubah prosses kerja dari konvensional ke digital.",
                highlights: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "Vite"]
              }
            ].map((exp, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative p-6 sm:p-8 bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-[#a855f7] font-medium text-sm sm:text-base">
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs sm:text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
