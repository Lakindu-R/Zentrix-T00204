import Img6 from '/6.webp';
function behindTeachonlgy() {
  return (
    <section
      id="tech"
      className="font-md font-md mx-auto my-[52px] w-full max-w-[1920px] px-6 text-white lg:pt-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col-reverse items-center-safe justify-center gap-[62px] xl:flex-row">
        {/* Right side */}
        <div className="image-glow-wrapper flex justify-center">
          <img
            src={Img6}
            alt="Pyramid image"
            className="2xs:h-[349px] 2xs:w-[398px] mb-[32px] px-4 md:h-[635px] md:w-[720px] lg:h-[699px] lg:w-[827px] 2xl:h-full 2xl:w-full"
          />
        </div>
        {/* <video
            src={VDO7}
            autoPlay
            loop
            muted
            playsInline
            className="md:w- mx-auto h-[306px] w-[260px] md:w-[445px] md:pt-[32px] lg:h-[852px] lg:w-[688px]"
          ></video> */}

        {/* left side */}
        <div className="max-w-[828px] justify-center lg:gap-[25px]">
          <div className="md-w-[720px]">
            <h1 className="mx-auto max-w-[1112px] text-center text-[32px] font-[700] text-white sm:text-[52px] md:text-[62px] lg:text-center lg:text-[52px]">
              The Technology Behind Zentrix
            </h1>
            <p className="mx-auto mt-[24px] text-center text-xl font-normal text-white">
              Layered intelligence powering a smart and secure decentralized
              system.
            </p>
          </div>
          <p className="mx-auto mt-[24px] px-3 text-center text-base font-[400] sm:w-auto sm:text-2xl lg:mx-0 lg:px-0 lg:text-center">
            Zentrix is powered by Pyramid AI — a multi-layered system that
            combines artificial intelligence, data processing, and blockchain
            innovation. Each layer of Pyramid AI has a special role: the base
            layer secures transactions, the middle layer connects AI functions
            with smart contracts, and the top layer manages learning and
            decision-making. This structure gives Zentrix high speed, better
            accuracy, and strong security. With AI-driven automation and
            decentralized control, Zentrix brings new possibilities to trading,
            staking, and data management — building a stronger and smarter
            digital ecosystem for all users.
          </p>
        </div>
      </div>
    </section>
  );
}

export default behindTeachonlgy;
