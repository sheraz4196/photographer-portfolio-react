import "./App.css";
import About from "./components/homepage/about";
import CarouselGallery from "./components/homepage/carousel-gallery";
import Hero from "./components/homepage/hero";
import Navbar from "./components/homepage/navbar";
import Pricing from "./components/homepage/pricing";
import Services from "./components/homepage/services";
import Video from "./components/homepage/videro";

function App() {
  return (
    <>
      <section className="relative bg-[url('/hero-img.jpeg')] text-white bg-cover bg-left md:bg-center xl:bg-cover bg-no-repeat min-h-[600px]">
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
        <Navbar />
        <Hero />
      </section>
      <Services />
      <CarouselGallery />
      <About />
      <Pricing />
    </>
  );
}

export default App;
