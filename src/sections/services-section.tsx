"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdDiscount } from "react-icons/md";

const Texts = [
  {
    spanTxt: "Equipe Especializada",
    text: "Nossa equipe altamente qualificada está pronta para assumir o seu projeto. Do planejamento à execução, garantimos profissionalismo.",
  },
  {
    spanTxt: "Orçamento Transparente",
    text: "Receba um orçamento claro e detalhado antes de começarmos a trabalhar, para que você saiba exatamente o que esperar.",
  },
  {
    spanTxt: "Agilidade na Locação",
    text: "Nosso processo de locação é rápido e simples. Escolha o que precisa, por quanto tempo e tenha as ferramentas certas quando e onde precisar.",
  },
  {
    spanTxt: "Flexibilidade de Escolha",
    text: "Oferecemos a flexibilidade de optar pelos nossos serviços completos ou pelo aluguel de ferramentas, de acordo com às suas necessidades.",
  },
];

const ServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 p-5">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-light text-primary">SERVIÇOS</span>
          <h2 className="text-center text-3xl font-bold">
            CONSTRUÇÃO DESCOMPLICADA
          </h2>
        </div>
        <p className="text-center font-light">
          Bem-vindo ao BuildMaster, onde a realização do seu projeto é
          simplificada ao máximo. Nossa abordagem é focada em oferecer a você
          opções flexíveis para atender às suas necessidades de construção.
        </p>

        <Carousel
          setApi={setApi}
          className="pl-4"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <div className="mb-5 flex items-center justify-center gap-2">
            <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
              <CarouselPrevious />
            </div>

            <p className="text-sm font-light">
              {current}/{count}
            </p>

            <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="w-full max-w-sm cursor-grab active:cursor-grabbing md:max-w-full">
            {Texts.map((serviceText) => (
              <CarouselItem key={serviceText.spanTxt} className="lg:basis-1/2">
                <Card>
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:text-start">
                      <Image
                        src="/Check.svg"
                        alt="CheckMark"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="size-20"
                      />
                      <div>
                        <span className="text-xl font-bold">
                          {serviceText.spanTxt}
                        </span>
                        <p className="font-light">{serviceText.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="bg-[url('/PromoBanner.svg')] bg-cover bg-center bg-no-repeat py-10 3xl:rounded-2xl">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <div>
            <h2 className="mx-auto mb-3 w-fit rounded-bl-3xl rounded-tr-3xl border px-4 py-2 text-3xl font-black text-primary md:text-4xl">
              OFERTA EXCLUSIVA
            </h2>
            <p className="text-2xl font-light">
              SEU PROJETO DOS SONHOS COMEÇA AQUI
            </p>
          </div>

          <div className="flex items-center justify-center gap-5">
            <Image
              src="/PromoIMG01.svg"
              alt="Promoção"
              width={0}
              height={0}
              sizes="100vw"
              className="size-40"
              draggable="false"
            />

            <Image
              src="/PromoIMG02.svg"
              alt="Promoção"
              width={0}
              height={0}
              sizes="100vw"
              className="size-36"
              draggable="false"
            />
          </div>

          <Button
            asChild
            variant={"default"}
            className="mx-auto h-14 w-full max-w-sm md:max-w-lg"
            size={"lg"}
          >
            <Link
              href={"/"}
              className="flex items-center justify-center gap-5 uppercase"
            >
              Garantir Oferta Especial <MdDiscount size={25} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
