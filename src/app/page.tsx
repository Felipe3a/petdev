import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";

import { Footer } from "./_components/footer";
import Header from "./_components/header";
import { Fps } from "./_components/fps";  
import { AosInit } from "./_components/aos-init";

export default function Home() {
  return (
    <main>
      <AosInit />
    
<section id="home">  <Header /></section>

      <section id="hero"><Hero /></section>
      <section id="sobre"> <About /></section>
     <section id="servicos"> <Services /></section> 
      <section id="contato"><Footer /></section>
     <Fps/>        
      
    </main>
  );
}
