import svgPaths from "./svg-f4p2vld91i";

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="font-['Instrument_Serif:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[64px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.2] mb-0 whitespace-pre">{`Ready to Build Something `}</p>
        <p className="leading-[1.2] whitespace-pre">Modern and Impactful?</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fdfdfd] text-[32px] text-center tracking-[-0.16px] whitespace-nowrap">Email</p>
      <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
        <div className="absolute inset-[21.88%_21.87%_21.87%_21.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 18.0006">
            <path d={svgPaths.p33ee37f2} fill="var(--fill-0, #FDFDFD)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fdfdfd] text-[32px] text-center tracking-[-0.16px] whitespace-nowrap">WhatsApp</p>
      <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
        <div className="absolute inset-[21.88%_21.87%_21.87%_21.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 18.0006">
            <path d={svgPaths.p33ee37f2} fill="var(--fill-0, #FDFDFD)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[157px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Instrument_Serif:Regular',sans-serif] gap-[38px] items-center leading-[1.2] not-italic relative shrink-0 text-[#fdfdfd] text-[24px] text-center tracking-[-0.12px]">
      <p className="relative shrink-0 whitespace-nowrap">Based on Sri Lanka</p>
      <p className="relative shrink-0 whitespace-pre">{`Local Time  1:06:42 PM`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1280px]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[86px] items-start px-[80px] relative size-full">
        <Frame3 />
        <Frame5 />
      </div>
    </div>
  );
}

export default function ContactFooter() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start justify-between pt-[90px] relative size-full" data-name="Contact + Footer">
      <Frame6 />
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[516px] leading-[671.598px] relative shrink-0 text-[#fdfdfd] text-[516.614px] text-center w-full">mahe.</p>
    </div>
  );
}