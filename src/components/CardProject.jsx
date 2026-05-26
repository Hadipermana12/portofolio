import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Lock, Wifi } from "lucide-react";

function CardProject({ Img, Title, Description, Link: demoLink, Github, TechStack, detailLink }) {
  const isPrivateGithub = Github === "Private";
  const isRestrictedLink = demoLink === "Khusus WiFi PT. Menara Terus Makmur";

  return (
    <div className="group relative w-full h-full">
      <div
        className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] transition-all duration-500 group-hover:border-purple-500/40 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.3)]"
        style={{ background: "linear-gradient(160deg, #0f0f23 0%, #1a1a2e 50%, #16132b 100%)" }}
      >
        {/* Top gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Corner glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative flex flex-col h-full">
          {/* Image */}
          <div className="relative overflow-hidden m-3 mb-0 rounded-xl">
            <div className="aspect-[16/10] overflow-hidden rounded-xl">
              <img
                src={Img}
                alt={Title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Gradient overlay bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f0f23] to-transparent pointer-events-none" />

            {/* Badge indicators */}
            <div className="absolute top-3 left-3 flex gap-2">
              {isPrivateGithub && (
                <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-500/20 rounded-lg border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                  <Lock className="w-3 h-3" />
                  Private
                </span>
              )}
              {isRestrictedLink && (
                <span className="flex items-center gap-1 px-2.5 py-1 bg-cyan-500/20 rounded-lg border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                  <Wifi className="w-3 h-3" />
                  Intranet
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow p-5 pt-3">
            {/* Tech Stack pills */}
            {TechStack && TechStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {TechStack.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-md"
                    style={{
                      color: index === 0 ? "#a78bfa" : index === 1 ? "#60a5fa" : "#f472b6",
                      background: index === 0 ? "rgba(167,139,250,0.1)" : index === 1 ? "rgba(96,165,250,0.1)" : "rgba(244,114,182,0.1)",
                      border: `1px solid ${index === 0 ? "rgba(167,139,250,0.2)" : index === 1 ? "rgba(96,165,250,0.2)" : "rgba(244,114,182,0.2)"}`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {TechStack.length > 3 && (
                  <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-gray-500 bg-white/[0.03] border border-white/[0.06] rounded-md">
                    +{TechStack.length - 3} lainnya
                  </span>
                )}
              </div>
            )}

            {/* Title */}
            <h3 className="text-[17px] font-bold text-white leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-blue-200 group-hover:to-pink-300 transition-all duration-500">
              {Title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mb-5 flex-grow">
              {Description}
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

            {/* Buttons */}
            <div className="flex items-center justify-between">
              {isRestrictedLink ? (
                <span className="inline-flex items-center gap-1.5 text-amber-500/60 text-xs cursor-default">
                  <Wifi className="w-3.5 h-3.5" />
                  <span className="font-medium">WiFi Perusahaan</span>
                </span>
              ) : (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}

              <Link
                to={detailLink}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white/80 text-sm font-medium transition-all duration-300 hover:text-white border border-white/[0.08] hover:border-purple-500/40 group-hover:bg-purple-500/10 group/btn"
              >
                Details
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
