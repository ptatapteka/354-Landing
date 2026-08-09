import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Catalog from "@/components/sections/Catalog";
import Advantages from "@/components/sections/Advantages";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import ShowTypes from "@/components/sections/ShowTypes";
import Portfolio from "@/components/sections/Portfolio";
import Gallery from "@/components/sections/Gallery";
import Booking from "@/components/sections/Booking";
import Reviews from "@/components/sections/Reviews";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Contacts from "@/components/sections/Contacts";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <Catalog />
      <Advantages />
      <Services />
      <HowItWorks />
      <ShowTypes />
      <Portfolio />
      <Gallery />
      <Booking />
      <Reviews />
      <Team />
      <FAQ />
      <Contacts />
    </Layout>
  );
};

export default Index;
