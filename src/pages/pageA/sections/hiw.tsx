import Img2 from '/2.webp';
import Img9 from '/9.webp';
import Img22 from '/animate.gif';

function hiw() {
  return (
    <section className="py-12">
      <div className="font-md text-white">
        {/* upper Row */}
        <div className="mx-auto px-3 md:px-6">
          <div className="relative mx-auto flex max-w-[398px] flex-col-reverse overflow-visible rounded-xl border border-white px-3 md:max-w-[720px] md:flex-row md:items-center md:gap-6 md:px-6 lg:max-w-[1680px] lg:gap-8 lg:px-8">
            {/* Image */}
            <div className="absolute right-0 bottom-0 left-0 flex translate-y-[9%] justify-center md:relative md:flex-shrink-0 md:translate-y-[-30px]">
              <img
                src={Img22}
                alt="AI Pyramid"
                className="h-auto w-auto max-w-[320px] md:w-[340px] lg:h-auto lg:w-[767px]"
              />
            </div>
            {/* Text Content */}
            <div className="mx-auto mt-[77px] mb-[250px] md:mt-0 md:mb-0 md:flex-1 md:py-8">
              <h1 className="mb-6 text-2xl font-bold md:text-3xl md:text-[32px] lg:text-4xl">
                Intelligent Growth System
              </h1>
              <p className="mx-auto max-w-[367px] text-base leading-relaxed text-gray-300 md:mx-0 md:max-w-none md:text-sm lg:text-base">
                Zentrix builds a strong AI-powered foundation that grows layer
                by layer, just like a pyramid. Each level improves
                decision-making, data security, and user experience through
                smart automation and learning.
              </p>
            </div>
          </div>
        </div>
        {/* bottom two colunm row */}
        <div className="flex flex-col justify-center md:flex-row lg:gap-[24px]">
          <div className="2xs:h-[590px] mx-4 mt-[22px] h-auto gap-[24px] rounded-[12px] border border-white px-[18px] pt-5 md:h-[468px] md:w-[350px]">
            <h1 className="2xs:text-2xl font-bold md:text-[32px]">
              Decentralized AI Network
            </h1>
            <p className="2xs:w-[367px] 2xs:mt-6 w-auto text-[16px] font-normal md:w-[314px]">
              Our Pyramid AI network connects users and systems worldwide. It
              allows safe and transparent sharing of AI power, creating a
              globalw ecosystem that supports innovation, research, and
              performance.
            </p>
            <img
              src={Img9}
              alt=""
              className="2xs:mt-[85px] mt-auto h-auto w-auto md:mt-[42px] md:h-[158px] md:w-[314px] md:pb-[22px]"
            />
          </div>
          <div className="2xs:h-[590px] mx-4 mt-[22px] flex h-[300px] items-center gap-[24px] rounded-[12px] border border-white md:h-[468px] md:w-[350px]">
            <div className="py-auto 2xs:pt-[33px] 2xs:my-[181px] 2xs:h-[224px] mx-auto h-auto max-w-[316px] md:mx-[18px] md:my-[98px] md:pt-0">
              <h1 className="2xs:w-[316px] 2xs:text-2xl text-[20px] font-bold md:max-w-[314px] md:text-[32px] lg:text-[52px]">
                Future-Ready Utility Token
              </h1>
              <p className="xs:w-[367px] 2xs:mt-6 2xs:text-[16px] font-normal md:h-[168px] md:w-[314px]">
                Our Pyramid AI network connects users and systems worldwide. It
                Zentrix gives users access to advanced AI tools, smart trading
                options, and decentralized features. It’s designed for the
                future — secure, scalable, and always ready to evolve with new
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hiw;
