// ** Import Elements
import Button from "../elements/Button";

// ** Import Constans
import { sliderImages } from "../constants";

// ** Import Utils
import { settings } from "../utils/set-slider";

// ** Import Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="py-24 bg-secondary space-y-12">
      <h5 className="text-primary max-w-xl font-[700] text-[18px] mx-auto text-center">
        Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor Serta
        Menjadi Narasumber di Detikfinance
      </h5>

      <Slider {...settings} className="overflow-hidden">
        {sliderImages.map((slider, index) => (
          <div key={index}>
            <img src={slider.image} alt={slider.name} />
          </div>
        ))}
      </Slider>

      <Link to="/register" className="flex justify-center">
        <Button className="mx-auto">Daftarkan startup Kamu</Button>
      </Link>
    </div>
  );
};

export default Brand;
