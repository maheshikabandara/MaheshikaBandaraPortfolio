import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";

// Original Contact & Hero Imports
import svgPaths from "../../imports/ContactFooter/svg-f4p2vld91i";
import imgHero from "../../imports/Portfolio-1/9b06e550a03f9722c147c637abe54e4634f08454.png";
import imgFrame192 from "../../imports/Portfolio-1/a1889c3ea7bf7237fd5d6a613633cd9a624d7694.png";

// Hero images for the project cards
import imgZapnoteHero from "../../imports/Zapnote-Hero.png";
import imgFitnityHero from "../../imports/Fitnity-Hero.png";
import imgEleanorHero from "../../imports/Eleanor-Vance-Weddings-Hero.png";
import imgElevateHero from "../../imports/Elevate-Support-Group-Hero.png";
import imgSundayHero from "../../imports/Sunday-Companions-Hero.png";

// Full homepage images displayed when a project is clicked
import imgZapnoteHome from "../../imports/Zapnote-Home.png";
import imgFitnityHome from "../../imports/Fitnity-Home.png";
import imgEleanorHome from "../../imports/Eleanor-Vance-Weddings.png";
import imgElevateHome from "../../imports/Elevate-Support-Group.png";
import imgSundayHome from "../../imports/Sunday-Companions.png";

// --- Reusable Animated Wrapper ---
function AnimatedSection({ children, delay = 0, id }: { children: React.ReactNode; delay?: number; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.05 });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="w-full relative"
    >
      {children}
    </motion.div>
  );
}

// --- Smooth Scrolling & URL Hash Update ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, '', `#${id}`);
  }
};

// --- Back To Top Button ---
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-[30px] right-[20px] md:bottom-[40px] md:right-[40px] z-[100] bg-[#000000] text-[#fdfdfd] p-[12px] md:p-[16px] rounded-full shadow-[0_8px_24px_rgba(255, 255, 255, 0.8)] cursor-pointer hover:bg-[#1296cc] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center"
        >
          <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </motion.div>
      )}
    </>
  );
}

// --- Navigation Bar ---
function Nav({ onNavClick, isDarkText = false }: { onNavClick: (id: string) => void, isDarkText?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  const textColorClass = isDarkText ? "text-[#1e1e1e]" : "text-[#fdfdfd]";
  const bgColorClass = isDarkText ? "bg-[#f5f5f5]" : "bg-[rgba(253,253,253,0.1)]";

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${bgColorClass} backdrop-blur-md flex flex-col justify-center px-[24px] py-[12px] md:px-[24px] md:py-[10px] relative rounded-[20px] w-full max-w-[1440px] mx-auto z-50 overflow-hidden`}
    >
      <div className="flex items-center justify-between w-full">
        <p className={`font-['Albert_Sans',sans-serif] font-bold ${textColorClass} text-[24px] whitespace-nowrap`}>
          maheux.
        </p>

        <div className={`hidden md:flex font-['Albert_Sans',sans-serif] font-medium gap-[19px] items-center ${textColorClass} text-[16px]`}>
          <p onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#1296cc] transition-colors">About me</p>
          <p onClick={() => handleScroll("works")} className="cursor-pointer hover:text-[#1296cc] transition-colors">My Works</p>
          <p onClick={() => handleScroll("pricing")} className="cursor-pointer hover:text-[#1296cc] transition-colors">Pricing</p>
          <p onClick={() => handleScroll("process")} className="cursor-pointer hover:text-[#1296cc] transition-colors">My Process</p>
        </div>

        <div
          onClick={() => window.open("https://cal.com/maheshikabandara/15min", "_blank")}
          className="hidden md:flex bg-[#1296cc] px-[24px] py-[10px] rounded-[50px] cursor-pointer hover:bg-[#0d7aa8] transition-colors items-center justify-center"
        >
          <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] text-[14px] whitespace-nowrap">Book a Call</p>
        </div>

        <div className={`md:hidden flex items-center justify-center cursor-pointer ${textColorClass}`} onClick={toggleMenu}>
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className={`md:hidden flex flex-col items-center gap-[16px] w-full pt-[24px] pb-[10px] font-['Albert_Sans',sans-serif] ${textColorClass}`}
        >
          <p onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">About me</p>
          <p onClick={() => handleScroll("works")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">My Works</p>
          <p onClick={() => handleScroll("pricing")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">Pricing</p>
          <p onClick={() => handleScroll("process")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">My Process</p>
          <div onClick={() => window.open("https://cal.com/maheshikabandara/15min", "_blank")} className="bg-[#1296cc] px-[32px] py-[12px] rounded-[50px] cursor-pointer hover:bg-[#0d7aa8] mt-[10px] w-full text-center">
            <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] text-[18px]">Book a Call</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// --- Hero Sections ---
function Frame23() {
  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative rounded-[100px] shrink-0 size-[90px] md:size-[70px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <img alt="" className="absolute h-[127.57%] left-[-8.14%] max-w-none top-[-13.79%] w-[116.28%]" src={imgFrame192} />
      </div>
    </motion.div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 flex-wrap justify-center md:gap-[16px]">
      <div onClick={() => window.open("https://cal.com/maheshikabandara/15min", "_blank")} className="bg-[#1296cc] content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[16px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0d7aa8] transition-colors md:px-[24px] md:py-[12px]">
        <p className="font-['Albert_Sans',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap md:text-[18px] md:leading-[24px]">Book a Call</p>
      </div>
      <div onClick={() => scrollToSection("works")} className="content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[16px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors md:px-[24px] md:py-[12px]">
        <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Albert_Sans',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap md:text-[18px] md:leading-[24px]">See My Work</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full md:gap-[16px]">
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="font-['Albert_Sans',sans-serif] font-semibold text-[#1e1e1e] text-center" style={{ fontSize: 'clamp(14px, 1vw, 16px)', letterSpacing: '0.1em' }}>HI, I'M MAHESHIKA BANDARA</motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="font-['Instrument_Serif',serif] leading-[1.1] not-italic relative text-[#1e1e1e] text-center tracking-[-1px] w-full" style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}>High-conversion websites</motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="font-['Instrument_Serif',serif] leading-[1.1] not-italic relative text-[#1e1e1e] text-center tracking-[-1px] w-full" style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}>for businesses</motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="font-['Albert_Sans',sans-serif] font-normal leading-[1.6] relative text-[#404040] text-center max-w-[500px]" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Whether you don't have a website yet or your current one needs a modern refresh, I help you get online fast, look trustworthy, and attract more customers.</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="mt-8">
        <Frame />
      </motion.div>
    </div>
  );
}

function Hero({ onNavClick }: { onNavClick: (id: string) => void }) {
  return (
    <div className="min-h-[100dvh] relative shrink-0 w-full flex flex-col overflow-hidden" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white via-[49.04%] via-[rgba(255,255,255,0.75)]" />
      </div>
      <div className="w-full flex justify-center pt-[32px] px-[20px] md:px-[60px] lg:px-[120px] relative z-20">
        <Nav onNavClick={onNavClick} />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-[20px] md:px-[60px] lg:px-[120px] pb-[80px] mt-[40px]">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full max-w-[1440px] mx-auto">
          <Frame23 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

// --- About Me Section ---
function AboutMe() {
  return (
    <AnimatedSection id="about">
      <div className="bg-[#fdfdfd] min-h-screen flex flex-col items-center justify-center relative shrink-0 w-full py-[100px] px-[20px] md:px-[60px] lg:px-[120px]" data-name="About me">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-[32px] md:gap-[48px] text-center">
          <h2 className="font-['Instrument_Serif',serif] text-[#1e1e1e] leading-[1.1] tracking-[-0.02em]" style={{ fontSize: 'clamp(40px, 5vw, 80px)' }}>Meet Maheshika</h2>
          <p className="font-['Albert_Sans',sans-serif] font-bold text-[#1e1e1e] uppercase tracking-[0.2em] opacity-80" style={{ fontSize: 'clamp(12px, 1vw, 14px)' }}>UI/UX Designer • Framer Developer</p>
          <p className="font-['Albert_Sans',sans-serif] text-[#6d6d6d] leading-[1.6] w-full max-w-[800px]" style={{ fontSize: 'clamp(16px, 1.2vw, 20px)' }}>I'm Maheshika, a UI/UX designer and Framer developer specializing in clean, high-conversion websites that captivate users. With a First Class Honours BSc in Information Technology and expertise in modern web design, I create seamless, animated experiences tailored to your brand. Let's transform your digital presence with unique, lightning-fast designs.</p>
          <div className="flex flex-col items-center gap-[24px] mt-[24px]">
            <p className="font-['Albert_Sans',sans-serif] font-bold text-[#1e1e1e] uppercase tracking-[0.15em]" style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>Kandy, Sri Lanka</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// --- Project Card & Works Section ---
function ProjectCardWork({ title, imageSrc, isFullWidth = false, onClick }: { title: string, imageSrc: string, isFullWidth?: boolean, onClick: () => void }) {
  return (
    <div onClick={onClick} className={`group bg-white rounded-[24px] p-[16px] md:p-[24px] lg:p-[32px] flex flex-col gap-[20px] md:gap-[32px] cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 ${isFullWidth ? 'lg:col-span-2' : 'col-span-1'}`}>
      <div className="w-full rounded-[16px] overflow-hidden bg-[#f5f5f5] flex items-center justify-center">
        <img src={imageSrc} alt={title} className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="font-['Instrument_Serif',serif] text-[#1e1e1e] leading-none" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}>{title}</p>
        <svg className="text-[#1e1e1e] group-hover:text-[#1296cc] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 'clamp(24px, 3vw, 48px)', height: 'clamp(24px, 3vw, 48px)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </div>
  );
}

function MyWorks({ onProjectClick }: { onProjectClick: (data: any) => void }) {
  return (
    <AnimatedSection delay={0.1} id="works">
      <div className="bg-[#f8fdff] min-h-screen flex flex-col justify-center relative shrink-0 w-full py-[100px] px-[20px] md:px-[60px] lg:px-[120px]" data-name="My Works">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-[60px] md:gap-[80px]">
          <p className="font-['Instrument_Serif',serif] leading-[1.1] text-center tracking-[-0.28px] w-full" style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}>
            <span className="text-[#1e1e1e]">Curated Works That Reflect</span><br/>
            <span className="text-[#6d6d6d]">Design Precision and Excellence</span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[40px] w-full">
            <ProjectCardWork title="Zapnote" imageSrc={imgZapnoteHero} onClick={() => onProjectClick({ title: "Zapnote", category: "SaaS Landing Page", description: "A sleek landing page for an AI-powered meeting summarizer.", fullImg: imgZapnoteHome })} />
            <ProjectCardWork title="Fitnity" imageSrc={imgFitnityHero} onClick={() => onProjectClick({ title: "Fitnity", category: "Mobile App Landing Page", description: "A modern, vibrant website designed for a fitness tracking app.", fullImg: imgFitnityHome })} />
            <ProjectCardWork title="Eleanor Vance Weddings" imageSrc={imgEleanorHero} isFullWidth={true} onClick={() => onProjectClick({ title: "Eleanor Vance Weddings", category: "Wedding Planner Website", description: "An elegant and visually rich website for a boutique wedding planning.", fullImg: imgEleanorHome })} />
            <ProjectCardWork title="Elevate Support Group" imageSrc={imgElevateHero} onClick={() => onProjectClick({ title: "Elevate Support Group", category: "Corporate Business Website", description: "A professional corporate website for a B2B staffing agency.", fullImg: imgElevateHome })} />
            <ProjectCardWork title="Sunday Companions" imageSrc={imgSundayHero} onClick={() => onProjectClick({ title: "Sunday Companions", category: "Elder Care Service Website", description: "A warm and accessible website for elder care services.", fullImg: imgSundayHome })} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// --- Pricing Section ---
function PricingSection() {
  const plans = [
    { name: "Foundation", price: "From $1,250", desc: "Fast, conversion-optimized website for service businesses ready to establish a real online presence." },
    { name: "Growth", price: "From $2,800", desc: "Website + SEO + CRM wired together for businesses ready to grow their inbound pipeline." },
    { name: "Authority", price: "From $5,500", desc: "Full-stack growth system — custom build, SEO, social, and CRM automation running in sync." }
  ];

  return (
    <AnimatedSection delay={0.1} id="pricing">
      <div className="bg-[#fdfdfd] py-[100px] px-[20px] md:px-[60px] max-w-[1000px] mx-auto">
        <h2 className="font-['Instrument_Serif',serif] text-[40px] text-center mb-[60px]">Pricing Packages</h2>
        <div className="flex flex-col gap-[20px]">
          {plans.map((plan, idx) => (
            <div key={idx} className="border-b border-[#e5e5e5] py-[32px] flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] group">
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Instrument_Serif',serif] text-[28px]">{plan.name}</p>
                <p className="font-['Albert_Sans',sans-serif] text-[#6d6d6d] max-w-[500px]">{plan.desc}</p>
              </div>
              <div className="flex items-center gap-[24px]">
                <p className="font-['Albert_Sans',sans-serif] font-bold text-[18px]">{plan.price}</p>
                <button 
                  onClick={() => window.open("https://cal.com/maheshikabandara/15min", "_blank")}
                  className="px-[24px] py-[12px] border border-[#1e1e1e] rounded-full hover:bg-[#1e1e1e] hover:text-white transition-all"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// --- Process Section ---
interface ProcessCardProps {
  index: number;
  title: string;
  description: string;
  totalCards: number;
}

function ProcessCard({ index, title, description, totalCards }: ProcessCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const rangeStart = index / totalCards;
  const rangeEnd = (index + 1) / totalCards;
  const cardProgress = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]);
  const scale = useTransform(cardProgress, [0, 0.5, 1], [0.9 - (totalCards - index - 1) * 0.05, 0.95, 1]);
  const y = useTransform(cardProgress, [0, 1], [(totalCards - index - 1) * 30, 0]);
  const opacity = useTransform(cardProgress, [0, 0.3, 1], [0.7, 0.85, 1]);
  const num = (index + 1).toString().padStart(2, '0');

  return (
    <div ref={containerRef} className="h-[260px] md:h-[220px] sm:h-[180px]">
      <motion.div style={{ scale, y, opacity }} className="sticky top-[150px] md:top-[120px]">
        <div className="relative rounded-[24px] shrink-0 w-full bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.08)] border border-[#f2f2f2] p-[32px] md:px-[40px]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-[20px] md:gap-[32px]">
            <p className="font-['Instrument_Serif',serif] text-[#1296cc] text-[40px] md:text-[56px] leading-none">{num}</p>
            <div className="flex flex-col gap-[12px]">
              <p className="font-['Albert_Sans',sans-serif] font-bold text-[#1e1e1e] text-[24px]">{title}</p>
              <p className="font-['Albert_Sans',sans-serif] text-[#6d6d6d] text-[18px]">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start center", "end center"] });
  const processSteps = [
    { title: "Book a Discovery Call", description: "Schedule a 15-minute call to discuss your goals." },
    { title: "You Share Your Content", description: "Send me your logo, text, and photos." },
    { title: "I Design and Develop", description: "I build your clean, modern website on Framer." },
    { title: "Launch & Handover", description: "We finalize revisions, launch, and you get the keys." }
  ];

  return (
    <AnimatedSection delay={0.1} id="process">
      <div className="bg-white py-[100px] px-[20px] md:px-[60px] max-w-[1440px] mx-auto">
        <h2 className="font-['Instrument_Serif',serif] text-[40px] md:text-[64px] text-center mb-[80px]">My Process</h2>
        <div ref={sectionRef} className="relative w-full">
          {processSteps.map((step, index) => (
            <ProcessCard key={index} index={index} title={step.title} description={step.description} totalCards={processSteps.length} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// --- Contact & Footer Section ---
function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => setTime(formatInTimeZone(new Date(), "Asia/Colombo", "h:mm:ss aa"));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-['Instrument_Serif',serif] text-[20px] text-[#fdfdfd]">
      <p>Based in Sri Lanka | Local Time {time}</p>
    </div>
  );
}

function ContactFooter() {
  return (
    <AnimatedSection delay={0.1} id="contact">
      <div className="bg-[#1e1e1e] min-h-[60vh] flex flex-col p-[60px] md:p-[120px]">
        <div className="flex-1 flex flex-col justify-between w-full max-w-[1440px] mx-auto">
          <div className="font-['Instrument_Serif',serif] text-[40px] md:text-[80px] text-[#fdfdfd]">
            <p>Ready to build?</p>
            <a href="https://cal.com/maheshikabandara/15min" className="text-[#1296cc] hover:underline">Let's talk.</a>
          </div>
          <div className="mt-[60px] flex flex-col md:flex-row justify-between gap-[40px]">
            <div className="flex flex-col gap-[16px]">
              <a href="mailto:hello@maheux.me" className="text-[#fdfdfd] hover:text-[#1296cc]">Email</a>
              <a href="https://wa.me/94707170906" className="text-[#fdfdfd] hover:text-[#1296cc]">WhatsApp</a>
            </div>
            <LiveTime />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// --- Project Details Subpage ---
function ProjectDetailsPage({ project, onBack }: { project: any, onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, [project]);
  return (
    <div className="w-full bg-[#fdfdfd] py-[100px] px-[20px] md:px-[120px]">
      <button onClick={onBack} className="mb-[40px] text-[#6d6d6d] hover:text-[#1296cc]">← Back to Home</button>
      <h1 className="text-[64px] font-['Instrument_Serif',serif]">{project.title}</h1>
      <p className="text-[20px] text-[#6d6d6d] mt-[20px]">{project.description}</p>
      <img src={project.fullImg} alt={project.title} className="mt-[60px] w-full rounded-[24px]" />
    </div>
  );
}

// --- Main App Wrapper ---
export default function AnimatedPortfolio() {
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => { scrollToSection(id); }, 500);
    }
  }, []);

  const handleProjectClick = (projectData: any) => {
    setActiveProject(projectData);
    setCurrentView('project');
  };

  const handleNavClick = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => { scrollToSection(id); }, 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="w-full bg-white relative flex flex-col">
      {currentView === 'home' ? (
        <>
          <Hero onNavClick={handleNavClick} />
          <AboutMe />
          <MyWorks onProjectClick={handleProjectClick} />
          <PricingSection />
          <ProcessSection />
        </>
      ) : (
        <ProjectDetailsPage project={activeProject} onBack={() => setCurrentView('home')} />
      )}
      <ContactFooter />
      <BackToTopButton />
    </div>
  );
}
