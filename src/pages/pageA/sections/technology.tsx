import React from 'react';
import Img7 from '/7.webp';

function technology() {
  return (
    <section className="font-md font-md mx-auto w-full pt-[80px] text-white">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col justify-center lg:flex-row">
        {/* 2xl:min-h-screen */}
        {/* left side */}
        <div className="max-w-[1112px] justify-center lg:ml-[120px] lg:pt-[188px]">
          <h1 className="mx-auto max-w-[1112px] text-center text-[32px] font-[700] text-white sm:text-[52px] lg:text-start xl:text-[128px]">
            How Zentrix Pyramid AI Works
          </h1>
          <p className="mx-auto mt-[24px] text-center text-xl font-normal text-white sm:text-2xl">
            Layered intelligence powering a smart and secure decentralized
            system.
          </p>
          <p className="mx-auto mt-[24px] px-3 text-center text-base font-[400] sm:w-auto sm:text-2xl lg:mx-0 lg:px-0 lg:text-start">
            Zentrix works through a powerful pyramid-based AI structure. At the
            base, decentralized nodes process and protect data. The middle
            layers connect AI models and smart contracts to manage secure
            operations. At the top, advanced intelligence analyzes and improves
            the system continuously. Each layer supports the other — creating
            balance, speed, and smart performance across the entire Zentrix
            ecosystem. This structure allows users to stake, trade, and grow
            while enjoying transparency and AI-powered efficiency.
          </p>
          <div className="xs:px-0 2xs:text-[15px] mx-auto mt-[32px] mb-[40px] flex justify-center gap-[24px] px-1 text-[10px] font-[400] sm:items-start md:text-[20px] lg:mt-[42px] lg:justify-start lg:gap-[35px]">
            <button className="2xs:h-[56px] 2xs:w-[187px] h-[36px] w-[100px] rounded-[12px] bg-white text-black md:h-[56px] md:w-[342px] lg:h-[56px] lg:w-[184px]">
              Get Token
            </button>
            <button className="2xs:h-[56px] 2xs:w-[187px] h-[36px] w-[100px] rounded-[12px] bg-[#575757] text-white md:h-[56px] md:w-[342px] lg:h-[56px] lg:w-[184px]">
              Join Community
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex justify-center">
          <img
            src={Img7}
            alt="Pyramid image"
            className="2xs:h-[349px] 2xs:w-[398px] px-4 lg:h-[852px] lg:w-[688px]"
          />
          {/* <video
            src={vdo}
            autoPlay
            loop
            muted
            playsInline
            className="md:w- mx-auto h-[306px] w-[260px] md:w-[445px] md:pt-[32px] lg:h-[852px] lg:w-[688px]"
          ></video> */}
        </div>
      </div>
    </section>
  );
}

export default technology;
