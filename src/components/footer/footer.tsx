import Img8 from '../../../public/8.webp';
const year = new Date().getFullYear();
function footer() {
  return (
    <footer className="font-md mx-4 my-[27px] mt-[60px] flex max-w-[1680px] justify-center rounded-3xl border text-white lg:mx-auto">
      {/* Image side */}
      <div className="hidden xl:block">
        <img
          src={Img8}
          alt="footer image"
          className="max-w-[520px] justify-start rounded-l-3xl"
        />
      </div>
      {/* content side */}
      <div className="mx-auto max-w-[993px] px-4 pt-[39px] text-center">
        <h1 className="hidden text-2xl font-bold lg:block lg:text-[52px]">
          Powering intelligence and innovation with smart AI tools and real
          value — for users and developers.
        </h1>
        <h1 className="block text-2xl font-bold lg:hidden">
          Fuelling creativity with smart tools and real rewards — for fans and
          artists.
        </h1>
        <p className="mt-4 text-base font-normal md:text-[20px]">
          Modern | Fast | Connected
        </p>
        <div className="mx-auto mt-[23px] mb-4 max-w-[818px] gap-[14px]  px-[24px]">
          <h3 className="text-[18px] font-[400] lg:text-[20px]">
            Contact: support@zentrix.io
          </h3>
          <h3 className="my-3.5 text-[18px] font-[400]">
            Follow Us: Twitter | Discord | Telegram
          </h3>
          <h4 className="text-[18px] font-[400]">
            Zentrix © {year} – All Rights Reserved
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default footer;
