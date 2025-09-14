import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import motorImg from "../../../public/images/Design sem nome (10).png";
import logoImg from "../../../public/images/Design sem nome (7).png";
import bg from "../../../public/images/Design sem nome.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden  pt-20">
      {/* Background */}
      <Image
        src={bg}
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Imagem mobile */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src={motorImg}
          alt="Imagem mobile"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Conteúdo principal centralizado */}
      <div className="relative z-10 flex items-center min-h-screen px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
          
          {/* Lado esquerdo: texto + botão + logo */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              ADR System Sua segurança é o nosso compromisso!
            </h1>
            <p className="lg:text-lg">
              Proteger o que você mais valoriza vai além de instalar equipamentos.
              Nosso trabalho é oferecer tranquilidade, confiança e tecnologia de
              ponta para garantir a sua segurança e a de quem você ama.
            </p>

            <a
              target="_blank"
              href="https://wa.me/5511937112315?text=Olá vim pelo site e gostaria de mais informações"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8 w-32">
              <Image
                src={logoImg}
                alt="Logo ADR System"
                quality={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Lado direito: imagem */}
          <div className="hidden md:block relative h-[500px] lg:h-full">
            <Image
              src={motorImg}
              alt="Imagem do produto"
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
