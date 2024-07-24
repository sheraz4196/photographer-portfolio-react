import "./App.css";
import CarouselGallery from "./components/homepage/carousel-gallery";
import Hero from "./components/homepage/hero";
import Navbar from "./components/homepage/navbar";
import Services from "./components/homepage/services";

function App() {
  return (
    <>
      <section className="relative bg-[url('/hero-img.jpeg')] text-white bg-cover bg-left md:bg-center xl:bg-cover bg-no-repeat min-h-[600px]">
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
        <Navbar />
        <Hero />
        <Services />
        <CarouselGallery />
      </section>
    </>
  );
}

export default App;
