// ** Import Package
import { Route, Routes } from "react-router-dom";

// ** Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ** Import Pages
import Home from "./pages/Home";
import Registrasi from "./pages/Registrasi";

const App = () => {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registrasi />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
