import Img8 from '../../../public/8.webp';
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer id='community' className="w-full px-4 my-[27px] mt-[60px] text-white">
      {/* inner centered container - consistent centering on all screens */}
      <div className="mx-auto w-full max-w-[1600px] flex justify-center rounded-3xl border overflow-hidden">
        {/* Image side (kept hidden below xl) */}
        <div className="hidden xl:flex flex-shrink-0">
          <img
            src={Img8}
            alt="footer image"
            className="max-w-[520px] w-full h-auto object-cover rounded-l-3xl"
          />
        </div>

        {/* content side */}
        <div className="flex-1 mx-auto max-w-[993px] px-6 py-[39px] text-center">
          <h1 className="hidden lg:block text-[52px] font-bold leading-tight">
            Powering intelligence and innovation with smart AI tools and real
            value — for users and developers.
          </h1>

          <h1 className="block lg:hidden text-2xl font-bold">
            Fuelling creativity with smart tools and real rewards — for fans and
            artists.
          </h1>

          <p className="mt-4 text-base md:text-[20px] font-normal">
            Modern | Fast | Connected
          </p>

          <div className="mx-auto mt-[23px] mb-4 max-w-[818px] gap-[14px] px-[12px]">
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
      </div>
    </footer>
  );
}

export default Footer;
