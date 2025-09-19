import ppa from "../../../public/images/LOGOPPAFABRICA2021.png";
import intelbras from "../../../public/images/Logomarca_Intelbras_verde.png";
import control_id from "../../../public/images/1694084013-control-id-logo.webp";
import jfl from "../../../public/images/electroelectronic-logo-jfl.jpg";
import ipec from "../../../public/images/trava_magnetica_m150_ipec_574_10_20220713132037.webp";
import hikvision from "../../../public/images/New-Hikvision-logo-1024x724-1.jpg";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

// Importar o logo da ADR System (assumindo que seja o mesmo usado no header ou uma versão específica)
// Certifique-se de que o caminho para o seu logo esteja correto
import adrLogo from "../../../public/images/Design sem nome (7).png"; // <-- Adicione esta linha
import { link } from "fs";

const brands = [
  
  { name: "Intelbras", logo: intelbras, link: "https://www.intelbras.com.br/" },
  { name: "ppa", logo: ppa, link: "https://www.ppa.com.br/" },
  { name: "Control-id", logo: control_id, link: "https://www.controlid.com.br/" },
  { name: "JFL", logo: jfl, link: "https://www.jfl.com.br/" },
  { name: "ipec", logo: ipec, link: "https://www.ipec.com.br/" },
  { name: "hikvision", logo: hikvision, link: "https://www.hikvision.com/pt-br/" },
];

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              >
                  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center"
  >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain "
                />
                </a>
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            {/* SUBSTITUÍMOS O H3 PELO COMPONENTE IMAGE */}
            <Image
              src={adrLogo} // Usamos o logo importado
              alt="Logo ADR System"
              width={250} // Ajuste a largura conforme desejar para o rodapé
              height={70} // Ajuste a altura proporcionalmente
              quality={100}
              className="mb-2" // Adicione uma margem inferior para separar do parágrafo
            />
            <p className="mb-4">Compromisso com a sua segurança.</p>
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank" href={`https://wa.me/5511937112315?text=Olá vim pelo site e gostaria de mais informações`}
             
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: adrsystemoperacional@gmail.com</p>
            <p>Telefone: (11) 9 3711-2315</p>
            
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4 ">
              <a href="https://www.instagram.com/adrsystemoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <FacebookLogo className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:shadow-lg" />
              </a>
              <a href="https://www.instagram.com/adrsystemoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <InstagramLogo className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:shadow-lg" />
              </a>
              <a href="https://www.youtube.com/@ADR_SYSTEM2025" target="_blank">
                <YoutubeLogo className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:shadow-lg" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
