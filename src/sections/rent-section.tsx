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
import { GrCatalog } from "react-icons/gr";

const Texts = [
  {
    spanTxt: "Catálogo Completo",
    text: "Explore nosso extenso catálogo de ferramentas, desde as básicas até as especializadas, garantindo que você tenha exatamente o que precisa para cada tarefa.",
  },
  {
    spanTxt: "Manutenção Garantida",
    text: "Todas as nossas ferramentas são mantidas regularmente para garantir desempenho e segurança. Conte com equipamentos confiáveis para cada etapa do seu projeto.",
  },
  {
    spanTxt: "Reserva Online Simples",
    text: "Faça sua reserva com facilidade através do nosso whatsapp. Planeje com antecedência e tenha suas ferramentas prontas quando você precisar delas.",
  },
  {
    spanTxt: "Suporte Técnico",
    text: "Nossa equipe de suporte técnico está à disposição para orientações sobre o uso correto das ferramentas e para solucionar qualquer dúvida que você possa ter.",
  },
];

const RentSection = () => {
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
    <section className="mx-auto w-full max-w-7xl">
      <Image
        src="/BrandsMD.svg"
        alt="Marcas"
        width={0}
        height={0}
        sizes="100vw"
        className="mx-auto hidden h-auto w-full max-w-4xl p-5 md:block"
      />
      <Image
        src="/BrandsSM.svg"
        alt="Marcas"
        width={0}
        height={0}
        sizes="100vw"
        className="mx-auto h-auto w-full max-w-4xl p-5 md:hidden"
      />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-5">
        <Image
          src="/Rent01.svg"
          alt="Banner Aluguel de ferramentas"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full max-w-xl"
        />
        <Image
          src="/Rent02.svg"
          alt="Banner Aluguel de ferramentas"
          width={0}
          height={0}
          sizes="100vw"
          className="hidden h-auto w-full max-w-xl lg:block"
        />
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-light text-primary">
            ALUGUEL DE FERRAMENTAS
          </span>
          <h2 className="text-center text-3xl font-bold">
            SUA SOLUÇÃO PRÁTICA E ECONÔMICA
          </h2>
        </div>
        <p className="mt-5 text-center font-light">
          Explore a liberdade de construir no seu próprio ritmo com o serviço de
          aluguel de ferramentas. Oferecemos uma ampla variedade de ferramentas
          e equipamentos de altíssima qualidade, prontos para atender às
          demandas do seu projeto.
        </p>

        <div className="my-8 hidden grid-cols-2 gap-2 lg:grid">
          {Texts.map((serviceText) => (
            <Card key={serviceText.spanTxt}>
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
          ))}
        </div>

        <Carousel
          setApi={setApi}
          className="pl-4 lg:hidden"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <div className="my-5 flex items-center justify-center gap-2">
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

        <Button
          variant={"default"}
          className="mx-auto flex h-14 w-full items-center gap-5 uppercase"
          size={"lg"}
        >
          Acessar catálogo completo <GrCatalog size={25} />
        </Button>
      </div>
    </section>
  );
};

export default RentSection;
