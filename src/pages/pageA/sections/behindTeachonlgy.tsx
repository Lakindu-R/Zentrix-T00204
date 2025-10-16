import Img6 from '/6.webp';
function behindTeachonlgy() {
  return (
    <section className="font-md font-md mx-auto max-h-[803px] w-full max-w-[1920px] pt-[80px] text-white">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center-safe justify-center xl:flex-row">
        {/* 2xl:min-h-screen */}
        {/* left side */}
        <div className="max-w-[828px] justify-center lg:gap-[25px]">
          <div className="md-w-[720px]">
            <h1 className="mx-auto max-w-[1112px] text-center text-[32px] font-[700] text-white sm:text-[52px] md:text-[62px] lg:text-center lg:text-[52px]">
              How Zentrix Pyramid AI Works
            </h1>
            <p className="mx-auto mt-[24px] text-center text-xl font-normal text-white">
              Layered intelligence powering a smart and secure decentralized
              system.
            </p>
          </div>
          <p className="mx-auto mt-[24px] px-3 text-center text-base font-[400] sm:w-auto sm:text-2xl lg:mx-0 lg:px-0 lg:text-center">
            Zentrix works through a powerful pyramid-based AI structure. At the
            base, decentralized nodes process and protect data. The middle
            layers connect AI models and smart contracts to manage secure
            operations. At the top, advanced intelligence analyzes
            <br className="hidden md:block lg:hidden" /> and improves the system
            continuously. <br className="hidden md:block lg:hidden" /> Each
            layer supports the other — creating balance, speed, and smart
            performance across the entire Zentrix ecosystem. This structure
            allows users to stake, trade, and grow while enjoying transparency
            and AI-powered efficiency.
          </p>
          <div className="xs:px-0 2xs:text-[15px] mx-auto mt-[32px] mb-[40px] flex justify-center gap-[24px] px-1 text-[10px] font-[400] sm:items-start md:text-[20px] lg:mt-[42px] lg:justify-center lg:gap-[35px]">
            <button className="2xs:h-[56px] 2xs:w-[187px] h-[36px] w-[100px] rounded-[12px] bg-white text-black md:h-[56px] md:w-[184px] lg:h-[56px] lg:w-[184px]">
              Get Token
            </button>
            <button className="2xs:h-[56px] 2xs:w-[187px] h-[36px] w-[100px] rounded-[12px] bg-[#575757] text-white md:h-[56px] md:w-[184px] lg:h-[56px] lg:w-[184px]">
              Join Community
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex justify-center">
          <img
            src={Img6}
            alt="Pyramid image"
            className="2xs:h-[349px] 2xs:w-[398px] mb-[32px] px-4 md:h-[635px] md:w-[720px] lg:h-[699px] lg:w-[827px] 2xl:h-full 2xl:w-full"
          />
          {/* <video
            src={VDO7}
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

export default behindTeachonlgy;
