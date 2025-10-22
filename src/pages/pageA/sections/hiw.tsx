import Img2 from '/2.webp';
import Img9 from '/9.webp';
import Img22 from '/animate.gif';

function hiw() {
  return (
    <section id="how" className="py-12 md:py-16 lg:py-20 xl:pt-36">
      <div className="font-md text-white">
        {/* Upper Row - Intelligent Growth System */}
        <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1680px] ">
          <div className="relative mx-auto flex max-w-[398px] flex-col overflow-visible rounded-xl border border-white md:max-w-[720px] md:flex-row md:items-center lg:max-w-[1680px]">
            {/* Image - Mobile: Below, Desktop: Left */}
            <div className="order-2 flex justify-center px-4 pt-8 pb-6 md:order-1 md:px-0 md:py-2 lg:px-12 lg:py-16">
              <img
                src={Img22}
                alt="AI Pyramid"
                className="h-auto w-full max-w-[767px] xl:w-[767px]  translate-y-11 md:w-[340px] md:-translate-y-[30px] xl:-translate-y-[100px] lg:max-w-[500px] xl:max-w-[600px]"
              />
            </div>

            {/* Text Content - Mobile: Top, Desktop: Right */}
            <div className="order-1 pt-2 md:order-2 lg:px-12 lg:py-16">
              <h1 className="text-2xl leading-tight font-bold md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl">
                Intelligent Growth System
              </h1>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
                Zentrix builds a strong AI-powered foundation that grows layer
                by layer, just like a pyramid. Each level improves
                decision-making, data security, and user experience through
                smart automation and learning.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Two Column Row */}
        <div className="mx-auto mt-6 grid max-w-[398px] grid-cols-1 gap-6 px-4 md:max-w-[720px] md:grid-cols-2 md:px-6 lg:max-w-[1680px] lg:gap-8 lg:px-8">
          <div className="flex flex-col justify-between rounded-xl border border-white p-6 md:h-[468px] md:p-8 lg:p-10">
            <div className="">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                Decentralized AI Network
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-sm lg:mb-8 lg:text-lg">
                Our Pyramid AI network connects users and systems worldwide. It
                allows safe and transparent sharing of AI power, creating a
                global ecosystem that supports innovation, research, and
                performance.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <img
                src={Img9}
                alt="Decentralized Network"
                className="h-auto w-full max-w-[280px] pb-[22px] md:max-h-[150px] md:max-w-[314px] lg:max-w-[400px]"
              />
            </div>
          </div>

          <div className="flex h-[590px] flex-col justify-center rounded-xl border border-white p-6 md:h-[466px] md:p-8 lg:p-10">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Future-Ready Utility Token
            </h2>
            <p className="text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
              Our Pyramid AI network connects users and systems worldwide.
              Zentrix gives users access to advanced AI tools, smart trading
              options, and decentralized features. It's designed for the future
              — secure, scalable, and always ready to evolve with new
              technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hiw;
