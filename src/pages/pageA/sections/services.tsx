import Img3 from '/3.webp';
import Img4 from '/4.webp';
import Img5 from '/5.webp';
import vdo5 from '/animation5.mp4';
import vdo4 from '/animation4.mp4';
import vdo3 from '/animation3.mp4';

type Card = {
  video: string;
  title: string;
  text: string;
};

const cards: Card[] = [
  {
    video: vdo3,
    title: '1. AI Trading Engine',
    text: 'Our AI system studies live market data and helps users make better trading choices with accurate predictions and quick results.',
  },
  {
    video: vdo4,
    title: '2. Secure Staking System',
    text: 'Stake Zentrix tokens easily and earn rewards. Pyramid AI keeps every transaction safe and transparent for all users.',
  },
  {
    video: vdo5,
    title: '3. Decentralized Data Network',
    text: 'Zentrix connects people through a smart and secure data system that protects privacy while allowing smooth global communication',
  },
];

function Services() {
  return (
    <section id="services" className="text-white">
      <div className="mx-3 items-center justify-center text-center lg:mx-[120px]">
        <h1 className="text-[32px]">Our Smart Services</h1>
        <p className="mt-6 text-[20px]">
          Zentrix brings powerful AI and blockchain features together to make
          your digital experience faster, safer, and smarter.
        </p>
      </div>
      <div className="font-md mx-auto max-w-[1920px] p-4 text-white">
        {/* Mobile */}
        <div className="flex flex-col items-center justify-center gap-6 md:hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative flex max-w-[544px] flex-col items-center rounded-2xl border-2 border-white/50 bg-black/30 p-4 text-center text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:shadow-lg hover:shadow-white/20"
            >
              <video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className="lg:max-w-[512px]"
              />
              <h1 className="mt-4 mb-6 text-2xl font-bold">{card.title}</h1>
              <p className="text-base font-normal">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Horizontal scroll */}
        <div className="hidden overflow-x-auto md:block lg:hidden">
          <div className="flex gap-6 pb-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative flex max-w-[400px] min-w-[400px] flex-col items-center rounded-2xl border-2 border-white/50 bg-black/30 p-4 text-center text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:shadow-lg hover:shadow-white/20"
              >
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
                <h1 className="mt-4 mb-6 text-2xl font-bold">{card.title}</h1>
                <p className="text-base font-normal">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop*/}
        <div className="hidden items-center justify-center gap-6 px-5 lg:mt-[38px] lg:flex xl:px-[100px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative flex w-full flex-col items-center rounded-2xl border-2 border-white/50 bg-black/50 p-4 text-center text-white shadow-lg backdrop-blur-lg transition-all duration-900 hover:border-white/70 hover:shadow-xl hover:shadow-[#03cdc9]"
            >
              <video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className=""
              />
              <h1 className="mt-4 mb-6 text-lg font-bold xl:text-[25px]">
                {card.title}
              </h1>
              <p className="text-base font-normal xl:text-[20px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
