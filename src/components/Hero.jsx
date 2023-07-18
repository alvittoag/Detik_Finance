// ** Import Assets
import assets from "../assets/assets";

// ** Import Elements
import Button from "../elements/Button";

const Hero = () => {
  return (
    <div className="relative">
      <img src={assets.backgroundLarge} alt="banner" className="w-full" />

      <div className="absolute top-[370px] right-0 left-0">
        <div className="text-white w-[924px] mx-auto text-center space-y-7">
          <div className="space-y-3">
            <h5 className="text-[24px] font-semibold">
              Detikfinance Business Plan Competition 2023
            </h5>

            <h1 className="text-[48px] font-[800]">
              EMPOWERING INDONESIA STARTUP
            </h1>

            <p className="text-[14px] font-semibold w-[864px] mx-auto">
              Detikfinance memberikan ruang kepada para startup di Indonesia
              untuk menunjukkan, serta mempromosikan brand mereka untuk
              mendapatkan perhatian dari venture capital atau angel investor
            </p>
          </div>

          <Button> Daftarkan startup kamu</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
