// ** Import Assets
import assets from "../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="py-28 px-40 flex items-center gap-10 bg-secondary"
    >
      <div className="relative">
        <img src={assets.about} alt="about" />

        <div className=" p-5 absolute left-0 bottom-0 top-0 right-0 flex items-center">
          <div className="bg-[#D6D6D6B5] py-[15px] px-4 mx-auto rounded-full">
            <img src={assets.play} alt="play" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-primary font-[700] text-[20px]">
          About Detikfinance Business Plan Competition 2023
        </h1>

        <p className="text-[14px] font-[500] max-w-lg">
          Detikfinance kali ini akan memberikan ruang bagi startup untuk
          networking dan memamerkan produk inovasinya di hadapan venture capital
          dan angel investor. Acara ini juga akan menghadirkan para pengembang
          teknologi dan pelaku bisnis untuk memberikan edukasi dan inspirasi
          bagi masyarakat Indonesia dan teknofilia mengenai perkembangan
          teknologi di Indonesia.
        </p>

        <div className="flex gap-3 items-center">
          <p className="font-400 text-primary">Share</p>

          <div className="flex gap-2">
            <img src={assets.twitter} alt="twitter" />
            <img src={assets.whatsapp} alt="whatsapp" />
            <img src={assets.facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
