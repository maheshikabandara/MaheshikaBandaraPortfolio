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
function Frame4() {
  return (
    <div className="content-stretch flex font-['Albert_Sans:Medium',sans-serif] font-medium gap-[19px] items-center leading-[27px] relative shrink-0 text-[#fdfdfd] text-[18px] text-center whitespace-nowrap md:gap-[12px] md:text-[16px]">
      <p onClick={() => scrollToSection("about")} className="relative shrink-0 cursor-pointer hover:text-[#1296cc] transition-colors">
        About me
      </p>
      <p onClick={() => scrollToSection("services")} className="relative shrink-0 cursor-pointer hover:text-[#1296cc] transition-colors">
        Services
      </p>
      <p onClick={() => scrollToSection("works")} className="relative shrink-0 cursor-pointer hover:text-[#1296cc] transition-colors">
        My Works
      </p>
      <p onClick={() => scrollToSection("contact")} className="relative shrink-0 cursor-pointer hover:text-[#1296cc] transition-colors">
        Testimonials
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[31.2px] relative shrink-0 text-[#fdfdfd] text-[24px] text-center whitespace-nowrap">
        mahe.
      </p>
      <Frame4 />
      <div
        onClick={() => scrollToSection("contact")}
        className="bg-[#1296cc] content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0d7aa8] transition-colors md:px-[24px] md:py-[10px]"
        data-name="Button"
      >
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap md:text-[14px]">
          Contact me
        </p>
        <div className="relative shrink-0 size-[20px]" data-name="ArrowUpRight">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                <path d="M0.75 10.75L10.75 0.75" id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[34.38%] left-[34.38%] right-1/4 top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.625 9.625">
                <path d="M0.75 0.75H8.875V8.875" id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[rgba(253,253,253,0.1)] backdrop-blur-md content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[20px] shrink-0 w-full max-w-[1062px] md:px-[16px] md:py-[10px]"
      data-name="Nav"
    >
      <Frame2 />
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
        className="bg-[#1296cc] content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[16px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0d7aa8] transition-colors md:px-[24px] md:py-[12px]"
        data-name="Button"
      >
        <p className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap md:text-[18px] md:leading-[24px]">
          Contact me
        </p>
        <div className="relative shrink-0 size-[24px]" data-name="ArrowUpRight">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path d="M0.75 12.75L12.75 0.75" id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[34.38%] left-[34.38%] right-1/4 top-1/4" data-name="Vector">
            <div className="absolute inset-[-7.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                <path d="M0.75 0.75H10.5V10.5" id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => scrollToSection("works")}
        className="content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[16px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors md:px-[24px] md:py-[12px]"
        data-name="Button"
      >
        <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap md:text-[18px] md:leading-[24px]">
          See My Work
        </p>
        <div className="relative shrink-0 size-[24px]" data-name="ArrowUpRight">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path d="M0.75 12.75L12.75 0.75" id="Vector" stroke="var(--stroke-0, #1e1e1e)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[34.38%] left-[34.38%] right-1/4 top-1/4" data-name="Vector">
            <div className="absolute inset-[-7.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                <path d="M0.75 0.75H10.5V10.5" id="Vector" stroke="var(--stroke-0, #1e1e1e)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
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
        className="font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative text-[#1e1e1e] text-[24px] text-center tracking-[-0.12px] md:text-[20px] sm:text-[18px]"
      >
        Hi, I'm Maheshika Bandara!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.1] not-italic relative text-[#1e1e1e] text-[90px] text-center tracking-[-1.8px] max-w-full md:text-[56px] sm:text-[40px] px-4"
      >
        Design clean, professional websites for businesses
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="font-['Albert_Sans:Regular',sans-serif] font-normal leading-[1.5] relative text-[#404040] text-[20px] text-center tracking-[-0.1px] max-w-full md:text-[18px] sm:text-[16px] px-4"
      >
        Whether you don't have a website yet or your current one needs a modern refresh, I help you get online fast, look trustworthy, and attract more customers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Frame />
      </motion.div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full max-w-[846px] px-4">
      <Frame23 />
      <Frame22 />
    </div>
  );
}

function Hero() {
  return (
    <div className="min-h-[1024px] relative shrink-0 w-full md:min-h-[800px] sm:min-h-[700px]" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white via-[49.04%] via-[rgba(255,255,255,0.75)]" />
      </div>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[125px] items-center pb-[100px] pt-[48px] px-[189px] relative w-full md:gap-[80px] md:px-[40px] md:pb-[60px] sm:gap-[60px] sm:px-[20px] sm:pb-[40px]">
          <Nav />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

// About Me Section
function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.3] not-italic relative text-[#1e1e1e] text-[56px] text-center tracking-[-1.12px] max-w-[1171px] md:text-[40px] sm:text-[32px] px-4">
        UI/UX Designer, and Developer with a BSc in Information Technology who helps small businesses worldwide get a clean, professional online presence that attracts more customers. I create fast, mobile-friendly websites, whether it's building your first site from scratch or giving an existing one a modern polish, and design until every page feels simple, trustworthy, and meaningful.
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full max-w-[1280px] md:gap-[24px]">
      <Frame24 />
      <p
        onClick={() => scrollToSection("works")}
        className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[1.5] relative text-[#1296cc] text-[24px] text-center tracking-[-0.12px] w-full cursor-pointer hover:underline md:text-[20px] sm:text-[18px]"
      >
        Explore My Work
      </p>
    </div>
  );
}

function AboutMe() {
  return (
    <AnimatedSection id="about">
      <div className="bg-white min-h-[1024px] relative shrink-0 w-full md:min-h-[800px] sm:min-h-auto sm:py-[100px]" data-name="About me">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center pb-[222px] pt-[223px] px-[80px] relative w-full md:py-[120px] md:px-[40px] sm:py-[80px] sm:px-[20px]">
            <Frame25 />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// My Works Section
function Frame28() {
  return <div className="bg-[#cbf0ff] h-[743px] rounded-br-[20px] rounded-tr-[20px] shrink-0 w-[628px] md:h-[400px] md:w-[400px] sm:h-[300px] sm:w-[300px]" />;
}

function Frame26() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-end overflow-clip relative rounded-[20px] shadow-[0px_0px_12px_-6px_rgba(0,0,0,0.15)] shrink-0 w-full min-h-[729px] cursor-pointer hover:shadow-[0px_0px_24px_-6px_rgba(0,0,0,0.25)] transition-shadow md:min-h-[400px] sm:min-h-[300px]">
      <Frame28 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full max-w-[1280px] md:gap-[32px]">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] not-italic relative text-[#1e1e1e] text-[56px] text-center tracking-[-0.28px] w-full md:text-[40px] sm:text-[32px]">
        Curated Works That Reflect Design Precision and Excellence
      </p>
      <Frame26 />
    </div>
  );
}

function MyWorks() {
  return (
    <AnimatedSection delay={0.1} id="works">
      <div className="bg-[#f8fdff] min-h-[1024px] relative shrink-0 w-full md:min-h-auto md:py-[100px] sm:py-[80px]" data-name="My Works">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center px-[80px] py-[90px] relative w-full md:px-[40px] md:py-[60px] sm:px-[20px] sm:py-[40px]">
            <Frame27 />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Services Section
function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[27px] relative shrink-0 w-full">
      <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1296cc] text-[24px] whitespace-nowrap">New Website Creation</p>
      <p className="font-['Albert_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">
        I will design and build a clean, modern, mobile-friendly website from scratch on Wix Studio.
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[4px] shrink-0 size-[24px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Check">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[28.13%_12.5%_21.88%_15.63%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.7%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 10">
              <path d="M1 5.5L4.5 9L12.5 1" id="Vector" stroke="var(--stroke-0, #1296CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[363px] lg:w-full">
      <Frame3 />
      <p className="flex-[1_0_0] font-['Albert_Sans:Regular',sans-serif] font-normal leading-[20.8px] min-w-px relative text-[#6d6d6d] text-[16px]">
        For businesses that don't have a website yet
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0 w-[363px] lg:w-full">
      <Frame30 />
      <div
        onClick={() => scrollToSection("contact")}
        className="bg-[#1296cc] relative rounded-[100px] shrink-0 w-full cursor-pointer hover:bg-[#0d7aa8] transition-colors"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[10px] relative size-full">
            <p className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">
              Contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[411px] hover:scale-105 transition-transform lg:w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[24px] py-[32px] relative size-full">
          <Frame16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[27px] relative shrink-0 text-[#1296cc] text-[24px] whitespace-nowrap">
        Website Refresh / Rebuild
      </p>
      <div className="font-['Albert_Sans:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[27px] mb-[10px]">For businesses with an existing website (on any platform) that looks dated or doesn't convert well. </p>
        <p className="leading-[27px]">I will give it a complete modern update by rebuilding it cleanly on Wix Studio. </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[4px] shrink-0 size-[24px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Check">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[28.13%_12.5%_21.88%_15.63%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.7%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 10">
              <path d="M1 5.5L4.5 9L12.5 1" id="Vector" stroke="var(--stroke-0, #1296CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[363px] lg:w-full">
      <Frame5 />
      <p className="flex-[1_0_0] font-['Albert_Sans:Regular',sans-serif] font-normal leading-[20.8px] min-w-px relative text-[#6d6d6d] text-[16px]">
        For businesses with an existing website
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame12 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0 w-[363px] lg:w-full">
      <Frame31 />
      <div
        onClick={() => scrollToSection("contact")}
        className="bg-[#1296cc] relative rounded-[100px] shrink-0 w-full cursor-pointer hover:bg-[#0d7aa8] transition-colors"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[10px] relative size-full">
            <p className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">
              Contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[411px] hover:scale-105 transition-transform lg:w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[24px] py-[32px] relative size-full">
          <Frame17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#1296cc] text-[24px] whitespace-nowrap">
        Website Maintenance
      </p>
      <div className="font-['Albert_Sans:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[27px] mb-[10px]">For businesses that already have a website and want it to stay fast, secure, and up-to-date. </p>
        <p className="leading-[27px]">I will handle regular updates, backups, minor edits, and monthly checks. </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[4px] shrink-0 size-[24px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Check">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[28.13%_12.5%_21.88%_15.63%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.7%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 10">
              <path d="M1 5.5L4.5 9L12.5 1" id="Vector" stroke="var(--stroke-0, #1296CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[363px] lg:w-full">
      <Frame6 />
      <p className="flex-[1_0_0] font-['Albert_Sans:Regular',sans-serif] font-normal leading-[20.8px] min-w-px relative text-[#6d6d6d] text-[16px]">
        For businesses that already have a website
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0 w-[363px] lg:w-full">
      <Frame32 />
      <div
        onClick={() => scrollToSection("contact")}
        className="bg-[#1296cc] relative rounded-[100px] shrink-0 w-full cursor-pointer hover:bg-[#0d7aa8] transition-colors"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[10px] relative size-full">
            <p className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">
              Contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[411px] hover:scale-105 transition-transform lg:w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[24px] py-[32px] relative size-full">
          <Frame19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[24px] h-[376px] items-center relative shrink-0 w-full lg:flex-col lg:h-auto lg:items-stretch">
      <Frame7 />
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[1281px] lg:w-full md:gap-[32px] px-4 lg:px-0">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fdfdfd] text-[56px] text-center tracking-[-0.28px] w-[792px] lg:w-full md:text-[40px] sm:text-[32px]">
        Services Designed to Deliver Clean Modern Digital Experiences
      </p>
      <Frame29 />
    </div>
  );
}

function MyServices() {
  return (
    <AnimatedSection delay={0.1} id="services">
      <div className="min-h-[1024px] relative shrink-0 w-full lg:min-h-auto lg:py-[100px]" data-name="My Services">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#fdfdfd] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-[46.487%] to-white" />
        </div>
        <div className="content-stretch flex flex-col items-center px-[80px] py-[233px] relative w-full lg:py-[120px] lg:px-[40px]">
          <Frame33 />
        </div>
      </div>
    </AnimatedSection>
  );
}

// Contact Footer Section
function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative text-[#fdfdfd] text-[64px] tracking-[-0.32px] md:text-[48px] sm:text-[36px]">
        <p className="leading-[1.2] mb-0">Ready to Build Something</p>
        <p className="leading-[1.2]">Modern and Impactful?</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <a
      href="mailto:mbmaheshika@gmail.com"
      className="content-stretch flex gap-[16px] items-center relative shrink-0 cursor-pointer hover:text-[#1296cc] transition-colors group"
    >
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] not-italic relative text-[#fdfdfd] group-hover:text-[#1296cc] text-[32px] text-center tracking-[-0.16px] whitespace-nowrap md:text-[24px] sm:text-[20px] transition-colors">
        Email
      </p>
      <div className="relative shrink-0 size-[32px] md:size-[24px]" data-name="ArrowUpRight">
        <div className="absolute inset-[21.88%_21.87%_21.87%_21.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 18.0006">
            <path d={svgPaths.p33ee37f2} className="fill-[#FDFDFD] group-hover:fill-[#1296cc] transition-colors" id="Vector" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function Frame35() {
  return (
    <a
      href="https://wa.me/94707170906"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full cursor-pointer hover:text-[#1296cc] transition-colors group"
    >
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] not-italic relative text-[#fdfdfd] group-hover:text-[#1296cc] text-[32px] text-center tracking-[-0.16px] whitespace-nowrap md:text-[24px] sm:text-[20px] transition-colors">
        WhatsApp
      </p>
      <div className="relative shrink-0 size-[32px] md:size-[24px]" data-name="ArrowUpRight">
        <div className="absolute inset-[21.88%_21.87%_21.87%_21.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 18.0006">
            <path d={svgPaths.p33ee37f2} className="fill-[#FDFDFD] group-hover:fill-[#1296cc] transition-colors" id="Vector" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 md:gap-[12px]">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

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
    <div className="content-stretch flex font-['Instrument_Serif:Regular',sans-serif] gap-[38px] items-center leading-[1.2] not-italic relative shrink-0 text-[#fdfdfd] text-[24px] text-center tracking-[-0.12px] md:gap-[20px] md:text-[18px] sm:text-[16px]">
      <p className="relative shrink-0 whitespace-nowrap">Based on Sri Lanka</p>
      <p className="relative shrink-0 whitespace-nowrap">Local Time {time}</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1280px] lg:w-full md:flex-col md:items-start md:gap-[40px] sm:gap-[30px]">
      <Frame36 />
      <div className="flex items-end justify-end">
        <LiveTime />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[86px] items-start px-[80px] relative size-full md:gap-[60px] md:px-[40px] sm:gap-[40px] sm:px-[20px]">
        <Frame37 />
        <Frame39 />
      </div>
    </div>
  );
}

function ContactFooter() {
  return (
    <AnimatedSection delay={0.1} id="contact">
      <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start justify-between pt-[90px] relative w-full md:pt-[60px] sm:pt-[40px]" data-name="Contact + Footer">
        <Frame40 />
        <div className="relative w-full overflow-hidden flex items-center justify-center">
          <p
            className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative text-[#fdfdfd] text-center whitespace-nowrap"
            style={{ fontSize: 'clamp(150px, 35.87vw, 516.614px)' }}
          >
            mahe.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function AnimatedPortfolio() {
  return (
    <div className="w-full bg-white scroll-smooth overflow-x-hidden">
      <Hero />
      <AboutMe />
      <MyWorks />
      <MyServices />
      <ContactFooter />
    </div>
  );
}
