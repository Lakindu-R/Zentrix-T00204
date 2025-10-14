import Img1 from '/1.webp';
import Galaxy from '../../../../src/components/customUi/galaxy';

import vdo from '/animate.mp4';

function hero() {
  return (
    <section className="font-md mx-auto w-full pt-[80px] text-white">
      <div style={{ width: '100%', height: '800px', position: 'absolute' }}>
        {/* <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.3}
          glowIntensity={0.1}
          saturation={0}
          hueShift={110}
        /> */}
      </div>
      <div className="mx-auto flex w-full max-w-[1920px] flex-col justify-center lg:flex-row">
        {/* 2xl:min-h-screen */}
        {/* left side */}
        <div className="max-w-[1112px] justify-center lg:ml-[120px] lg:pt-[188px]">
          <h1 className="2xs:text-[52px] mx-auto max-w-[1112px] text-center font-[700] text-white lg:text-start xl:text-[128px]">
            Power the Future with Zentrix
          </h1>
          <p className="2xs:text-[24px] mx-auto mt-[24px] max-w-[970px] px-3 text-center font-[400] lg:mx-0 lg:px-0 lg:text-start">
            A Pyramid AI utility token powering intelligent systems,
            decentralized access, and growth through layered innovation.
          </p>
          <div className="xs:px-0 2xs:text-[15px] mx-auto mt-[32px] flex justify-center gap-[24px] px-1 text-[10px] font-[400] sm:items-start md:text-[20px] lg:mt-[42px] lg:justify-start lg:gap-[35px]">
            <button className="2xs:h-[56px] 2xs:w-[187px] h-[36px] w-[100px] rounded-[12px] bg-white text-black md:h-[56px] md:w-[342px] lg:h-[56px] lg:w-[184px]">
              Get Token
            </button>
            <button className="2xs:h-[56px] 2xs:w-[187px] h-[36px] w-[100px] rounded-[12px] bg-[#575757] text-white md:h-[56px] md:w-[342px] lg:h-[56px] lg:w-[184px]">
              Join Community
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="">
          {/* <img
            src={Img1}
            alt="Pyramid image"
            className="mx-auto h-[306px] w-[260px] lg:h-[852px] lg:w-[688px]"
          /> */}
          <video
            src={vdo}
            autoPlay
            loop
            muted
            playsInline
            className="md:w- mx-auto h-[306px] w-[260px] md:w-[445px] md:pt-[32px] lg:h-[852px] lg:w-[688px]"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default hero;
