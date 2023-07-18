// ** Import Elements
import Button from "../elements/Button";

// ** Import Constans
import { sliderImages } from "../constants";

// ** Import Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <main className="py-24 space-y-12">
      <h5 className="text-primary max-w-xl font-[700] text-[18px] mx-auto text-center">
        Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor Serta
        Menjadi Narasumber di Detikfinance
      </h5>

      <Slider {...settings} className="overflow-hidden">
        {sliderImages.map((slider, index) => (
          <div key={index} className="mx-auto">
            <img src={slider.image} />
          </div>
        ))}
      </Slider>

      <Link to="/register" className="flex justify-center">
        <Button className="mx-auto">Daftarkan startup Kamu</Button>
      </Link>
    </main>
  );
};

export default Brand;
