import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import motorImg from "../../../public/images/Design sem nome (10).png";
import logoImg from "../../../public/images/Design sem nome (7).png";
import bg from "../../../public/images/Design sem nome.png"
import Image from "next/image";

export function Hero() {
  return (
    <section className=" text-white relative overflow-hidden">
        <Image
    src={bg}
    alt="Background"
    fill
    sizes="100vw"
    className="object-cover"
    priority
  />
  <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
    ...
  </div>
      <div>
        <Image
          src={motorImg}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              ADR System Sua segurança é o nosso compromisso!
            </h1>
            <p className=" lg:text-lg" data-aos="fade-right">
              Proteger o que você mais valoriza vai além de instalar
              equipamentos. Nosso trabalho é oferecer tranquilidade, confiança e
              tecnologia de ponta para garantir a sua segurança e a de quem você
              ama.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={logoImg}
                    alt="Foto do gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={motorImg}
              alt="Foto do dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
