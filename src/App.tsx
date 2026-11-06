import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Story from "./components/Story";
import Branches from "./components/Branches";
import Gallery from "./components/Gallery";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import MobileActionBar from "./components/MobileActionBar";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-espresso"
      >
        Skip to menu
      </a>

      <Preloader onDone={() => setBooted(true)} />
      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero ready={booted} />
        <MenuSection />
        <Story />
        <Branches />
        <Gallery />
        <Offers />
        <Contact />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
