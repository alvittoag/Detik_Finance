// ** Import Components
import About from "../components/About";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import LatestUpdate from "../components/LatestUpdate";
import Mechanism from "../components/Mechanism";

const Home = () => {
  return (
    <main>
      <Hero />

      <About />

      <Mechanism />

      <div className="bg-secondary">
        <Brand />

        <LatestUpdate />
      </div>
    </main>
  );
};

export default Home;
