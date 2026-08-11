import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Layers,
  Compass,
  Target,
  Brain,
  PenLine,
  Code2,
  MessageCircle,
  Globe,
  AtSign,
  Menu,
  X,
} from "lucide-react";
import Frame220 from "@/imports/Frame220/index";
import imgFrame230 from "@/imports/Home/78a1c845b2e905cf9e4f7703ea7b6eac3b140804.png";
import imgFrame231 from "@/imports/Home/5e7bee56cd8bef0071b553d9d4ee3873c9cf4f9c.png";

const MOBILE_SCALE = 0.55;
const STRIP_W = 3290;
const STRIP_H = 441;
const MOBILE_VISUAL_W = Math.round(STRIP_W * MOBILE_SCALE); // ~1810px
const MOBILE_VISUAL_H = Math.round(STRIP_H * MOBILE_SCALE); // ~243px

const MARQUEE_CSS = `
  @keyframes marqueeScroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    align-items: flex-start;
    width: max-content;
    will-change: transform;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }

  /* ── Desktop ── */
  @media (min-width: 768px) {
    .marquee-track {
      animation: marqueeScroll 40s linear infinite;
    }
    .marquee-copy-wrapper {
      flex-shrink: 0;
    }
    .marquee-copy {
      display: flex;
      width: ${STRIP_W}px;
      height: ${STRIP_H}px;
      flex-shrink: 0;
    }
    .marquee-mobile-wrapper {
      height: ${STRIP_H}px;
      overflow: hidden;
    }
  }

  /* ── Mobile ──
     Each copy-wrapper is exactly the scaled visual size so the flex
     track sees the right element widths and the animation loops cleanly.
     overflow:hidden on the wrapper clips the oversized scaled child.
  */
  @media (max-width: 767px) {
    .marquee-track {
      animation: marqueeScroll 30s linear infinite;
    }
    .marquee-copy-wrapper {
      width: ${MOBILE_VISUAL_W}px;
      height: ${MOBILE_VISUAL_H}px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .marquee-copy {
      width: ${STRIP_W}px;
      height: ${STRIP_H}px;
      transform: scale(${MOBILE_SCALE});
      transform-origin: left top;
      flex-shrink: 0;
    }
    .marquee-mobile-wrapper {
      height: ${MOBILE_VISUAL_H}px;
      overflow: hidden;
    }
  }
`;

const ACCENT = "#FFA500";

function GridBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right,#f2f2f2 1px,transparent 1px),linear-gradient(to bottom,#f2f2f2 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#f2f2f2]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
        <span className="font-bold leading-none text-[24px]">
          <span className="text-[#5b5b5b]">mahe</span>
          <span style={{ color: ACCENT }}>ux.</span>
        </span>

        <nav className="hidden md:flex items-center gap-5 text-[#5b5b5b] font-medium text-[18px]">
          <a href="#what-i-do" className="hover:text-[#1e1e1e] transition-colors">What I Do</a>
          <a href="#about" className="hover:text-[#1e1e1e] transition-colors">About Me</a>
          <a href="#testimonials" className="hover:text-[#1e1e1e] transition-colors">Testimonials</a>
        </nav>

        <a href="mailto:hello@maheux.me" className="hidden md:flex items-center gap-2 bg-[#1e1e1e] text-[#f5f5f5] rounded-full px-8 py-3 font-medium text-[16px] hover:bg-[#303030] transition-colors">
          Contact Me <ArrowUpRight size={18} />
        </a>

        <button
          className="md:hidden p-2 text-[#1e1e1e]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#f2f2f2] px-6 py-6 flex flex-col gap-5">
          <a href="#what-i-do" className="text-[#5b5b5b] font-medium text-[18px]" onClick={() => setOpen(false)}>What I Do</a>
          <a href="#about" className="text-[#5b5b5b] font-medium text-[18px]" onClick={() => setOpen(false)}>About Me</a>
          <a href="#testimonials" className="text-[#5b5b5b] font-medium text-[18px]" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="mailto:hello@maheux.me" className="flex items-center gap-2 bg-[#1e1e1e] text-[#f5f5f5] rounded-full px-8 py-3 font-medium self-start hover:bg-[#303030] transition-colors">
            Contact Me <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[85vh] flex items-center justify-center py-24">
      <GridBg />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-6">
        <p className="font-semibold text-[18px] text-[#1e1e1e] tracking-[0.09px]">
          UI/UX Designer{" "}
          <span style={{ color: ACCENT }} className="font-bold text-[24px]">·</span>{" "}
          Web Developer
        </p>

        <h1 className="font-bold text-[48px] sm:text-[60px] md:text-[72px] leading-[1.1] tracking-[-1.44px] text-[#1e1e1e] capitalize max-w-4xl">
          I Design Digital experiences that look good, work well, and grow brands.
        </h1>

        <p className="text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px] max-w-2xl">I'm Maheshika, a multidisciplinary digital creator combining design, technology, and marketing to turn ideas into useful and engaging digital experiences.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://cal.com/maheshikabandara/15min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#1e1e1e] text-[#f5f5f5] rounded-full px-8 py-4 font-medium text-[20px] hover:bg-[#303030] transition-colors">
            {"Let's Work Together"} <ArrowUpRight size={22} />
          </a>
          <a href="#work" className="flex items-center justify-center border border-[#1e1e1e] text-[#1e1e1e] rounded-full px-8 py-4 font-medium text-[20px] hover:bg-[#f2f2f2] transition-colors">
            View My Work
          </a>
        </div>

        <p className="text-[#9a9a9a] text-[16px] font-medium tracking-[0.08px]">
          Available for selected projects and opportunities
        </p>
      </div>
    </section>
  );
}

function TheProblem() {
  const problems = [
    {
      icon: <Layers size={32} strokeWidth={1.5} />,
      title: "Too much information",
      desc: "Users struggle to find what they need.",
    },
    {
      icon: <Compass size={32} strokeWidth={1.5} />,
      title: "Unclear journeys",
      desc: "Important actions get buried in complicated flows.",
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: "Design without purpose",
      desc: "Beautiful interfaces don't always solve real problems.",
    },
  ];

  return (
    <section className="bg-white px-[80px] py-[100px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-[116px]">
          <div className="lg:w-[629px] shrink-0">
            <p style={{ color: ACCENT }} className="font-semibold text-[18px] tracking-[0.09px] mb-3">The Problem</p>
            <h2 className="font-bold text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-[#1e1e1e] capitalize">
              Good ideas can get lost in a confusing experience.
            </h2>
          </div>
          <p className="flex-1 text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
            {"A great product isn't only about what it can do. If people don't understand where to go, what to do, or why it matters, even a good idea can become difficult to use."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="border border-[#ddd] rounded-[12px] p-6 flex flex-col gap-16 min-h-[280px] justify-between"
            >
              <div className="border-[1.5px] border-[#5b5b5b] rounded-full w-20 h-20 flex items-center justify-center text-[#5b5b5b] shrink-0">
                {p.icon}
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-[24px] text-[#1e1e1e] tracking-[-0.36px] leading-[1.3]">
                  {p.title}
                </p>
                <p className="text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MyApproach() {
  const steps = [
    {
      icon: <Brain size={32} strokeWidth={1.5} />,
      title: "Understand",
      desc: "Research the users, goals, requirements, and existing experience.",
    },
    {
      icon: <PenLine size={32} strokeWidth={1.5} />,
      title: "Design",
      desc: "Create wireframes and interfaces that make the experience clear.",
    },
    {
      icon: <Code2 size={32} strokeWidth={1.5} />,
      title: "Build",
      desc: "Turn the final experience into a responsive, functional digital product.",
    },
  ];

  return (
    <section className="bg-white px-[80px] py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-[116px] items-start">
        <div className="lg:w-[593px] shrink-0 flex flex-col gap-12 justify-end">
          <div className="flex flex-col gap-3">
            <p style={{ color: ACCENT }} className="font-semibold text-[18px] tracking-[0.09px]">My Approach</p>
            <h2 className="font-bold text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-[#1e1e1e] capitalize">
              I start with the problem, not the pixels.
            </h2>
          </div>
          <p className="text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
            Before designing screens, I try to understand what people need, what the business wants to achieve, and where the experience can be improved.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6 w-full">
          {steps.map((s, i) => (
            <div key={i} className="border border-[#ddd] rounded-[12px] p-6 flex flex-col gap-6">
              <div className="text-[#5b5b5b]">{s.icon}</div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-[24px] text-[#1e1e1e] tracking-[-0.36px] leading-[1.3]">{s.title}</p>
                <p className="text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TheSolution() {
  return (
    <section className="bg-[#303030] px-[80px] py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-[628px] shrink-0 flex flex-col gap-12 justify-end">
          <div className="flex flex-col gap-3">
            <p style={{ color: ACCENT }} className="font-semibold text-[18px] tracking-[0.09px]">The Solution</p>
            <h2 className="font-bold text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-white capitalize">
              Simple experiences, designed with purpose.
            </h2>
          </div>
          <div className="text-[#F2F2F2] text-[18px] font-medium leading-[1.5] tracking-[0.09px] flex flex-col gap-4">
            <p>I combine UX thinking with thoughtful visual design to turn complex ideas into clear, intuitive experiences.</p>
            <p>From the first user journey to the final interface, I focus on structure, clarity, and the details that make an experience feel effortless.</p>
          </div>
          <p style={{ color: ACCENT }} className="font-semibold text-[18px] leading-[1.5] tracking-[0.09px]">
            The result: experiences that look good, feel natural, and solve the right problem.
          </p>
        </div>

        <div className="flex-1 w-full">
          <div className="rounded-[20px] overflow-hidden w-full h-[300px] md:h-[487px]">
            <img
              src={imgFrame230}
              alt="Design work preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="bg-white overflow-hidden px-[80px] py-[100px]">
      <style>{MARQUEE_CSS}</style>

      <div className="max-w-[1280px] mx-auto px-6 md:px-20 mb-12">
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="lg:w-[471px] shrink-0 flex flex-col gap-3">
            <p style={{ color: ACCENT }} className="font-semibold text-[18px] tracking-[0.09px]">Selected Work</p>
            <h2 className="font-bold text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-[#1e1e1e] capitalize">
              Turning ideas into experiences.
            </h2>
          </div>
          <p className="flex-1 text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
            {"A selection of websites and digital experiences where I've worked through problems, explored solutions, and shaped the final experience."}
          </p>
        </div>
      </div>

      {/* Marquee — desktop: full height strip; mobile: scaled so ~1 card visible */}
      <div className="marquee-mobile-wrapper">
        <div className="marquee-track">
          <div className="marquee-copy-wrapper">
            <div className="marquee-copy">
              <Frame220 />
            </div>
          </div>
          <div className="marquee-copy-wrapper">
            <div className="marquee-copy">
              <Frame220 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section id="what-i-do" className="bg-white px-[80px] py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="lg:w-[471px] shrink-0 flex flex-col gap-3">
            <p style={{ color: ACCENT }} className="font-semibold text-[18px] tracking-[0.09px]">What I Do</p>
            <h2 className="font-bold text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-[#1e1e1e] capitalize">
              Turning ideas into experiences.
            </h2>
          </div>
          <p className="flex-1 text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
            {"A selection of websites and digital experiences where I've worked through problems, explored solutions, and shaped the final experience."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#ddd] rounded-[12px] px-6 py-8 flex flex-col gap-16 min-h-[200px] justify-between">
            <p className="font-semibold text-[24px] text-[#1e1e1e] tracking-[-0.36px] leading-[1.3]">UI/UX Design</p>
            <p className="text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
              User flows, wireframes, prototypes, and intuitive digital experiences.
            </p>
          </div>
          <div className="bg-white border border-[#ddd] rounded-[12px] px-6 py-8 flex flex-col gap-16 min-h-[200px] justify-between">
            <p className="font-semibold text-[24px] text-[#1e1e1e] tracking-[-0.36px] leading-[1.3]">Web Design</p>
            <p className="text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
              Responsive websites designed around clear content, strong visual hierarchy, and meaningful user journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="testimonials" className="bg-[#f2f2f2] flex justify-center px-[80px] py-[100px]">
      <div className="bg-white rounded-[20px] px-8 md:px-16 py-12 max-w-3xl w-full flex flex-col gap-6">
        <div className="w-12 h-12 shrink-0 flex items-center justify-center">
          <svg width="39" height="29" viewBox="0 0 39 28.5" fill="none">
            <path
              d="M0 28.5V17.625C0 12.5063 1.3875 8.4375 4.1625 5.4188C6.9375 2.4 10.725 0.5625 15.525 0L17.55 3.675C14.925 4.2375 12.825 5.4 11.25 7.1625C9.675 8.925 8.8125 11.1 8.6625 13.6875H15.525V28.5H0ZM21.45 28.5V17.625C21.45 12.5063 22.8375 8.4375 25.6125 5.4188C28.3875 2.4 32.175 0.5625 36.975 0L39 3.675C36.375 4.2375 34.275 5.4 32.7 7.1625C31.125 8.925 30.2625 11.1 30.1125 13.6875H36.975V28.5H21.45Z"
              fill={ACCENT}
            />
          </svg>
        </div>

        <p className="text-[#5b5b5b] text-[18px] font-medium leading-[1.5] tracking-[0.09px]">
          {"Maheshika has some great skills in "}
          <span style={{ color: ACCENT }}>web design</span>
          {". She built our company's website from the ground up after some simple requirements that we sent to her about our goals for the website. She leveraged her very advanced knowledge of Wordpress to deliver a very good website for us. I strongly recommend Maheshika for any web or graphics work that you may have."}
        </p>

        <div className="flex flex-col gap-1">
          <p className="font-bold text-[18px] text-[#1e1e1e] leading-[1.5] tracking-[0.09px]">Terence Joubert</p>
          <p className="text-[#5b5b5b] text-[16px] font-medium leading-[1.5] tracking-[0.08px]">CEO, Pond Consulting</p>
        </div>
      </div>
    </section>
  );
}

function BehindTheScreens() {
  return (
    <section id="about" className="bg-white px-[80px] py-[100px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#303030] rounded-[20px] flex flex-col lg:flex-row gap-12 items-center px-8 md:px-16 py-12">
          <div className="lg:w-[628px] shrink-0 flex flex-col gap-12 justify-end">
            <div className="flex flex-col gap-3">
              <p style={{ color: ACCENT }} className="font-semibold text-[18px] tracking-[0.09px]">Behind The Screens</p>
              <h2 className="font-bold text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-white capitalize">
                {"I'm Maheshika. I like making digital things make sense."}
              </h2>
            </div>
            <p className="text-[#F2F2F2] text-[18px] leading-[1.5] tracking-[0.09px] text-[#e2e2e2]">
              {"I'm a UI/UX and web designer who enjoys turning ideas, requirements, and problems into clear digital experiences. I care about both sides of design: how something feels and how well it works."}
            </p>
          </div>

          <div className="flex-1 w-full min-w-0">
            <div className="rounded-[20px] overflow-hidden w-full h-[300px] md:h-[487px]">
              <img
                src={imgFrame231}
                alt="Maheshika"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#303030] flex flex-col items-center gap-12 text-center px-[80px] py-[100px]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 w-full">
          <span className="font-bold text-[32px] leading-none">
            <span className="text-[#F2F2F2]">mahe</span>
            <span style={{ color: ACCENT }}>ux.</span>
          </span>

          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-bold text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-white capitalize max-w-2xl">
              Have a problem worth solving?
            </h2>
            <p className="text-[18px] leading-[1.5] tracking-[0.09px] max-w-xl text-[#e2e2e2]">
              {"Whether you're starting with an idea, redesigning an existing product, or building a new website, I'd love to hear what you're working on."}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a href="https://cal.com/maheshikabandara/15min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#fdfdfd] text-[#1e1e1e] rounded-full px-8 py-4 font-medium text-[20px] hover:bg-white transition-colors">
              {"Let's Work Together"} <ArrowUpRight size={22} />
            </a>

            <div className="flex gap-6">
              <a href="https://wa.me/94707170906" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle size={24} strokeWidth={1.5} />
              </a>
              <a href="https://dribbble.com/maheshikabandara" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] hover:text-white transition-colors" aria-label="Dribbble">
                <Globe size={24} strokeWidth={1.5} />
              </a>
              <a href="mailto:hello@maheux.me" className="text-[#F2F2F2] hover:text-white transition-colors" aria-label="Email">
                <AtSign size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[#F2F2F2] text-[16px] font-medium tracking-[0.08px]">
        <span>Based in Sri Lanka</span>
        {time && <span>Local Time &nbsp; {time}</span>}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <TheProblem />
      <MyApproach />
      <TheSolution />
      <SelectedWork />
      <WhatIDo />
      <Reviews />
      <BehindTheScreens />
      <FooterCTA />
    </div>
  );
}
