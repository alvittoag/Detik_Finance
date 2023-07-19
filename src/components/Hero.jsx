// ** Import Elements
import Button from "../elements/Button";

// ** Import Library
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main id="hero" className="bg-hero">
      <div className="flex flex-col justify-center px-8  sm:text-center sm:flex sm:flex-col sm:items-center  md:px-0 md:flex md:flex-col md:items-center md:justify-center h-full text-white  md:text-center space-y-7">
        <article className="space-y-3">
          <h5 className="text-[18px] md:text-[24px] font-semibold">
            Detikfinance Business Plan Competition 2023
          </h5>

          <h1 className="text-[36px] md:text-[48px] font-[800]">
            EMPOWERING INDONESIA STARTUP
          </h1>

          <p className="text-[12px] md:text-[14px] font-semibold md:w-[650px] lg:w-[864px] mx-auto">
            Detikfinance memberikan ruang kepada para startup di Indonesia untuk
            menunjukkan, serta mempromosikan brand mereka untuk mendapatkan
            perhatian dari venture capital atau angel investor
          </p>
        </article>

        <div className="w-[221px] md:w-full">
          <Link to="/register">
            <Button> Daftarkan startup kamu</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
