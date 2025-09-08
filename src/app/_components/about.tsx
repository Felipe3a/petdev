import Image from "next/image";
import about1Img from "../../../public/images/intercomunicador-no-portao-principal-edificio-residencial (1).jpg";
import about2Img from "../../../public/images/seguranca-de-carro-inteligente-desbloqueada-via-remix-digital-de-smartphone.jpg";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              A ADR System nasceu com o propósito de levar segurança, tecnologia
              e praticidade para residências, condominios e empresas. Atuamos
              com soluções modernas em segurança eletrônica e automação de
              portas e portões, sempre priorizando a qualidade e a satisfação
              dos nossos clientes. Nosso diferencial está no atendimento
              personalizado e na busca constante por inovação, oferecendo
              projetos sob medida que garantem eficiência, confiança e
              tranquilidade. Mais do que instalar equipamentos, acreditamos em
              construir relacionamentos de confiança, onde cada cliente sabe que
              pode contar conosco em todos os momentos.
            </p>

            <div className="flex gap-2">
              <a
                target="_blank"
                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#9b0e11] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
