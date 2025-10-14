import Img2 from '/2.webp';
import Img22 from '/animate2.gif';
function hiw() {
  return (
    <section className="mt-[102px] 2xl:mt-[145px]">
      <div className="font-md mx-auto text-white">
        {/* upper Row */}
        <div className="2xs:w-[398px] 2xs:h-[590px] relative mx-auto flex h-auto max-h-[590px] w-auto max-w-[1680px] gap-[77px] rounded-[12px] border pt-[77px] 2xl:h-[590px] 2xl:w-[1680px]">
          <img
            src={Img22}
            alt="Animated background"
            className="2xs:h-[318px] 2xs:w-[390px] absolute top-[295px] order-2 h-auto w-auto md:top-0 lg:top-[295px] 2xl:bottom-[42px] 2xl:ml-[42px] 2xl:h-[625px] 2xl:w-[767px]"
          />
          <div className="2xs:w-[367px] order-1 mx-auto lg:ml-[886px] lg:h-[230px] lg:w-[740px] 2xl:top-[180px]">
            <h1 className="mb-[24px] text-[24px]">Intelligent Growth System</h1>
            <p className="text-[16px] lg:mt-[42px]">
              Zentrix builds a strong AI-powered foundation that grows layer by
              layer, just like a pyramid. Each level improves decision-making,
              data security, and user experience through smart automation and
              learning.
            </p>
          </div>
        </div>
        {/* bottom two colunm row */}
        {/* <div className="flex">
          <div className=""></div>
          <div className=""></div>
        </div> */}
      </div>
    </section>
  );
}

export default hiw;
