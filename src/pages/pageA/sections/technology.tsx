import React from 'react';
import Img7 from '/7.webp';
import VDO7 from '/animation7.mp4';

function technology() {
  return (
    <section className="mx-auto w-full max-w-[1920px] pt-[80px] text-white">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center gap-[40px] px-4 lg:flex-row lg:gap-[60px] lg:px-[60px] xl:gap-[80px]">
        {/* Left side - Content */}
        <div className="flex max-w-[650px] flex-col lg:flex-1">
          <div>
            <h1 className="text-center text-[32px] font-[700] leading-tight text-white sm:text-[42px] md:text-[48px] lg:text-left lg:text-[52px]">
              How Zentrix Pyramid AI Works
            </h1>
            <p className="mt-[16px] text-center text-[16px] font-normal leading-relaxed text-white sm:text-[18px] lg:text-left">
              Layered intelligence powering a smart and secure decentralized
              system.
            </p>
          </div>
          
          <p className="mt-[24px] text-center text-[14px] font-[400] leading-relaxed text-white sm:text-[16px] lg:text-left">
            Zentrix works through a powerful pyramid-based AI structure. At the
            base, decentralized nodes process and protect data. The middle
            layers connect AI models and smart contracts to manage secure
            operations. At the top, advanced intelligence analyzes and improves 
            the system continuously. Each layer supports the other — creating 
            balance, speed, and smart performance across the entire Zentrix 
            ecosystem. This structure allows users to stake, trade, and grow 
            while enjoying transparency and AI-powered efficiency.
          </p>
          
          <div className="mt-[32px] flex justify-center gap-[16px] lg:justify-start lg:gap-[24px]">
            <button className="h-[48px] w-[160px] rounded-[12px] bg-white text-[16px] font-[500] text-black transition-all hover:bg-gray-100 sm:h-[56px] sm:w-[180px]">
              Get Token
            </button>
            <button className="h-[48px] w-[160px] rounded-[12px] bg-[#575757] text-[16px] font-[500] text-white transition-all hover:bg-[#676767] sm:h-[56px] sm:w-[180px]">
              Join Community
            </button>
          </div>
        </div>

        {/* Right side - Pyramid Visual */}
        <div className="flex w-full max-w-[500px] justify-center lg:flex-1 lg:max-w-[600px]">
          <video
            src={VDO7}
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full max-w-[400px] lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default technology;