import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partnerships from "@/components/Partnerships";
import Donations from "@/components/Donations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      {/* <Partnerships /> */}
      <Donations />
      <Footer />
    </div>
  );
};

export default Index;
