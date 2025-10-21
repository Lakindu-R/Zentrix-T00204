import Img8 from '../../../public/8.webp';
function footer() {
  return (
    <footer className="font-md mx-auto mt-[60px] flex max-w-[1680px] justify-center rounded-3xl border text-white">
      {/* Image side */}
      <div className="hidden lg:block">
        <img
          src={Img8}
          alt="footer image"
          className="max-w-[520px] justify-start rounded-l-3xl"
        />
      </div>
      {/* content side */}
      <div className="mx-auto max-w-[993px] pt-[39px] text-center">
        <h1 className="text-2xl font-bold lg:text-[52px]">
          Powering intelligence and innovation with smart AI tools and real
          value — for users and developers.
        </h1>
        <p className="mt-4 text-[20px] font-normal">
          Modern | Fast | Connected
        </p>
        <div className="mx-auto mt-[23px] max-w-[818px] gap-[14px] font-normal">
          <h3 className="text-[20px]">Contact: support@zentrix.io</h3>
          <h3 className="my-3.5 text-[18px]">
            Follow Us: Twitter | Discord | Telegram
          </h3>
          <h4 className="text-[18px]">Zentrix © 2025 – All Rights Reserved</h4>
        </div>
      </div>
    </footer>
  );
}

export default footer;
