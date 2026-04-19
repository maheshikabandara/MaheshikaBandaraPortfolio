import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";
import svgPaths from "../../imports/ContactFooter/svg-f4p2vld91i";
import imgHero from "../../imports/Portfolio-1/9b06e550a03f9722c147c637abe54e4634f08454.png";
import imgFrame192 from "../../imports/Portfolio-1/a1889c3ea7bf7237fd5d6a613633cd9a624d7694.png";
 
function AnimatedSection({ children, delay = 0, id }: { children: React.ReactNode; delay?: number; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.15,
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
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

// Nav Components
// Nav Components
function Nav() {
  // Menu eka open da close da kiyala track karanna state ekak
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger eka click kalama menu eka toggle wenawa
  const toggleMenu = () => setIsOpen(!isOpen);

  // Link ekak click kalama scroll wela menu eka auto close wenawa
  const handleScroll = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[rgba(253,253,253,0.1)] backdrop-blur-md flex flex-col justify-center px-[24px] py-[12px] md:px-[24px] md:py-[10px] relative rounded-[20px] w-full max-w-[1062px] z-50 overflow-hidden"
      data-name="Nav"
    >
      <div className="flex items-center justify-between w-full">
        
        {/* Left Side: Logo */}
        <p className="font-['Albert_Sans',sans-serif] font-bold text-[#fdfdfd] text-[24px] whitespace-nowrap">
          maheux.
        </p>

        {/* Desktop Links (Mobile eke penne naha) */}
        <div className="hidden md:flex font-['Albert_Sans',sans-serif] font-medium gap-[19px] items-center text-[#fdfdfd] text-[16px]">
          <p onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#1296cc] transition-colors">About me</p>
          <p onClick={() => handleScroll("services")} className="cursor-pointer hover:text-[#1296cc] transition-colors">Services</p>
          <p onClick={() => handleScroll("works")} className="cursor-pointer hover:text-[#1296cc] transition-colors">My Works</p>
          <p onClick={() => handleScroll("contact")} className="cursor-pointer hover:text-[#1296cc] transition-colors">Testimonials</p>
        </div>

        {/* Desktop Button (Mobile eke penne naha) */}
        <div
          onClick={() => handleScroll("contact")}
          className="hidden md:flex bg-[#1296cc] px-[24px] py-[10px] rounded-[50px] cursor-pointer hover:bg-[#0d7aa8] transition-colors items-center justify-center"
        >
          <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] text-[14px] whitespace-nowrap">Contact me</p>
        </div>

        {/* Right Side: Hamburger Icon (Desktop eke penne naha) */}
        <div className="md:hidden flex items-center justify-center cursor-pointer text-white" onClick={toggleMenu}>
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden flex flex-col items-center gap-[16px] w-full pt-[24px] pb-[10px] font-['Albert_Sans',sans-serif] text-white"
        >
          <p onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">About me</p>
          <p onClick={() => handleScroll("services")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">Services</p>
          <p onClick={() => handleScroll("works")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">My Works</p>
          <p onClick={() => handleScroll("contact")} className="cursor-pointer hover:text-[#1296cc] text-[18px]">Testimonials</p>
          <div
            onClick={() => handleScroll("contact")}
            className="bg-[#1296cc] px-[32px] py-[12px] rounded-[50px] cursor-pointer hover:bg-[#0d7aa8] mt-[10px] w-full text-center"
          >
            <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] text-[18px]">Contact me</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}


// Hero Section Components
function Frame23() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-[100px] shrink-0 size-[90px] md:size-[70px]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <img alt="" className="absolute h-[127.57%] left-[-8.14%] max-w-none top-[-13.79%] w-[116.28%]" src={imgFrame192} />
      </div>
    </motion.div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 flex-wrap justify-center md:gap-[16px]">
      <div
        onClick={() => scrollToSection("contact")}
        className="bg-[#1296cc] content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[16px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0d7aa8] transition-colors md:px-[24px] md:py-[12px]"
      >
        <p className="font-['Albert_Sans',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap md:text-[18px] md:leading-[24px]">
          Contact me
        </p>
      </div>
      <div
        onClick={() => scrollToSection("works")}
        className="content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[16px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors md:px-[24px] md:py-[12px]"
      >
        <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Albert_Sans',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap md:text-[18px] md:leading-[24px]">
          See My Work
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full md:gap-[16px]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="font-['Albert_Sans',sans-serif] font-semibold leading-[1.5] relative text-[#1e1e1e] text-center tracking-[-0.12px]"
        style={{ fontSize: 'clamp(16px, 1.5vw, 28px)' }}
      >
        Hi, I'm Maheshika Bandara!
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="font-['Instrument_Serif',serif] leading-[1.1] not-italic relative text-[#1e1e1e] text-center tracking-[-1.8px] w-full"
        style={{ fontSize: 'clamp(40px, 7vw, 130px)' }}
      >
       High-conversion websites
      </motion.p>
     <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="font-['Instrument_Serif',serif] leading-[1.1] not-italic relative text-[#1e1e1e] text-center tracking-[-1.8px] w-full"
        style={{ fontSize: 'clamp(40px, 7vw, 130px)' }}
      >
       for businesses
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="font-['Albert_Sans',sans-serif] font-normal leading-[1.5] relative text-[#404040] text-center tracking-[-0.1px] w-full lg:w-[60%]"
        style={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}
      >
        Whether you don't have a website yet or your current one needs a modern refresh, I help you get online fast, look trustworthy, and attract more customers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8"
      >
        <Frame />
      </motion.div>
    </div>
  );
}

//Hero
function Hero() {
  return (
    <div className="min-h-[100dvh] relative shrink-0 w-full flex flex-col" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white via-[49.04%] via-[rgba(255,255,255,0.75)]" />
      </div>

      <div className="w-full flex justify-center pt-[32px] px-[20px] md:px-[60px] lg:px-[120px] relative z-20">
        <Nav />
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


// About Me Section
function AboutMe() {
  return (
    <AnimatedSection id="about">
      <div className="bg-white min-h-screen flex flex-col items-center justify-center relative shrink-0 w-full py-[100px] px-[20px] md:px-[60px] lg:px-[120px]" data-name="About me">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
          <p 
            className="font-['Instrument_Serif',serif] leading-[1.3] not-italic relative text-[#1e1e1e] text-center tracking-[-1.12px] w-full"
            style={{ fontSize: 'clamp(32px, 4.5vw, 70px)' }}
          >
            UI/UX Designer, and Developer with a BSc in Information Technology who helps businesses get a clean, professional online presence that attracts more customers. I create fast, mobile-friendly websites, whether it's building your first site from scratch or giving an existing one a modern polish, and design until every page feels simple, trustworthy, and meaningful.
          </p>
          <p
            onClick={() => scrollToSection("works")}
            className="font-['Albert_Sans',sans-serif] font-medium leading-[1.5] relative text-[#1296cc] text-center tracking-[-0.12px] w-full cursor-pointer hover:underline transition-all hover:scale-105"
            style={{ fontSize: 'clamp(18px, 1.5vw, 28px)' }}
          >
            Explore My Work
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

// My Works Section
function MyWorks() {
  return (
    <AnimatedSection delay={0.1} id="works">
      <div className="bg-[#f8fdff] min-h-screen flex flex-col items-center justify-center relative w-full py-[100px] px-[20px] md:px-[60px] lg:px-[120px]" data-name="My Works">
        <div className="flex flex-col gap-[48px] items-center relative w-full">
          <p 
            className="font-['Instrument_Serif',serif] leading-[1.2] not-italic relative text-[#1e1e1e] text-center tracking-[-0.28px] w-full"
            style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}
          >
            Curated Works That Reflect Design Precision and Excellence
          </p>
          <div className="bg-[#fdfdfd] flex items-center justify-end overflow-hidden relative rounded-[20px] shadow-[0px_0px_12px_-6px_rgba(0,0,0,0.15)] w-full aspect-[4/3] lg:aspect-[21/9] cursor-pointer hover:shadow-[0px_0px_24px_-6px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-all duration-300">
            <div className="bg-[#cbf0ff] h-full w-[45%] md:w-[60%] shrink-0" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Services Section
function ServiceCard({ title, description, target }) {
  return (
    <div className="bg-white flex-1 flex flex-col h-full relative rounded-[8px] w-full hover:scale-[1.02] transition-transform duration-300">
      <div className="overflow-clip rounded-[inherit] flex-1 flex flex-col w-full h-full border border-[#f2f2f2]">
        <div className="flex-1 flex flex-col items-start justify-between px-[24px] py-[32px] md:px-[40px] md:py-[48px] w-full h-full gap-[40px]">
          
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex flex-col gap-[16px] w-full">
              <p className="font-['Instrument_Serif',serif] text-[#1296cc] whitespace-nowrap" style={{ fontSize: 'clamp(24px, 2.5vw, 40px)' }}>
                {title}
              </p>
              <p className="font-['Albert_Sans',sans-serif] text-[#1e1e1e] leading-[1.6]" style={{ fontSize: 'clamp(16px, 1.2vw, 22px)' }}>
                {description}
              </p>
            </div>
            
            <div className="flex gap-[12px] items-center w-full">
              <div className="bg-[#f5f5f5] rounded-[4px] shrink-0 flex items-center justify-center p-1">
                <svg className="size-[16px] lg:size-[20px]" fill="none" viewBox="0 0 13.5 10">
                  <path d="M1 5.5L4.5 9L12.5 1" stroke="#1296CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Albert_Sans',sans-serif] text-[#6d6d6d]" style={{ fontSize: 'clamp(14px, 1vw, 20px)' }}>
                {target}
              </p>
            </div>
          </div>

          <div
            onClick={() => scrollToSection("contact")}
            className="bg-[#1296cc] rounded-[100px] w-full cursor-pointer hover:bg-[#0d7aa8] transition-colors mt-auto py-[16px] flex justify-center items-center"
          >
            <p className="font-['Albert_Sans',sans-serif] font-medium text-[#f5f5f5] whitespace-nowrap" style={{ fontSize: 'clamp(16px, 1.2vw, 22px)' }}>
              Contact me
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function MyServices() {
  return (
    <AnimatedSection delay={0.1} id="services">
      <div className="min-h-screen flex flex-col items-center justify-center relative w-full py-[100px] px-[20px] md:px-[60px] lg:px-[120px]" data-name="My Services">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bg-[#fdfdfd] inset-0" />
          <img alt="" className="absolute max-w-none object-cover w-full h-full" src={imgHero} />
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-[46.487%] to-white" />
        </div>
        
        <div className="flex flex-col gap-[60px] items-center relative w-full z-10">
          <p 
            className="font-['Instrument_Serif',serif] leading-[1.2] not-italic relative text-[#1e1e1e] text-center tracking-[-0.28px] w-full lg:w-[70%]"
            style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}
          >
            Services Designed to Deliver Clean Modern Digital Experiences
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] xl:gap-[40px] items-stretch relative w-full">
            <ServiceCard 
              title="New Website Creation" 
              description="I will design and build a clean, modern, mobile-friendly website from scratch on Wix Studio." 
              target="For businesses that don't have a website yet" 
            />
            <ServiceCard 
              title="Website Refresh / Rebuild" 
              description="For businesses with an existing website (on any platform) that looks dated or doesn't convert well. I will give it a complete modern update by rebuilding it cleanly on Wix Studio." 
              target="For businesses with an existing website" 
            />
            <ServiceCard 
              title="Website Maintenance" 
              description="For businesses that already have a website and want it to stay fast, secure, and up-to-date. I will handle regular updates, backups, minor edits, and monthly checks." 
              target="For businesses that already have a website" 
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Contact Footer Section
function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatted = formatInTimeZone(new Date(), "Asia/Colombo", "h:mm:ss aa");
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex flex-col sm:flex-row font-['Instrument_Serif',serif] gap-[8px] sm:gap-[20px] items-start sm:items-center leading-[1.2] text-[#fdfdfd]"
      style={{ fontSize: 'clamp(16px, 1.5vw, 28px)' }}
    >
      <p className="whitespace-nowrap">Based on Sri Lanka</p>
      <p className="whitespace-nowrap">Local Time {time}</p>
    </div>
  );
}

function ContactFooter() {
  return (
    <AnimatedSection delay={0.1} id="contact">
      <div className="bg-[#1e1e1e] min-h-screen flex flex-col pt-[80px] md:pt-[120px] relative w-full overflow-hidden" data-name="Contact + Footer">
        
        {/* Full width padding apply kara: px-[20px] md:px-[60px] lg:px-[120px] */}
        <div className="flex-1 flex flex-col justify-center w-full px-[20px] md:px-[60px] lg:px-[120px] z-10">
          
          <div className="flex flex-col gap-[60px] md:gap-[100px] w-full">
            <div 
              className="font-['Instrument_Serif',serif] w-full"
              style={{ fontSize: 'clamp(40px, 6vw, 100px)' }} 
            >
              {/* Palaweni line eka 50% opacity */}
              <p className="leading-[1.1] text-[#fdfdfd]/50">Ready to Build Something</p>
              
              {/* Deweni line eka - kalli dekakata keduwa */}
              <p className="leading-[1.1]">
                <span className="text-[#fdfdfd]/50">Modern and Impactful?</span>
                <span className="text-[#fdfdfd]"> Let's talk!</span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-[40px] md:gap-0">
              <div className="flex flex-col gap-[16px] md:gap-[24px] items-start">
                <a href="mailto:mbmaheshika@gmail.com" className="flex gap-[16px] items-center cursor-pointer group">
                  <p 
                    className="font-['Instrument_Serif',serif] leading-[1.2] text-[#fdfdfd] group-hover:text-[#1296cc] transition-colors"
                    style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}
                  >
                    Email
                  </p>
                  <svg className="w-[0.8em] h-[0.8em]" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p33ee37f2} className="fill-[#FDFDFD] group-hover:fill-[#1296cc] transition-colors" />
                  </svg>
                </a>
                <a href="https://wa.me/94707170906" target="_blank" rel="noopener noreferrer" className="flex gap-[16px] items-center cursor-pointer group">
                  <p 
                    className="font-['Instrument_Serif',serif] leading-[1.2] text-[#fdfdfd] group-hover:text-[#1296cc] transition-colors"
                    style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}
                  >
                    WhatsApp
                  </p>
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
        
        <div className="relative w-full flex items-end justify-center mt-auto overflow-hidden pointer-events-none select-none">
          <p
            className="font-['Albert_Sans',sans-serif] font-bold text-[#fdfdfd] text-center whitespace-nowrap tracking-tighter opacity-50"
            style={{ 
              fontSize: '28vw',
              lineHeight: '0.75',
              marginBottom: '-1%'
            }}
          >
            maheux.
          </p>
        </div>

      </div>
    </AnimatedSection>
  );
}

export default function AnimatedPortfolio() {
  return (
    <div className="relative flex flex-col w-full bg-white">
      <Hero />
      <AboutMe />
      <MyWorks />
      <MyServices />
      <ContactFooter />
    </div>
  );
}
