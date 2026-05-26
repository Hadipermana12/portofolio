import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // state untuk buka/tutup menu mobile
  const [isOpen, setIsOpen] = useState(false);
  // state untuk menandai navbar sudah discroll atau belum
  const [scrolled, setScrolled] = useState(false);
  // state untuk menandai section aktif
  const [activeSection, setActiveSection] = useState("Home");

  // daftar menu navigasi
  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Portofolio", label: "Portofolio" },
    { href: "#Contact", label: "Contact" },
  ];

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // kasih background blur kalau discroll ke bawah
      setScrolled(window.scrollY > 20);

      // cek section mana yang sedang aktif
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = section.offsetTop - 200; // jarak atas
          const sectionBottom = sectionTop + section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
          ) {
            setActiveSection(item.href.replace("#", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // jalanin sekali pas pertama load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk disable scroll kalau menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Fungsi untuk scroll ke section dengan smooth
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 80; // biar ga ketutup navbar
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false); // tutup menu mobile setelah klik
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow transition-all duration-500 ${
        isOpen
          ? "bg-[#030014]"
          : scrolled
          ? "bg-[#030014]/50 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#Home"
            onClick={(e) => scrollToSection(e, "#Home")}
            className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
          >
            Hadi Permana
          </a>

          {/* Menu versi desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative text-lg font-sm transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                    : "text-[#e2d3fd] hover:text-indigo-400"
                }`}
              >
                {item.label}
                {/* garis bawah animasi */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform ${
                    activeSection === item.href.substring(1)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Tombol menu versi mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#e2d3fd] hover:text-indigo-700 transition-transform"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu versi mobile */}
      <div
        className={`md:hidden fixed inset-0 top-[64px] bg-[#030014] transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-lg font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                  : "text-[#e2d3fd] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
