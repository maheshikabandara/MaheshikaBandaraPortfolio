import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";

// Original Contact & Hero Imports
import svgPaths from "../../imports/ContactFooter/svg-f4p2vld91i";
import imgHero from "../../imports/Portfolio-1/9b06e550a03f9722c147c637abe54e4634f08454.png";
import imgFrame192 from "../../imports/Portfolio-1/a1889c3ea7bf7237fd5d6a613633cd9a624d7694.png";

// Cards wala thiyena Hero Images
import imgZapnoteHero from "../../imports/Zapnote-Hero.png";
import imgFitnityHero from "../../imports/Fitnity-Hero.png";
import imgEleanorHero from "../../imports/Eleanor-Vance-Weddings-Hero.png";
import imgElevateHero from "../../imports/Elevate-Support-Group-Hero.png";
import imgSundayHero from "../../imports/Sunday-Companions-Hero.png";

// Project eka click kalama penna oni Full Home Images
import imgZapnoteHome from "../../imports/Zapnote-Home.png";
import imgFitnityHome from "../../imports/Fitnity-Home.png";
import imgEleanorHome from "../../imports/Eleanor-Vance-Weddings.png";
import imgElevateHome from "../../imports/Elevate-Support-Group.png";
import imgSundayHome from "../../imports/Sunday-Companions.png";
 
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

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
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
  };

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-[30px] right-[20px] md:bottom-[40px] md:right-[40px] z-[100] bg-[#000000] text-[#fdfdfd] p-[12px] md:p-[16px] rounded-full shadow-[0_8px_24px_rgba(18,150,204,0.4)] cursor-pointer hover:bg-[#0d7aa8] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center"
        >
          <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </motion.div>
      )}
    </>
  );
}

// --- Nav ---
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
      className={`${bgColorClass} backdrop-blur-md flex flex-col justify-center px-[24px] py-[12px] md:px-[24px] md:py-[10px] relative rounded-[20px] w-full max-w-[1062px] z-50 overflow-hidden`}
    >
      <div className="flex items-center justify-between w-full">
        <p className={`font-['Albert_Sans',sans-serif] font-bold ${textColorClass} text-[24px] whitespace-nowrap`}>
          maheux.
        </p>

        <div className={`hidden md:flex font-['Albert_Sans',sans-serif] font-medium gap-[19px] items-center ${textColorClass} text-[16px]`}>
          <p onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#1296cc] transition-colors">About me</p>
          <p onClick={() => handleScroll("pricing")} className="cursor-pointer hover:text-[#1296cc] transition-colors">Pricing</p>
          <p onClick={() => handleScroll("works")} className="cursor-pointer hover:text-[#1296cc] transition-colors">My Works</p>
          <p onClick={() => handleScroll("process")} className="cursor-pointer hover:text-[#1296cc] transition-colors">My Process</p>
        </div>

        <div
          onClick={() => handleScroll("contact")}
          className="hidden md:flex bg-[#1296cc] px-[24px] py-[10px] rounded-[50px] cursor-pointer hover:bg-[#0d7aa8] transition-colors items-center justify-center"
        >
          <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] text-[14px] whitespace-nowrap">Contact me</p>
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
          <p onClick={() => handleScroll("pricing")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">Pricing</p>
          <p onClick={() => handleScroll("works")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">My Works</p>
          <p onClick={() => handleScroll("process")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">My Process</p>
          <div onClick={() => handleScroll("contact")} className="bg-[#1296cc] px-[32px] py-[12px] rounded-[50px] cursor-pointer hover:bg-[#0d7aa8] mt-[10px] w-full text-center">
            <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] text-[18px]">Contact me</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Hero Sections
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
      <div onClick={() => scrollToSection("contact")} className="bg-[#1296cc] content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[16px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0d7aa8] transition-colors md:px-[24px] md:py-[12px]">
        <p className="font-['Albert_Sans',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap md:text-[18px] md:leading-[24px]">Contact me</p>
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
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="font-['Albert_Sans',sans-serif] font-semibold leading-[1.5] relative text-[#1e1e1e] text-center tracking-[-0.12px]" style={{ fontSize: 'clamp(16px, 1.5vw, 28px)' }}>Hi, I'm Maheshika Bandara!</motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="font-['Instrument_Serif',serif] leading-[1.1] not-italic relative text-[#1e1e1e] text-center tracking-[-1.8px] w-full" style={{ fontSize: 'clamp(40px, 7vw, 130px)' }}>High-conversion websites</motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="font-['Instrument_Serif',serif] leading-[1.1] not-italic relative text-[#1e1e1e] text-center tracking-[-1.8px] w-full" style={{ fontSize: 'clamp(40px, 7vw, 130px)' }}>for businesses</motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="font-['Albert_Sans',sans-serif] font-normal leading-[1.5] relative text-[#404040] text-center tracking-[-0.1px] w-full lg:w-[60%]" style={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}>Whether you don't have a website yet or your current one needs a modern refresh, I help you get online fast, look trustworthy, and attract more customers.</motion.p>
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
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
          <Frame23 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

// About Me
function AboutMe() {
  return (
    <AnimatedSection id="about">
      <div className="bg-[#fdfdfd] min-h-screen flex flex-col items-center justify-center relative shrink-0 w-full py-[100px] px-[20px] md:px-[60px] lg:px-[120px]" data-name="About me">

        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-[32px] md:gap-[48px] text-center">

          {/* Title */}
          <h2
            className="font-['Instrument_Serif',serif] text-[#1e1e1e] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
          >
            Meet Maheshika
          </h2>

          {/* Subtitle */}
          <p 
            className="font-['Albert_Sans',sans-serif] font-bold text-[#1e1e1e] uppercase tracking-[0.2em] opacity-80"
            style={{ fontSize: 'clamp(12px, 1.5vw, 18px)' }}
          >
            UI/UX Designer • Web Designer • Wix Studio Developer
          </p>

          {/* Description - Width limit eka ain karala w-full damma */}
          <p
            className="font-['Albert_Sans',sans-serif] text-[#6d6d6d] leading-[1.5] w-full"
            style={{ fontSize: 'clamp(18px, 2vw, 32px)' }}
          >
            I'm Maheshika, a UI/UX designer and web developer specializing in clean, high-conversion websites that captivate users. With a First Class Honours BSc in Information Technology and expertise in UI/UX Design and Web Development, I create seamless experiences tailored to your brand. Let's transform your digital presence with unique, attention-grabbing designs.
          </p>

          {/* Location & Social Icons Container */}
          <div className="flex flex-col items-center gap-[24px] mt-[24px]">
            
            {/* Location */}
            <p 
              className="font-['Albert_Sans',sans-serif] font-bold text-[#1e1e1e] uppercase tracking-[0.15em]"
              style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
            >
              Kandy, Sri Lanka
            </p>

            {/* Icons */}
            <div className="flex items-center justify-center gap-[24px] md:gap-[32px]">
              
              {/* Email Icon */}
              <a href="mailto:mbmaheshika@gmail.com" className="text-[#1e1e1e] hover:text-[#1296cc] hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[clamp(28px,3vw,40px)] h-[clamp(28px,3vw,40px)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a href="https://wa.me/94707170906" target="_blank" rel="noopener noreferrer" className="text-[#1e1e1e] hover:text-[#1296cc] hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[clamp(28px,3vw,40px)] h-[clamp(28px,3vw,40px)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>

              {/* Dribbble Icon */}
              <a href="https://dribbble.com/maheshikabandara" target="_blank" rel="noopener noreferrer" className="text-[#1e1e1e] hover:text-[#1296cc] hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[clamp(28px,3vw,40px)] h-[clamp(28px,3vw,40px)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
// --- Project Card & Works Section ---
function ProjectCardWork({ title, imageSrc, isFullWidth = false, onClick }: { title: string, imageSrc: string, isFullWidth?: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick} 
      className={`group bg-white rounded-[24px] p-[16px] md:p-[24px] lg:p-[32px] flex flex-col gap-[20px] md:gap-[32px] cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 ${isFullWidth ? 'lg:col-span-2' : 'col-span-1'}`}
    >
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
        <div className="w-full flex flex-col items-center gap-[60px] md:gap-[80px]">
          <p className="font-['Instrument_Serif',serif] leading-[1.1] text-center tracking-[-0.28px] w-full" style={{ fontSize: 'clamp(40px, 5vw, 80px)' }}>
            <span className="text-[#1e1e1e]">Curated Works That Reflect</span><br/>
            <span className="text-[#6d6d6d]">Design Precision and Excellence</span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[40px] w-full">
            <ProjectCardWork title="Zapnote" imageSrc={imgZapnoteHero} onClick={() => onProjectClick({ title: "Zapnote", category: "SaaS Landing Page", description: "A sleek landing page for an AI-powered meeting summarizer. It highlights core features, integrations, and flexible pricing plans to drive user sign-ups.", fullImg: imgZapnoteHome })} />
            <ProjectCardWork title="Fitnity" imageSrc={imgFitnityHero} onClick={() => onProjectClick({ title: "Fitnity", category: "Mobile App Landing Page", description: "A modern, vibrant website designed for a fitness tracking app. It showcases key app functionalities, user testimonials, and clear subscription tiers.", fullImg: imgFitnityHome })} />
            <ProjectCardWork title="Eleanor Vance Weddings" imageSrc={imgEleanorHero} isFullWidth={true} onClick={() => onProjectClick({ title: "Eleanor Vance Weddings", category: "Wedding Planner Website", description: "An elegant and visually rich website for a boutique wedding planning and event design business. It emphasizes high-end photography, sophisticated typography, and a seamless inquiry process for luxury clientele.", fullImg: imgEleanorHome })} />
            <ProjectCardWork title="Elevate Support Group" imageSrc={imgElevateHero} onClick={() => onProjectClick({ title: "Elevate Support Group", category: "Corporate Business Website", description: "A professional corporate website for a B2B staffing and call center agency. The design focuses on trust, security compliance, and detailing their specialized remote support services for U.S. businesses.", fullImg: imgElevateHome })} />
            <ProjectCardWork title="Sunday Companions" imageSrc={imgSundayHero} onClick={() => onProjectClick({ title: "Sunday Companions", category: "Elder Care Service Website", description: "A warm and accessible website for a service providing regular phone check-ins and companionship for elderly individuals. It prioritizes a user-friendly layout, clear safety protocols, and an empathetic tone.", fullImg: imgSundayHome })} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// --- NEW PRICING SECTION ---
function PricingCard({ title, price, features }: { title: string, price: string, features: string[] }) {
  return (
    <div className="bg-white flex-1 flex flex-col h-full relative rounded-[20px] w-full hover:scale-[1.02] transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#f2f2f2]">
      <div className="flex-1 flex flex-col items-start px-[24px] py-[32px] md:px-[40px] md:py-[48px] w-full h-full gap-[32px]">
        
        {/* Title & Price */}
        <div className="flex flex-col gap-[16px] w-full">
          <p className="font-['Instrument_Serif',serif] text-[#1296cc] leading-none" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>{title}</p>
          <p className="font-['Albert_Sans',sans-serif] font-bold text-[#1e1e1e]" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>{price}</p>
        </div>

        {/* Line Divider */}
        <div className="w-full h-[1px] bg-[#f2f2f2]" />

        {/* Features List */}
        <div className="flex flex-col gap-[20px] w-full flex-1">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-[16px] items-start w-full">
              {/* Rounded Tick Icon */}
              <div className="bg-[#e7f5fb] rounded-full shrink-0 flex items-center justify-center size-[24px] mt-[2px]">
                <svg className="size-[12px]" fill="none" viewBox="0 0 14 10">
                  <path d="M1 5L4.5 8.5L13 1" stroke="#1296CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
              <p className="font-['Albert_Sans',sans-serif] text-[#404040] leading-[1.6]" style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}>
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div onClick={() => scrollToSection("contact")} className="bg-[#1296cc] rounded-[100px] w-full cursor-pointer hover:bg-[#0d7aa8] transition-colors mt-[20px] py-[16px] flex justify-center items-center">
          <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] whitespace-nowrap" style={{ fontSize: 'clamp(16px, 1.2vw, 22px)' }}>Choose Plan</p>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  const plans = [
    {
      title: "New Website Creation",
      price: "Starting from USD 500",
      features: [
        "One complete project is enough to build your brand new website from scratch.",
        "Perfect if you don’t have a site yet.",
        "The entire project is designed and developed personally by me.",
        "You get a clean, modern, mobile-friendly website with basic SEO.",
        "You receive full handover so you can easily edit the site yourself anytime."
      ]
    },
    {
      title: "Website Refresh / Rebuild",
      price: "Starting from USD 450",
      features: [
        "One complete project is enough to modernize your existing website.",
        "Perfect if your current site looks dated or doesn’t convert well.",
        "The entire project is designed and developed personally by me.",
        "I will rebuild and polish your site on Wix Studio with faster loading, better mobile experience, updated design, and stronger calls-to-action.",
        "You receive full handover so you can easily edit the site yourself anytime."
      ]
    },
    {
      title: "Website Maintenance",
      price: "USD 100 / month",
      features: [
        "Keep your website fast, secure, and up-to-date every month.",
        "The work is done personally by me.",
        "You get regular updates, backups, minor content edits, security checks, and priority support via WhatsApp or email."
      ]
    }
  ];

  return (
    <AnimatedSection delay={0.1} id="pricing">
      <div className="min-h-screen flex flex-col items-center justify-center relative w-full py-[100px] px-[20px] md:px-[60px] lg:px-[120px]" data-name="Pricing">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bg-[#fdfdfd] inset-0" />
          <img alt="" className="absolute max-w-none object-cover w-full h-full" src={imgHero} />
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-[46.487%] to-white" />
        </div>
        <div className="flex flex-col gap-[60px] items-center relative w-full z-10">
          <p className="font-['Instrument_Serif',serif] leading-[1.2] not-italic relative text-[#1e1e1e] text-center tracking-[-0.28px] w-full lg:w-[70%]" style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}>
            Pricing Packages Designed to Deliver Clean Modern Digital Experiences
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] xl:gap-[40px] items-stretch relative w-full">
            {plans.map((plan, idx) => (
              <PricingCard 
                key={idx}
                title={plan.title} 
                price={plan.price} 
                features={plan.features} 
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// --- UPDATED PROCESS SECTION (WITH DASHED LINE & STACKING CARDS) ---
interface ProcessCardProps {
  index: number;
  title: string;
  description: string;
  totalCards: number;
}

function ProcessCard({ index, title, description, totalCards }: ProcessCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const rangeStart = index / totalCards;
  const rangeEnd = (index + 1) / totalCards;

  const cardProgress = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]);
  const scale = useTransform(cardProgress, [0, 0.5, 1], [0.9 - (totalCards - index - 1) * 0.05, 0.95, 1]);
  const y = useTransform(cardProgress, [0, 1], [(totalCards - index - 1) * 30, 0]);
  const rotateX = useTransform(cardProgress, [0, 1], [2, 0]);
  const opacity = useTransform(cardProgress, [0, 0.3, 1], [0.7, 0.85, 1]);

  const num = (index + 1).toString().padStart(2, '0');

  return (
    <div ref={containerRef} className="h-[260px] md:h-[220px] sm:h-[180px]">
      <motion.div
        style={{ scale, y, rotateX, opacity }}
        className="sticky top-[150px] md:top-[120px]"
      >
        <div className="relative rounded-[24px] shrink-0 w-full bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.08)] border border-[#f2f2f2] hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)] transition-shadow">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center px-[24px] py-[32px] md:px-[40px] md:py-[40px] gap-[20px] md:gap-[32px]">
            <div className="flex items-center justify-center shrink-0">
              <p className="font-['Instrument_Serif',serif] text-[#1296cc] text-[40px] md:text-[56px] leading-none">
                {num}
              </p>
            </div>
            <div className="flex flex-col gap-[12px] items-start flex-1">
              <p className="font-['Albert_Sans',sans-serif] font-bold text-[#1e1e1e] text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.02em]">
                {title}
              </p>
              <p className="font-['Albert_Sans',sans-serif] text-[#6d6d6d] text-[16px] md:text-[20px] leading-[1.6]">
                {description}
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const processSteps = [
    { title: "You Contact me", description: "Reach out through WhatsApp or email. I reply quickly and we get started." },
    { title: "You Share Your Content", description: "Send me your logo, text, photos, and any other details you want on the site." },
    { title: "I Design and Develop", description: "I create the full design and build your clean, modern website on Wix Studio." },
    { title: "Revisions, Launch & Handover", description: "We make any revisions together, then I launch the site and hand everything over to you." }
  ];

  return (
    <AnimatedSection delay={0.1} id="process">
      <div className="bg-white relative w-full py-[100px] md:py-[140px] overflow-hidden" data-name="Process">
        <div className="flex flex-col gap-[60px] md:gap-[80px] items-center relative w-full px-[20px] md:px-[60px] lg:px-[120px]">
          
          <div className="flex flex-col items-center relative w-full">
            <p className="font-['Instrument_Serif',serif] leading-[1.1] text-[#1e1e1e] text-center tracking-[-0.02em] w-full" style={{ fontSize: 'clamp(40px, 5vw, 80px)' }}>
              Process Built for Clarity,<br />
              <span className="text-[#6d6d6d]">Speed and Smooth Delivery</span>
            </p>
          </div>

          <div ref={sectionRef} className="relative w-full max-w-[800px] mx-auto">
            <div className="absolute left-[8px] md:left-[20px] top-[40px] bottom-[40px] w-[3px] z-10 hidden sm:block">
              <div 
                className="absolute inset-0 w-full h-full" 
                style={{ backgroundImage: 'linear-gradient(to bottom, #e5e5e5 50%, transparent 50%)', backgroundSize: '3px 16px' }} 
              />
              <motion.div 
                className="absolute top-0 left-0 w-full"
                style={{ 
                  height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                  backgroundImage: 'linear-gradient(to bottom, #1296cc 50%, transparent 50%)', 
                  backgroundSize: '3px 16px'
                }}
              />
            </div>

            <div className="w-full pl-[0px] sm:pl-[40px] md:pl-[60px] flex flex-col">
              {processSteps.map((step, index) => (
                <ProcessCard
                  key={index}
                  index={index}
                  title={step.title}
                  description={step.description}
                  totalCards={processSteps.length}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}

// Contact Footer
function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => setTime(formatInTimeZone(new Date(), "Asia/Colombo", "h:mm:ss aa"));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row font-['Instrument_Serif',serif] gap-[8px] sm:gap-[20px] items-start sm:items-center leading-[1.2] text-[#fdfdfd]" style={{ fontSize: 'clamp(16px, 1.5vw, 28px)' }}>
      <p className="whitespace-nowrap">Based on Sri Lanka</p><p className="whitespace-nowrap">Local Time {time}</p>
    </div>
  );
}

// Contact Footer
function ContactFooter() {
  return (
    <AnimatedSection delay={0.1} id="contact">
      <div className="bg-[#1e1e1e] min-h-screen flex flex-col pt-[80px] md:pt-[120px] relative w-full overflow-hidden" data-name="Contact + Footer">
        <div className="flex-1 flex flex-col justify-center w-full px-[20px] md:px-[60px] lg:px-[120px] z-10">
          <div className="flex flex-col gap-[60px] md:gap-[100px] w-full">
            <div className="font-['Instrument_Serif',serif] w-full" style={{ fontSize: 'clamp(40px, 6vw, 100px)' }}>
              <p className="leading-[1.1] text-[#fdfdfd]/50">Ready to Build Something</p>
              <p className="leading-[1.1]">
                <span className="text-[#fdfdfd]/50">Modern and Impactful? </span>
                {/* Email Link added to Let's talk! */}
                <a href="mailto:mbmaheshika@gmail.com" className="text-[#fdfdfd] hover:text-[#1296cc] cursor-pointer transition-colors duration-300">
                  Let's talk!
                </a>
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-[40px] md:gap-0">
              <div className="flex flex-col gap-[16px] md:gap-[24px] items-start">
                <a href="mailto:mbmaheshika@gmail.com" className="flex gap-[16px] items-center cursor-pointer group">
                  <p className="font-['Instrument_Serif',serif] leading-[1.2] text-[#fdfdfd] group-hover:text-[#1296cc] transition-colors" style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}>Email</p>
                  <svg className="w-[0.8em] h-[0.8em]" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p33ee37f2} className="fill-[#FDFDFD] group-hover:fill-[#1296cc] transition-colors" />
                  </svg>
                </a>
                <a href="https://wa.me/94707170906" target="_blank" rel="noopener noreferrer" className="flex gap-[16px] items-center cursor-pointer group">
                  <p className="font-['Instrument_Serif',serif] leading-[1.2] text-[#fdfdfd] group-hover:text-[#1296cc] transition-colors" style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}>WhatsApp</p>
                  <svg className="w-[0.8em] h-[0.8em]" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p33ee37f2} className="fill-[#FDFDFD] group-hover:fill-[#1296cc] transition-colors" />
                  </svg>
                </a>
              </div>
              <div className="flex items-end justify-start md:justify-end">
                <LiveTime />
              </div>
            </div>
          </div>
        </div>
        
        {/* Email Link added to maheux. text */}
        <div className="relative w-full flex items-end justify-center mt-auto overflow-hidden select-none z-20">
          <a href="mailto:mbmaheshika@gmail.com" className="cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <p className="font-['Albert_Sans',sans-serif] font-bold text-[#fdfdfd] text-center whitespace-nowrap tracking-tighter opacity-50" style={{ fontSize: '28vw', lineHeight: '0.75', marginBottom: '-1%' }}>
              maheux.
            </p>
          </a>
        </div>

      </div>
    </AnimatedSection>
  );
}

// --- Component: Individual Project Detail Page ---
function ProjectDetailsPage({ project, onBack }: { project: any, onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col items-center bg-[#fdfdfd]"
    >
      <div className="w-full flex flex-col items-center pt-[60px] md:pt-[100px] pb-[80px] md:pb-[120px]">
        <div className="w-full flex justify-start mb-[40px] md:mb-[60px] px-[20px] md:px-[60px] lg:px-[120px]">
          <div
            onClick={onBack}
            className="cursor-pointer flex items-center gap-[8px] text-[#6d6d6d] hover:text-[#1296cc] font-['Albert_Sans',sans-serif] transition-colors"
            style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}
          >
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </div>
        </div>
        <div className="flex flex-col items-center gap-[12px] mb-[60px] md:mb-[80px] px-[20px] md:px-[60px] lg:px-[120px] max-w-[1000px] text-center">
          <h1 className="font-['Instrument_Serif',serif] text-[#1e1e1e] leading-[1.1] tracking-[-0.28px]" style={{ fontSize: 'clamp(48px, 6vw, 90px)' }}>{project.title}</h1>
          <p className="font-['Albert_Sans',sans-serif] font-medium text-[#1296cc]" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>{project.category}</p>
          <p className="font-['Albert_Sans',sans-serif] text-[#6d6d6d] mt-[16px] leading-[1.6]" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>{project.description}</p>
        </div>
        <div className="w-full px-[20px] md:px-[60px] lg:px-[120px]">
            <div className="w-full rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-[#f5f5f5]">
              <img src={project.fullImg} alt={project.title} className="w-full h-auto object-cover" />
            </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Main App Wrapper ---
export default function AnimatedPortfolio() {
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [activeProject, setActiveProject] = useState<any>(null);

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
    <div className="w-full bg-white relative flex flex-col overflow-clip">
      {currentView === 'home' ? (
        <>
          <Hero onNavClick={handleNavClick} />
          <AboutMe />
          <MyWorks onProjectClick={handleProjectClick} />
          {/* New Pricing Section */}
          <PricingSection />
          {/* Animated Dashed Timeline & Stacking Cards */}
          <ProcessSection />
        </>
      ) : (
        <div className="w-full bg-[#fdfdfd]">
          <div className="w-full flex justify-center pt-[32px] px-[20px] md:px-[60px] lg:px-[120px] relative z-20">
            <Nav onNavClick={handleNavClick} isDarkText={true} />
          </div>
          {activeProject && (
            <ProjectDetailsPage
              project={activeProject}
              onBack={() => {
                setCurrentView('home');
                setTimeout(() => scrollToSection('works'), 100); 
              }}
            />
          )}
        </div>
      )}
      <ContactFooter />
      <BackToTopButton />
    </div>
  );
}
