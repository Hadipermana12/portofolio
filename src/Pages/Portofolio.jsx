import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import OrbitTechStack from "../components/OrbitTechStack";
import HexagonTechStack from "../components/HexagonTechStack";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";
import { dummyProjects } from "../components/Project";


// Dummy Data
const dummyCertificates = [
  { Img: "/images/cert1.png" },
  { Img: "/images/cert2.png" },
  { Img: "/images/cert3.png" },
  { Img: "/images/cert4.png" },
  { Img: "/images/cert5.png" },
];

const techStacks = [
  { icon: "/html.svg", language: "HTML" },
  { icon: "/css.svg", language: "CSS" },
  { icon: "/javascript.svg", language: "JavaScript" },
  { icon: "/tailwind.svg", language: "Tailwind CSS" },
  { icon: "/reactjs.svg", language: "ReactJS" },
  { icon: "/vite.svg", language: "Vite" },
  { icon: "/nodejs.svg", language: "Node JS" },
  { icon: "/bootstrap.svg", language: "Bootstrap" },
  { icon: "/laravel.svg", language: "Laravel" },
  { icon: "/github.svg", language: "GitHub" },
  { icon: "/postgresql.svg", language: "PostgreSQL" },
  { icon: "/nextjs.svg", language: "Next.js" },
  { icon: "/express.svg", language: "Express.js" },
];

// Toggle Button Component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);



// Main Component
export default function Portfolio() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const displayedProjects = showAllProjects
    ? dummyProjects
    : dummyProjects.slice(0, initialItems);

  const displayedCertificates = showAllCertificates
    ? dummyCertificates
    : dummyCertificates.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      {/* Header */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>
      </div>

      <div className="flex flex-col gap-20 pb-20">
        {/* Projects Section */}
        <section id="projects">
          <div
            className="flex items-center gap-4 mb-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Code className="text-purple-500 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-2xl md:text-4xl font-semibold text-white">
              Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos={
                  index % 3 === 0
                    ? "fade-up-right"
                    : index % 3 === 1
                    ? "fade-up"
                    : "fade-up-left"
                }
                data-aos-duration="1000"
              >
                <CardProject {...project} />
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates">
          <div
            className="flex items-center gap-4 mb-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Award className="text-purple-500 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-2xl md:text-4xl font-semibold text-white">
              Certificates
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayedCertificates.map((certificate, index) => (
              <div
                key={index}
                data-aos={
                  index % 3 === 0
                    ? "fade-up-right"
                    : index % 3 === 1
                    ? "fade-up"
                    : "fade-up-left"
                }
                data-aos-duration="1000"
              >
                <Certificate ImgSertif={certificate.Img} />
              </div>
            ))}
          </div>
          {dummyCertificates.length > initialItems && (
            <div className="mt-8 flex justify-center">
              <ToggleButton
                onClick={() => setShowAllCertificates((p) => !p)}
                isShowingMore={showAllCertificates}
              />
            </div>
          )}
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack">
          <div
            className="flex items-center gap-4 mb-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Boxes className="text-purple-500 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-2xl md:text-4xl font-semibold text-white">
              Tech Stack
            </h3>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            {/* Desktop View: Orbit System */}
            <div className="hidden md:block w-full">
              <OrbitTechStack techStacks={techStacks} />
            </div>

            {/* Mobile View: Hexagon Hive */}
            <div className="block md:hidden w-full">
              <HexagonTechStack techStacks={techStacks} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
