// ** Import Package
import { Route, Routes } from "react-router-dom";

// ** Import Components
import Navbar from "./components/Navbar";

// ** Import Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
