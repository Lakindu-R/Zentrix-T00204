import Img1 from '/1.webp';
function hero() {
  return (
    <section className="">
      <div className="w-full max-w-[1920px]">
        <div className="relative flex">
          <h1 className="w-[112px] text-[128px] text-white">
            Power the Future with Zentrix
          </h1>
          <img src={Img1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default hero;
