import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-primary mt-3 text-white px-11 py-8 space-y-8">
      <img src={assets.logo2} alt="logo" />

      <div className="space-y-6">
        <div className="flex justify-between">
          <p className="max-w-3xl">
            Detikfinance memberikan ruang kepada para startup di Indonesia untuk
            menunjukkan, serta mempromosikan brand mereka untuk mendapatkan
            perhatian dari venture capital atau angel investor
          </p>

          <div className="flex gap-6">
            <img src={assets.twitterOutline} alt="twitter" />
            <img src={assets.instagramOutline} alt="instagram" />
            <img src={assets.facebookOutline} alt="facebook" />
          </div>
        </div>

        <hr />

        <p className="font-[400] text-[12px]">
          © {new Date().getFullYear()} Detikcom. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
