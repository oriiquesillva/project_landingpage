import Carousel from "@/components/carousel/carousel";
import Contact from "@/components/contact/contact";
import Feature from "@/components/feature/feature";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Carousel />
      <Feature />
      <Contact />
      <Footer />
    </>
  );
}
