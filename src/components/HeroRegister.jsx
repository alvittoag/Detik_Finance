// ** Import Assets
import assets from "../assets/assets";

const HeroRegister = () => {
  return (
    <div className="relative">
      <img src={assets.backgroundRegister} alt="register" className="w-full" />

      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <h1 className="font-[700] text-[48px] text-white ">Registrasi</h1>
      </div>
    </div>
  );
};

export default HeroRegister;
