import Img1 from '/1.webp';
import Galaxy from '../../../../src/components/customUi/galaxy';

import vdo from '/animate.mp4';

function hero() {
  return (
    <section className="font-md relative mx-auto max-h-[852px] w-full max-w-[1920px] text-white">
      {/*       */}
      {/* <div style={{ width: '100%', height: '800px', position: 'absolute' }}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.5}
          glowIntensity={0.1}
          saturation={0}
          hueShift={110}
        />
      </div> */}
      <div className="mx-auto flex w-full flex-col justify-center lg:flex-row lg:pl-[128px]">
        {/* left side */}
        <div className="h-auto max-w-[1112px] justify-center md:mb-[32px] lg:pt-[18px] lg:pt-[140px] xl:h-[476px] 2xl:pt-[100px]">
          <h1 className="2xs:text-[52px] mx-auto text-center font-[700] text-white md:text-[64px] lg:text-start xl:text-[128px] xl:leading-[125px]">
            Power the Future with Zentrix
          </h1>
          <p className="2xs:text-[24px] mx-auto mt-[24px] max-w-[970px] px-3 text-center font-[400] lg:mx-0 lg:px-0 lg:text-start xl:leading-[32px]">
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
            className="mx-auto h-[306px] w-[260px] md:h-[503px] md:w-[445px] lg:h-auto lg:w-full"
          /> */}
          <video
            src={vdo}
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto h-[306px] w-[260px] md:h-[503px] md:w-[445px] lg:h-[688px] lg:w-auto"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default hero;
