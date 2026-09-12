import { useEffect } from "react";

const WA_LINK = "https://wa.me/923172020004";

const assetPathPrefix = "/assets";

// Images
const imgHero = `${assetPathPrefix}/images/hero.webp`;

// Social icons
const imgGitHub = `${assetPathPrefix}/icons/github.png`;
const imgLinkedIn = `${assetPathPrefix}/icons/linkedin.png`;

// Portfolio images
const imgMagnetDomain = `${assetPathPrefix}/portfolio/magnet-domain.webp`;
const imgSprachKompass = `${assetPathPrefix}/portfolio/sprach-kompass.webp`;
const imgZulfayHair = `${assetPathPrefix}/portfolio/zulfay-hair.webp`;
const imgBlunCare = `${assetPathPrefix}/portfolio/blun-care.webp`;
const imgJinnahSchools = `${assetPathPrefix}/portfolio/jinnah-schools.webp`;
const imgHabibeLondon = `${assetPathPrefix}/portfolio/habibe-london.webp`;

// Resume
const resumePdf = `${assetPathPrefix}/sameeraliresume.pdf`;

// Icon SVGs
const imgArrowContainer = `${assetPathPrefix}/icons/arrow-container.svg`;
const imgLocationDot = `${assetPathPrefix}/icons/location-dot.svg`;
const imgCrossLg = `${assetPathPrefix}/icons/cross-lg.svg`;
const imgCrossLgH = `${assetPathPrefix}/icons/cross-lg-h.svg`;
const imgCrossSmV = `${assetPathPrefix}/icons/cross-sm-v.svg`;
const imgCrossSmH = `${assetPathPrefix}/icons/cross-sm-h.svg`;
const imgSwirl = `${assetPathPrefix}/icons/swirl.svg`;
const imgArchIcon = `${assetPathPrefix}/icons/arch-icon.svg`;
const imgCheckArrow = `${assetPathPrefix}/icons/check-arrow.svg`;
const imgCheckDb = `${assetPathPrefix}/icons/check-db.svg`;
const imgCheckLock = `${assetPathPrefix}/icons/check-lock.svg`;
const imgCloudIcon = `${assetPathPrefix}/icons/cloud-icon.svg`;
const imgDockerIcon = `${assetPathPrefix}/icons/docker-icon.svg`;
const imgCloudCheck = `${assetPathPrefix}/icons/cloud-check.svg`;
const imgGhActions = `${assetPathPrefix}/icons/gh-actions.svg`;
const imgVisualIcon = `${assetPathPrefix}/icons/visual-icon.svg`;
const imgNextjsIcon = `${assetPathPrefix}/icons/nextjs-icon.svg`;
const imgFramerIcon = `${assetPathPrefix}/icons/framer-icon.svg`;
const imgWcagIcon = `${assetPathPrefix}/icons/wcag-icon.svg`;
const imgSpinDecor = `${assetPathPrefix}/icons/spin-decor.svg`;
const imgArrowRight = `${assetPathPrefix}/icons/arrow-right.svg`;
const imgDiscoveryIcon = `${assetPathPrefix}/icons/discovery-icon.svg`;
const imgBackendIcon = `${assetPathPrefix}/icons/backend-icon.svg`;
const imgFrontendIcon = `${assetPathPrefix}/icons/frontend-icon.svg`;
const imgTestingIcon = `${assetPathPrefix}/icons/testing-icon.svg`;
const imgCheckGreen = `${assetPathPrefix}/icons/check-green.svg`;

function useMagneticCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    let raf: number;
    const onMove = (e: MouseEvent) => {
      raf = requestAnimationFrame(() => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
    };
    const onEnter = () => {
      cursor.style.opacity = "1";
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };
    const onLeave = () => {
      cursor.style.opacity = "0";
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    };

    window.addEventListener("mousemove", onMove);
    const els = document.querySelectorAll("[data-cursor='visit']");
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
}

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Marquee() {
  return (
    <div className="w-full overflow-hidden" style={{ transform: "rotate(-1deg)", margin: "0 -4px" }}>
      <div
        className="border-t-[3px] border-b-[3px] border-[#111] bg-[#111] h-16 overflow-hidden relative"
        style={{ boxShadow: "4px 4px 0px 0px #111" }}
      >
        <div className="flex items-center h-full animate-marquee whitespace-nowrap absolute">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-[#f1f5f9] text-[30px] tracking-[3px] px-4 font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME /// ABOUT ME ///
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechTable() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "PHP", "MySQL", "WordPress",
    "Shopify", "Elementor", "REST API",
    "Plugin Dev", "Theme Dev", "E-commerce",
    "Git", "Performance", "MVC",
  ];
  return (
    <div className="border-[3px] border-[#111] w-full grid grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="border-[3px] border-[#111] flex items-center justify-center py-[17px] px-4"
        >
          <span
            className="text-[#0f172a] text-[16px]"
            style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}
          >
            {skill}
          </span>
        </div>
      ))}
    </div>
  );
}

function ServiceCard({
  bg,
  iconBg,
  icon,
  iconSize,
  title,
  comment,
  desc,
  items,
  btnBg,
  btnText,
  btnHref = "#contact",
  btnTextColor = "#eef2ff",
  btnShadow,
  extraDecor,
}: {
  bg: string;
  iconBg: string;
  icon: string;
  iconSize: string;
  title: string;
  comment: string;
  desc: string;
  items: { icon: string; text: string; iconW: string; iconH: string }[];
  btnBg: string;
  btnText: string;
  btnHref?: string;
  btnTextColor?: string;
  btnShadow?: string;
  extraDecor?: React.ReactNode;
}) {
  return (
    <article
      className={`card-lift ${bg} border-[3px] border-[#111] flex flex-col justify-between p-[35px] relative`}
      style={{ boxShadow: "8px 8px 0px #111" }}
      aria-label={title}
    >
      {extraDecor}
      <div className="flex flex-col gap-6">
        <div
          className={`${iconBg} border-[3px] border-[#111] flex items-center justify-center size-16`}
          style={{ boxShadow: "4px 4px 0px #111" }}
          aria-hidden="true"
        >
          <div className="relative" style={{ width: iconSize, height: iconSize }}>
            <img alt="" className="absolute inset-0 w-full h-full" src={icon} aria-hidden="true" />
          </div>
        </div>
        <div>
          <h3
            className="text-[#111] text-[30px] tracking-[-0.75px] uppercase leading-[36px] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          >
            {title}
          </h3>
          <div
            className="text-[#111] text-[14px] leading-[22.75px] opacity-80"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <div className="mb-0">{comment}</div>
            <div>{desc}</div>
          </div>
        </div>
        <ul className="flex flex-col gap-3" aria-label={`${title} capabilities`}>
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-2 items-center p-[10px] border-2 border-[#111]"
              style={{ background: bg === "bg-white" ? "#eef2ff" : "white" }}
            >
              <div className="relative shrink-0" style={{ width: item.iconW, height: item.iconH }} aria-hidden="true">
                <img alt="" className="absolute inset-0 w-full h-full" src={item.icon} aria-hidden="true" />
              </div>
              <span
                className="text-[#111] text-[12px]"
                style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={btnHref}
        className={`btn-press ${btnBg} border-[3px] border-[#111] w-full py-[15px] text-center mt-6 block`}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          color: btnTextColor,
          textTransform: "uppercase",
          boxShadow: btnShadow,
        }}
        aria-label={`${btnText} — ${title}`}
      >
        {btnText}
      </a>
    </article>
  );
}

function ProjectCard({
  image,
  tags,
  num,
  numColor,
  title,
  desc,
  href,
}: {
  image: string;
  tags: { text: string; bg: string; color?: string; rotate?: string }[];
  num: string;
  numColor: string;
  title: string;
  desc: string;
  href?: string;
}) {
  return (
    <div className="project-card flex flex-col gap-8">
      <a
        href={href ?? "#"}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        data-cursor="visit"
        aria-label={`Visit ${title}${href ? " — opens in new tab" : ""}`}
        className="border-[3px] border-[#111] overflow-hidden relative w-full block"
        style={{ aspectRatio: "4/3", boxShadow: "6px 6px 0px #111" }}
      >
        <img
          alt={title}
          className="project-img absolute inset-0 w-full h-full object-cover"
          src={image}
        />
        <div className="tag-wrap absolute top-6 left-6 flex gap-2">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="border-[3px] border-[#111] px-4 py-[7px]"
              style={{
                background: tag.bg,
                transform: `rotate(${tag.rotate ?? "0deg"})`,
                boxShadow: "3px 3px 0px #111",
              }}
            >
              <span
                className="text-[12px] uppercase"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 500,
                  color: tag.color ?? "#111",
                }}
              >
                {tag.text}
              </span>
            </div>
          ))}
        </div>
      </a>
      <div className="flex flex-col gap-4">
        <h3
          className="project-title text-[#111] tracking-[-3px] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.1 }}
        >
          {title}
        </h3>
        <div className="flex gap-3">
          <span
            className="project-num text-[20px] shrink-0"
            style={{ fontFamily: "'DM Mono', monospace", color: numColor, fontWeight: 500 }}
          >
            {num}
          </span>
          <p
            className="text-[#111] text-[14px] leading-[22.75px]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({
  num,
  numBg,
  numTextColor,
  title,
  desc,
  tags,
  visual,
}: {
  num: string;
  numBg: string;
  numTextColor: string;
  title: string;
  desc: string;
  tags: string[];
  visual: React.ReactNode;
}) {
  return (
    <div data-reveal className="process-step-hover border-b-[3px] border-r-[3px] border-[#111] bg-white p-12 relative">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex gap-6 flex-1">
          <div
            className={`${numBg} border-[3px] border-[#111] flex items-center justify-center size-20 shrink-0`}
            style={{ boxShadow: "6px 6px 0px #111" }}
          >
            <span
              className="text-[36px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: numTextColor }}
            >
              {num}
            </span>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h3
              className="text-[#111] tracking-[-1.2px] uppercase leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 48px)" }}
            >
              {title}
            </h3>
            <p
              className="text-[#333] text-[18px] leading-[29px]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {desc}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#e5dfd4] border-2 border-[#111] px-[14px] py-[6px] text-[12px] uppercase text-[#111]"
                  style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center lg:w-[340px] shrink-0">{visual}</div>
      </div>
    </div>
  );
}

export default function App() {
  useScrollReveal();
  useMagneticCursor();
  return (
    <div className="bg-[#eef2ff] w-full min-h-screen overflow-x-hidden" id="top">
      {/* Custom cursor pill */}
      <div
        id="custom-cursor"
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.8)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            border: "3px solid #111",
            color: "white",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "14px 22px",
            boxShadow: "4px 4px 0px #111",
            whiteSpace: "nowrap",
          }}
        >
          VISIT SITE
        </div>
      </div>
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 12s linear infinite; }

        /* Neo-brutalist press: element sinks into its shadow */
        .btn-press {
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .btn-press:hover {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px #111 !important;
        }

        /* Card lift off the page */
        .card-lift {
          transition: transform 0.2s cubic-bezier(.2,0,.1,1), box-shadow 0.2s cubic-bezier(.2,0,.1,1);
        }
        .card-lift:hover {
          transform: translate(-3px, -5px);
          box-shadow: 14px 14px 0px #111 !important;
        }

        /* Custom cursor: hide default pointer over project images */
        [data-cursor="visit"] { cursor: none; }

        /* Nav link: pink underline slides in */
        .nav-link {
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: #2563eb;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        /* Social icons: lift + tilt */
        .social-icon {
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        .social-icon:hover {
          transform: translate(-3px, -3px) rotate(-6deg) !important;
          box-shadow: 7px 7px 0px #111 !important;
        }

        /* Process step: background warms on hover */
        .process-step-hover {
          transition: background-color 0.25s ease;
        }
        .process-step-hover:hover {
          background-color: #e0e7ff !important;
        }

        /* Section badge: subtle float */
        @keyframes badge-bob {
          0%, 100% { transform: rotate(-1deg) translateY(0); }
          50% { transform: rotate(-1deg) translateY(-3px); }
        }
        .badge-bob:hover {
          animation: badge-bob 0.6s ease infinite;
        }

        /* Hero headline: underline glow on "DEVELOPER" */
        .hero-highlight {
          transition: letter-spacing 0.2s ease;
        }
        .hero-highlight:hover {
          letter-spacing: 0px;
        }

        /* Contact "Let's talk" scale pulse */
        .contact-cta {
          transition: transform 0.2s ease, color 0.2s ease;
          display: inline-block;
        }
        .contact-cta:hover {
          transform: scale(1.02);
        }

        /* ── SCROLL REVEAL ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.65s cubic-bezier(.2,0,.1,1), transform 0.65s cubic-bezier(.2,0,.1,1);
        }
        [data-reveal="left"] {
          transform: translateX(-40px);
        }
        [data-reveal="right"] {
          transform: translateX(40px);
        }
        [data-reveal="scale"] {
          transform: scale(0.90);
          opacity: 0;
        }
        [data-reveal="fade"] {
          transform: none;
          opacity: 0;
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: none;
        }
        [data-delay="100"] { transition-delay: 0.10s; }
        [data-delay="150"] { transition-delay: 0.15s; }
        [data-delay="200"] { transition-delay: 0.20s; }
        [data-delay="300"] { transition-delay: 0.30s; }
        [data-delay="400"] { transition-delay: 0.40s; }
        [data-delay="500"] { transition-delay: 0.50s; }
        [data-delay="600"] { transition-delay: 0.60s; }

        /* ── PROJECT CARD enhanced hover ── */
        .project-card {
          transition: transform 0.25s cubic-bezier(.2,0,.1,1);
        }
        .project-card:hover {
          transform: translateY(-6px);
        }
        /* Image zoom on hover */
        .project-img {
          transition: transform 0.5s cubic-bezier(.2,0,.1,1);
        }
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
        /* Tags slide down into view */
        .project-card .tag-wrap {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform: translateY(-8px);
          opacity: 0;
        }
        .project-card:hover .tag-wrap {
          transform: translateY(0);
          opacity: 1;
        }
        /* Project number pops colour */
        .project-num {
          transition: transform 0.2s ease;
          display: inline-block;
        }
        .project-card:hover .project-num {
          transform: scale(1.2) rotate(-5deg);
        }
        /* Title underline grows */
        .project-title {
          background-image: linear-gradient(currentColor, currentColor);
          background-size: 0% 3px;
          background-repeat: no-repeat;
          background-position: left bottom;
          transition: background-size 0.35s ease;
          padding-bottom: 2px;
        }
        .project-card:hover .project-title {
          background-size: 100% 3px;
        }
      `}</style>

      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[99999] focus:bg-[#2563eb] focus:text-white focus:px-4 focus:py-2 focus:font-bold"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Skip to main content
      </a>

      {/* ── HEADER ── */}
      <header
        className="bg-[#eef2ff] border-b-[3px] border-[#111] flex items-center justify-between px-8 py-4 sticky top-0 z-50"
        style={{ boxShadow: "6px 6px 0px #111" }}
        role="banner"
      >
        <a
          href="#"
          className="text-[#111] text-[24px] font-bold uppercase tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          aria-label="Sameer Ali — back to top"
        >
          SAMEER ALI
        </a>
        <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
          {["Services", "Work", "Process", "About", "Contact"].map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-link text-[16px] font-bold uppercase tracking-[-0.8px] ${i === 0 ? "text-[#2563eb]" : "text-[#111] hover:text-[#2563eb]"} transition-colors`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press bg-[#2563eb] border-[3px] border-[#111] px-7 py-3 text-white font-bold uppercase text-[16px] tracking-[-0.8px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", boxShadow: "4px 4px 0px #111" }}
          aria-label="Let's talk — open WhatsApp"
        >
          {"LET'S TALK"}
        </a>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main id="main-content">

      {/* ── HERO ── */}
      <section aria-labelledby="hero-heading" className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 px-8 lg:px-12 py-24 max-w-[1280px] mx-auto relative">
        {/* Left */}
        <div className="flex-1 flex flex-col items-start z-10">
          <h1 id="hero-heading" data-reveal data-delay="100" className="flex flex-col gap-1 pb-8">
            <span
              className="text-[#111] font-bold uppercase leading-[0.9]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(44px, 10vw, 96px)", letterSpacing: "-2px" }}
            >
              WEB
            </span>
            <span className="inline-block" style={{ transform: "rotate(1deg)" }}>
              <span className="bg-white border-[3px] border-[#111] px-3 py-1 inline-block">
                <span
                  className="text-[#2563eb] font-bold uppercase leading-[0.9]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(44px, 10vw, 96px)", letterSpacing: "-2px" }}
                >
                  DEVELOPER
                </span>
              </span>
            </span>
            <span
              className="text-[#111] font-bold uppercase leading-[0.9]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 8vw, 96px)", letterSpacing: "-2px" }}
            >
              & CMS EXPERT.
            </span>
          </h1>

          <div
            data-reveal data-delay="200"
            className="bg-[rgba(144,168,237,0.2)] border-[3px] border-[#111] px-5 py-5 mb-12 max-w-[400px] rounded-sm"
          >
            <p
              className="text-[#111] text-[22px] leading-[39px]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              I build high-performance<br />WordPress & Shopify solutions<br />that drive real results.
            </p>
          </div>

          <a
            data-reveal data-delay="300"
            href="#work"
            className="btn-press bg-[#2563eb] border-[3px] border-[#111] flex items-center gap-2 px-6 py-4 rounded-sm"
            style={{ boxShadow: "6px 6px 0px #111", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-[#111] text-[18px] font-bold uppercase tracking-[0.27px]">SEE THE WORK</span>
            <img alt="" src={imgArrowContainer} style={{ width: 16, height: 16 }} />
          </a>
        </div>

        {/* Right: portrait */}
        <div data-reveal="right" data-delay="200" className="flex-1 w-full relative flex items-center justify-center pl-0 lg:pr-6 pt-8 pb-8 lg:pb-0">
          <div className="absolute inset-4 bg-[#90a8ed] border-[3px] border-[#111] rounded-sm translate-x-4 translate-y-4" style={{ boxShadow: "6px 6px 0px #111" }} />
          <div
            className="relative border-[3px] border-[#111] overflow-hidden rounded-sm w-full max-w-[480px]"
            style={{ aspectRatio: "4/5", boxShadow: "6px 6px 0px #111" }}
          >
            <img alt="Sameer Ali — Web Developer" className="absolute inset-0 w-full h-full object-cover object-top" src={imgHero} />
            <div className="absolute bottom-4 left-4 bg-white border-[3px] border-[#111] flex items-center gap-2 px-4 py-2 rounded-sm">
              <img alt="" src={imgLocationDot} style={{ width: 13, height: 8 }} />
              <span className="text-[#111] text-[14px] uppercase" style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>Raw. Unedited.</span>
            </div>
          </div>
          {/* cross decoration */}
          <div className="absolute -top-4 -right-4 size-8 opacity-80" aria-hidden="true">
            <img alt="" className="absolute inset-0 w-full h-full" src={imgCrossLg} aria-hidden="true" />
            <img alt="" className="absolute inset-0 w-full h-full" src={imgCrossLgH} aria-hidden="true" />
          </div>
          <div className="absolute -bottom-8 -left-8 size-12 opacity-50" aria-hidden="true">
            <img alt="" className="absolute inset-0 w-full h-full" src={imgCrossSmV} aria-hidden="true" />
            <img alt="" className="absolute inset-0 w-full h-full" src={imgCrossSmH} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE TAPE ── */}
      <div className="w-full my-4 overflow-hidden">
        <Marquee />
      </div>

      {/* ── ABOUT / SKILLS ── */}
      <section id="about" aria-label="About Sameer Ali" className="max-w-[1280px] mx-auto px-8 lg:px-12 py-24 flex flex-col lg:flex-row gap-16 items-start">
        {/* Skills grid */}
        <div data-reveal="left" className="relative w-full lg:w-[480px] shrink-0">
          <div className="absolute inset-0 bg-[#111] translate-x-2 translate-y-2" />
          <div className="bg-white border-[3px] border-[#111] p-[35px] relative flex flex-col gap-6">
            <div className="border-b-[3px] border-[#111] pb-3">
              <h2
                className="text-[#0f172a] text-[24px] tracking-[-1.2px] uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              >
                Technical Stack
              </h2>
            </div>
            <TechTable />
            {/* hire me sticker */}
            <div className="absolute -bottom-12 -right-12 size-24" style={{ transform: "rotate(12deg)" }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#facc15] border-[3px] border-[#111] flex items-center justify-center size-24 hover:scale-105 transition-transform"
                style={{ boxShadow: "4px 4px 0px #111" }}
                aria-label="Hire Sameer Ali — open WhatsApp"
              >
                <span
                  className="text-[#0f172a] text-[12px] uppercase text-center leading-[15px]"
                  style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}
                >
                  Hire<br />Me<br />Now
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bio text */}
        <div data-reveal="right" data-delay="150" className="flex flex-col gap-8 flex-1 max-w-[600px]">
          <h2
            className="text-[#0f172a] tracking-[-3.2px] uppercase leading-[1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(36px, 6vw, 64px)" }}
          >
            CMS Expertise<br />Meets High-<br />Performance.
          </h2>
          <div className="flex flex-col gap-6">
            <div className="bg-[rgba(37,99,235,0.12)] px-2">
              <p
                className="text-[#0f172a] text-[24px] lg:text-[28px] leading-[32px]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
              >
                I am a WordPress & Shopify Developer with a passion for custom theme, plugin development, and performance optimization.
              </p>
            </div>
            <p
              className="text-[#0f172a] text-[22px] lg:text-[28px] leading-[32px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
            >
              Specializing in CMS-driven solutions, I focus on building custom plugins, optimizing e-commerce platforms, and delivering high-performance websites that convert visitors into customers.
            </p>
            <div className="border-l-[3px] border-[#2563eb] pl-5">
              <p
                className="text-[#475569] text-[18px] leading-[28px]"
                style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}
              >
                {">"} Currently pursuing a BS in Computer Science at Virtual University of Pakistan. Previously at Anees IT Firm (2024–2025), now building production sites at Zera Creative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" aria-labelledby="services-heading" className="max-w-[1280px] mx-auto px-8 lg:px-12 pb-20 relative">
        {/* Section header */}
        <div data-reveal className="flex flex-col gap-4 mb-10">
          <div style={{ transform: "rotate(-1deg)", display: "inline-block" }}>
            <div
              className="bg-[#ffc900] border-[3px] border-[#111] px-5 py-[7px] inline-block"
              style={{ boxShadow: "4px 4px 0px #111" }}
            >
              <span
                className="text-[#111] text-[14px] tracking-[1.4px] uppercase"
                style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}
              >
                Capabilities_v2.0
              </span>
            </div>
          </div>
          <div>
            <h2
              id="services-heading"
              className="text-[#111] font-bold uppercase leading-[1.2]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 8vw, 96px)", letterSpacing: "clamp(-2px, -0.5vw, -5.12px)" }}
            >
              Engineering{" "}
              <span className="text-[#2563eb]">Excellence.</span>
            </h2>
          </div>
          <p
            className="text-[#333] text-[18px] leading-[28px] max-w-[672px]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Synthesizing design aesthetics with high-performance infrastructure. I build digital engines that are as robust as they are visually striking.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div data-reveal data-delay="100">
          <ServiceCard
            bg="bg-[#eef2ff]"
            iconBg="bg-[#2563eb]"
            icon={imgArchIcon}
            iconSize="27px"
            title="WordPress Dev"
            comment="// THEMES & PLUGINS"
            desc="Building custom WordPress themes and plugins from scratch. Scalable architecture, clean PHP code, and performance-first approach for any project size."
            items={[
              { icon: imgCheckArrow, text: "Custom Theme Development", iconW: "11.667px", iconH: "9.333px" },
              { icon: imgCheckDb, text: "Plugin Development", iconW: "10.5px", iconH: "9.333px" },
              { icon: imgCheckLock, text: "PHP & MySQL Backend", iconW: "9.333px", iconH: "11.667px" },
            ]}
            btnBg="bg-[#111]"
            btnText="Explore Stack"
            btnHref="#about"
            btnTextColor="#eef2ff"
          />
          </div>
          <div data-reveal data-delay="200" className="relative">
            <ServiceCard
              bg="bg-white"
              iconBg="bg-[#ffc900]"
              icon={imgVisualIcon}
              iconSize="33px"
              title="Shopify & E-Commerce"
              comment="// STORE DEVELOPMENT"
              desc="Setting up and customizing Shopify stores with bespoke themes and seamless checkout experiences that drive conversions and grow revenue."
              items={[
                { icon: imgNextjsIcon, text: "Custom Shopify Themes", iconW: "11.667px", iconH: "9.333px" },
                { icon: imgFramerIcon, text: "Store Setup & Config", iconW: "11.667px", iconH: "11.667px" },
                { icon: imgWcagIcon, text: "E-commerce Optimization", iconW: "10.5px", iconH: "11.667px" },
              ]}
              btnBg="bg-[#ffc900]"
              btnText="View Store Work"
              btnHref="#work"
              btnTextColor="#111"
              btnShadow="4px 4px 0px #111"
              extraDecor={
                <div className="absolute -top-4 -right-12 size-[180px] pointer-events-none z-10">
                  <img alt="" className="absolute inset-0 w-full h-full" src={imgSpinDecor} />
                </div>
              }
            />
          </div>
          <div data-reveal data-delay="300">
          <ServiceCard
            bg="bg-[#90a8ed]"
            iconBg="bg-white"
            icon={imgCloudIcon}
            iconSize="33px"
            title="Performance Boost"
            comment="// SPEED & OPTIMIZATION"
            desc="Cutting page load times and boosting Core Web Vitals. Advanced caching strategies, image optimization, and database tuning for high-traffic sites."
            items={[
              { icon: imgDockerIcon, text: "Caching Strategies", iconW: "11.667px", iconH: "10.5px" },
              { icon: imgCloudCheck, text: "Image Optimization", iconW: "10.5px", iconH: "11.083px" },
              { icon: imgGhActions, text: "Database Performance", iconW: "11.694px", iconH: "11.708px" },
            ]}
            btnBg="bg-[#111]"
            btnText="See Results"
            btnHref="#work"
            btnTextColor="#eef2ff"
          />
          </div>
        </div>

        {/* CTA ribbon */}
        <div className="mt-10" style={{ transform: "rotate(0.5deg)" }}>
          <div
            className="bg-[#2563eb] border-[3px] border-[#111] flex flex-col md:flex-row items-center justify-between px-7 py-8 gap-6"
            style={{ boxShadow: "8px 8px 0px #111" }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-white border-2 border-[#111] rounded-full p-[10px] shrink-0">
                <span className="text-[#2563eb] text-[24px] leading-none" style={{ fontFamily: "sans-serif" }}>⚡</span>
              </div>
              <span
                className="text-white text-[20px] font-bold tracking-[-0.5px] uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to initiate a new project protocol?
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href={resumePdf}
                download="Sameer_Ali_Resume.pdf"
                className="btn-press bg-white border-[3px] border-[#111] px-9 py-4 text-[#111] text-[16px] font-bold uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", boxShadow: "4px 4px 0px #111" }}
                aria-label="Download Sameer Ali's CV"
              >
                Download CV
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press bg-[#ffc900] border-[3px] border-[#111] px-9 py-4 text-[#111] text-[16px] font-bold uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", boxShadow: "4px 4px 0px #111" }}
              >
                Secure Slot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section id="work" aria-labelledby="work-heading" className="max-w-[1280px] mx-auto px-8 lg:px-12 py-24">
        {/* Header */}
        <div data-reveal className="mb-16">
          <div style={{ transform: "rotate(-2deg)", display: "inline-block", marginBottom: 8 }}>
            <div
              className="bg-[#ffc900] border-[3px] border-[#111] px-5 py-[7px] inline-block"
              style={{ boxShadow: "4px 4px 0px #111" }}
            >
              <span
                className="text-[#111] text-[14px] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Archive_01
              </span>
            </div>
          </div>
          <h2
            id="work-heading"
            className="text-[#111] font-bold uppercase leading-[1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 8vw, 96px)", letterSpacing: "clamp(-2px, -0.8vw, -8.8px)" }}
          >
            Selected{" "}
            <span className="text-[#2563eb]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
          <div data-reveal data-delay="100">
          <ProjectCard
            image={imgMagnetDomain}
            tags={[
              { text: "WordPress", bg: "#ffc900", rotate: "-3deg" },
              { text: "SEO", bg: "#90a8ed", rotate: "2deg" },
            ]}
            num="01"
            numColor="#2563eb"
            title="Magnet Domain"
            desc="Professional web design & SEO agency site for German-speaking service businesses — doctors, lawyers, architects. Built for bookings, brand trust, and measurable traffic growth."
            href="https://magnetdomain.com/"
          />
          </div>
          <div data-reveal data-delay="250">
          <ProjectCard
            image={imgSprachKompass}
            tags={[{ text: "WordPress", bg: "#2563eb", color: "white", rotate: "5deg" }, { text: "Elementor", bg: "#ffc900", rotate: "-2deg" }]}
            num="02"
            numColor="#ffc900"
            title="Sprach Kompass"
            desc="English-German certified translation agency with 4.8-star reputation and 80+ reviews. Custom WordPress site covering legal, business, and academic translations by sworn court-approved translators."
            href="https://sprach-kompass.de/en/home/"
          />
          </div>
          <div data-reveal data-delay="100">
          <ProjectCard
            image={imgZulfayHair}
            tags={[{ text: "Shopify", bg: "#111", color: "#eef2ff", rotate: "-1deg" }, { text: "E-Commerce", bg: "#ffc900", rotate: "3deg" }]}
            num="03"
            numColor="#90a8ed"
            title="Zulfay Hair"
            desc="Pakistan's first Remy clip-in hair extensions brand. Full Shopify store with custom theme, product collections, shade selector, and international order support."
            href="https://zulfayhair.com/"
          />
          </div>
          <div data-reveal data-delay="250">
          <ProjectCard
            image={imgBlunCare}
            tags={[
              { text: "Shopify", bg: "#ffc900", rotate: "1deg" },
              { text: "Skincare", bg: "#90a8ed", rotate: "-2deg" },
            ]}
            num="04"
            numColor="#2563eb"
            title="Blun Care"
            desc="Minimalist fragrance-free skincare brand — two products, zero compromise. Shopify store built around a camel milk cream and handcrafted soap with a clean, nature-forward aesthetic."
            href="https://bluncare.com/"
          />
          </div>
          <div data-reveal data-delay="100">
          <ProjectCard
            image={imgJinnahSchools}
            tags={[{ text: "WordPress", bg: "#2563eb", color: "white", rotate: "-2deg" }, { text: "Education", bg: "#ffc900", rotate: "2deg" }]}
            num="05"
            numColor="#ffc900"
            title="Jinnah Schools"
            desc="School website for a Pre-School to Grade 10 institution in Pakistan. Custom WordPress theme with enrollment flows, campus details, and smart classroom content — learners today, leaders tomorrow."
            href="https://jinnahschools.edu.pk/"
          />
          </div>
          <div data-reveal data-delay="250">
          <ProjectCard
            image={imgHabibeLondon}
            tags={[
              { text: "Shopify", bg: "#111", color: "#eef2ff", rotate: "1deg" },
              { text: "Fashion", bg: "#90a8ed", rotate: "-1deg" },
            ]}
            num="06"
            numColor="#2563eb"
            title="Habibe London"
            desc="Women's linen clothing e-commerce brand based in London. Custom Shopify store showcasing an elegant fashion collection with a refined, minimal aesthetic tailored to modern women."
            href="https://habibelondon.com/"
          />
          </div>
        </div>

        {/* CTA block */}
        <div
          className="bg-white border-[3px] border-[#111] flex flex-col lg:flex-row items-center justify-between p-16 mt-24 overflow-hidden relative gap-8"
          style={{ boxShadow: "12px 12px 0px #2563eb" }}
        >
          <div className="max-w-[672px] relative z-10">
            <div className="flex flex-wrap items-baseline gap-2 mb-8">
              <span
                className="text-[#111] font-bold uppercase leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 7vw, 96px)", letterSpacing: "clamp(-2px, -0.5vw, -4.8px)" }}
              >
                Got a{" "}
              </span>
              <div
                className="bg-[#ffc900] px-4 py-1 inline-block"
                style={{ transform: "rotate(-1deg)", boxShadow: "4px 4px 0px #111" }}
              >
                <span
                  className="text-black font-bold uppercase leading-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 7vw, 96px)", letterSpacing: "clamp(-2px, -0.5vw, -4.8px)" }}
                >
                  vision
                </span>
              </div>
              <span
                className="text-[#111] font-bold uppercase leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 7vw, 96px)", letterSpacing: "clamp(-2px, -0.5vw, -4.8px)" }}
              >
                ?
              </span>
            </div>
            <p
              className="text-[#111] text-[18px] lg:text-[20px] leading-[28px]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              We build digital artifacts that demand attention. No safe choices. No boring grids. No compromises on performance.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-32 opacity-10 z-0" style={{ background: "repeating-linear-gradient(45deg, #2563eb 0, #2563eb 5%, #111 5%, #111 10%)" }} />
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press bg-[#2563eb] border-[3px] border-[#111] flex items-center gap-3 px-8 py-6 shrink-0 z-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif", boxShadow: "8px 8px 0px #111" }}
            aria-label="Start a project — open WhatsApp"
          >
            <span className="text-white text-[20px] lg:text-[24px] font-bold uppercase tracking-[2.4px]">START PROJECT</span>
            <img alt="" src={imgArrowRight} style={{ width: 16, height: 16 }} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" aria-labelledby="process-heading" className="max-w-[1280px] mx-auto px-8 lg:px-12 py-24">
        {/* Header */}
        <div data-reveal className="flex flex-col gap-6 mb-12">
          <div style={{ transform: "rotate(-1deg)", display: "inline-block" }}>
            <div
              className="bg-[#ffc900] border-[3px] border-[#111] px-5 py-[7px] inline-block"
              style={{ boxShadow: "4px 4px 0px #111" }}
            >
              <span
                className="text-[#111] text-[14px] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Workflows & Logic
              </span>
            </div>
          </div>
          <div>
            <h2
              id="process-heading"
              className="text-[#111] font-bold uppercase leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 8vw, 96px)", letterSpacing: "clamp(-2px, -0.6vw, -6.4px)" }}
            >
              The{" "}
              <span className="text-[#2563eb]">Process</span>
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="border-l-[3px] border-[#111] pl-1">
          <ProcessStep
            num="01"
            numBg="bg-[#2563eb]"
            numTextColor="white"
            title="Discovery & Logic"
            desc="Understanding the core problem before writing a single line of code. We map out user flows, define business logic requirements, and establish the technical constraints of the project."
            tags={["User Mapping", "Requirements Gathering", "Logic Schematics"]}
            visual={
              <div style={{ transform: "rotate(2deg)" }}>
                <div
                  className="bg-white border-[3px] border-[#111] w-[280px] lg:w-[328px] h-48 overflow-hidden relative flex flex-col items-center justify-center"
                  style={{ boxShadow: "6px 6px 0px #111" }}
                >
                  <div className="absolute top-4 right-12 w-12 h-10 bg-[#2563eb] border-2 border-[#111]" />
                  <div className="w-0.5 h-6 bg-[#111] mb-2" />
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-white border-2 border-[#111]" />
                    <div className="w-8 h-0.5 bg-[#111]" />
                    <div className="w-10 h-10 bg-white border-2 border-[#111]" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="text-[#111] text-[10px] uppercase" style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>logic_flow.v1</span>
                  </div>
                </div>
              </div>
            }
          />
          <ProcessStep
            num="02"
            numBg="bg-[#ffc900]"
            numTextColor="#111"
            title="CMS & Backend Setup"
            desc="Building the engine. Designing robust database schemas, configuring WordPress or Shopify environments, and setting up secure REST APIs with clean PHP and MySQL."
            tags={["PHP / MySQL", "WordPress / Shopify", "REST APIs"]}
            visual={
              <div style={{ transform: "rotate(-1deg)" }}>
                <div
                  className="bg-white border-[3px] border-[#111] w-[280px] lg:w-[328px] h-48 overflow-hidden p-3"
                  style={{ boxShadow: "6px 6px 0px #111" }}
                >
                  <div className="flex flex-col gap-2 h-full p-4">
                    <div className="bg-[#ffc900] border-2 border-[#111] flex items-center justify-between px-2 py-1">
                      <span className="text-[10px]" style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>TABLE: USERS</span>
                      <span className="text-[8px]" style={{ fontFamily: "'DM Mono', monospace" }}>SQL</span>
                    </div>
                    <div className="bg-white border-2 border-[#111] flex items-center justify-between px-2 py-1">
                      <span className="text-[10px]" style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>COLLECTION: LOGS</span>
                      <span className="text-[8px]" style={{ fontFamily: "'DM Mono', monospace" }}>JSON</span>
                    </div>
                    <div className="bg-white border-2 border-[#111] flex items-center justify-between px-2 py-1">
                      <span className="text-[10px]" style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>API_ENDPOINT: /V1</span>
                      <span className="text-[8px]" style={{ fontFamily: "'DM Mono', monospace" }}>REST</span>
                    </div>
                    <div className="flex gap-1 mt-auto">
                      <div className="flex-1 bg-[#111] opacity-20 h-2" />
                      <div className="w-24 bg-[#2563eb] h-2" />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <ProcessStep
            num="03"
            numBg="bg-[#90a8ed]"
            numTextColor="white"
            title="Theme & Frontend"
            desc="The interface layer. Building custom themes with Elementor or hand-coded HTML/CSS/JS that are pixel-perfect, mobile-responsive, and fast-loading across all devices."
            tags={["Custom Themes", "Elementor", "HTML / CSS / JS"]}
            visual={
              <div style={{ transform: "rotate(1deg)" }}>
                <div
                  className="bg-white border-[3px] border-[#111] w-[280px] lg:w-[328px] h-48 overflow-hidden p-3"
                  style={{ boxShadow: "6px 6px 0px #111" }}
                >
                  <div className="bg-[#eef2ff] border-2 border-[#111] h-full p-1">
                    <div className="bg-white border-b-2 border-[#111] h-6 flex items-center gap-1 px-2 mb-1">
                      <div className="size-2 rounded-full bg-[#f87171] border border-[#111]" />
                      <div className="size-2 rounded-full bg-[#facc15] border border-[#111]" />
                      <div className="size-2 rounded-full bg-[#4ade80] border border-[#111]" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-3">
                      <div className="col-span-2 bg-[#90a8ed] border-2 border-[#111] h-4" />
                      <div className="bg-white border-2 border-[#111] h-16" />
                      <div className="bg-white border-2 border-[#111] h-16" />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <ProcessStep
            num="04"
            numBg="bg-[#2563eb]"
            numTextColor="white"
            title="Testing & Launch"
            desc="Zero friction. Rigorous unit testing, integration verification, and optimized deployment pipelines to ensure the product is stable, fast, and ready for the world."
            tags={["Unit Testing", "CI/CD Pipelines", "Performance Audit"]}
            visual={
              <div style={{ transform: "rotate(-2deg)" }}>
                <div
                  className="bg-[#111] border-[3px] border-[#111] w-[280px] lg:w-[328px] h-48 overflow-hidden p-3"
                  style={{ boxShadow: "6px 6px 0px #111" }}
                >
                  <div className="p-4 flex flex-col gap-1">
                    <span className="text-[#4ade80] text-[10px]" style={{ fontFamily: "'DM Mono', monospace" }}>$ npm run build</span>
                    <span className="text-white text-[10px]" style={{ fontFamily: "'DM Mono', monospace" }}>... building production bundle</span>
                    <span className="text-[#4ade80] text-[10px]" style={{ fontFamily: "'DM Mono', monospace" }}>$ npm run test</span>
                    <div className="flex gap-2 items-center">
                      <span className="text-white text-[10px]" style={{ fontFamily: "'DM Mono', monospace" }}>PASS</span>
                      <span className="bg-[#22c55e] text-black text-[10px] px-1" style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>100%</span>
                    </div>
                    <div className="flex gap-2 items-center mt-4">
                      <img alt="" src={imgCheckGreen} style={{ width: "11.667px", height: "11.667px" }} />
                      <span className="text-[#4ade80] text-[10px] uppercase italic" style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>LAUNCH SUCCESSFUL</span>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* ── LET'S TALK ── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="flex flex-col items-center justify-center min-h-[600px] px-8 py-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-10 left-10 size-32 bg-[rgba(37,99,235,0.12)] rounded-xl blur-[32px]" />
        <div className="absolute bottom-10 right-10 size-48 bg-[rgba(144,168,237,0.2)] rounded-xl blur-[32px]" />

        <h2 id="contact-heading" className="sr-only">Contact</h2>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal="scale"
          aria-label="Let's talk — open WhatsApp"
          className="contact-cta text-[#111] font-bold uppercase text-center mb-16 leading-none hover:text-[#2563eb] transition-colors"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 10vw, 153px)",
            letterSpacing: "clamp(-2px, -0.5vw, -7.68px)",
          }}
        >
          {"Let's talk."}
        </a>

        <div className="relative mb-20">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press text-[#111] pb-2 block hover:text-[#2563eb] transition-colors"
            style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: "clamp(18px, 3vw, 36px)" }}
          >
            sameeralifazal@gmail.com
          </a>
          <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#2563eb] border-[3px] border-[#111]" />
        </div>

        <div data-reveal data-delay="200" className="flex gap-6 items-center justify-center" role="list" aria-label="Social media links">
          {[
            { img: imgGitHub, alt: "GitHub", href: "https://github.com/sameeer-codes" },
            { img: imgLinkedIn, alt: "LinkedIn", href: "https://www.linkedin.com/in/sameer-codes/" },
          ].map(({ img, alt, href }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon bg-white border-[3px] border-[#111] flex items-center justify-center size-20"
              style={{ boxShadow: "4px 4px 0px #111" }}
              role="listitem"
              aria-label={`Visit Sameer Ali on ${alt} — opens in new tab`}
            >
              <img alt={alt} className="w-full h-full object-contain p-3" src={img} />
            </a>
          ))}
        </div>
      </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111] border-t-[3px] border-[#111] px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6" role="contentinfo">
        <span
          className="text-[#eef2ff] text-[16px] font-bold uppercase tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Copyright © 2026 {"Sameer's"} Code Lab — All Rights Reserved
        </span>
        <nav className="flex gap-8" aria-label="Footer navigation">
          {[
            { label: "GitHub", href: "https://github.com/sameeer-codes" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/sameer-codes/" },
            { label: "Email", href: "mailto:sameeralifazal@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-white text-[14px] uppercase hover:text-[#2563eb] transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
              aria-label={label === "Email" ? "Send email to Sameer Ali" : `Visit Sameer Ali on ${label} — opens in new tab`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div style={{ transform: "rotate(2deg)" }}>
          <div
            className="bg-[#2563eb] border-2 border-[#eef2ff] px-[18px] py-[10px]"
            style={{ boxShadow: "4px 4px 0px rgba(37,99,235,0.25)" }}
          >
            <span
              className="text-white text-[12px] uppercase"
              style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}
            >
              Ready to ship
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}



