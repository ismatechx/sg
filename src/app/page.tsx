import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Treatments />
        <About />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
