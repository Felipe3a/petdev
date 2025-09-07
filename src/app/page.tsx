import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";
import Header from "./_components/header";
import { AosInit } from "./_components/aos-init";

export default function Home() {
  return (
    <main>
      <AosInit />
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
