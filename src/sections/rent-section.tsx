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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";

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

const catalogoFerramentas = [
  { nome: "Furadeira Elétrica", valorDiario: "R$ 20,00" },
  { nome: "Serra Circular", valorDiario: "R$ 25,00" },
  { nome: "Parafusadeira", valorDiario: "R$ 15,00" },
  { nome: "Lixadeira Orbital", valorDiario: "R$ 18,00" },
  { nome: "Martelete", valorDiario: "R$ 30,00" },
  { nome: "Compressor de Ar", valorDiario: "R$ 35,00" },
  { nome: "Esmerilhadeira", valorDiario: "R$ 28,00" },
  { nome: "Plaina Elétrica", valorDiario: "R$ 24,00" },
  { nome: "Nível a Laser", valorDiario: "R$ 15,00" },
  { nome: "Broca para Concreto", valorDiario: "R$ 5,00" },
  { nome: "Alicate de Pressão", valorDiario: "R$ 7,00" },
  { nome: "Martelo de Demolição", valorDiario: "R$ 40,00" },
  { nome: "Trena Eletrônica", valorDiario: "R$ 10,00" },
  { nome: "Lanterna Recarregável", valorDiario: "R$ 9,00" },
  { nome: "Máquina de Solda", valorDiario: "R$ 40,00" },
  { nome: "Chave de Impacto", valorDiario: "R$ 25,00" },
  { nome: "Betoneira", valorDiario: "R$ 45,00" },
  { nome: "Roçadeira", valorDiario: "R$ 22,00" },
  { nome: "Maçarico a Gás", valorDiario: "R$ 14,00" },
  { nome: "Marreta", valorDiario: "R$ 8,00" },
  { nome: "Cavadeira", valorDiario: "R$ 10,00" },
  { nome: "Escavadeira", valorDiario: "R$ 100,00" },
  { nome: "Martelo Demolidor", valorDiario: "R$ 40,00" },
  { nome: "Sugador de Solda", valorDiario: "R$ 12,00" },
  { nome: "Serra Mármore", valorDiario: "R$ 22,00" },
  { nome: "Tupia", valorDiario: "R$ 30,00" },
  { nome: "Serra Tico-Tico", valorDiario: "R$ 20,00" },
  { nome: "Lavadora de Alta Pressão", valorDiario: "R$ 32,00" },
  { nome: "Furadeira de Impacto", valorDiario: "R$ 25,00" },
  { nome: "Parafusadeira de Impacto", valorDiario: "R$ 18,00" },
  { nome: "Máquina de Corte a Laser", valorDiario: "R$ 120,00" },
  { nome: "Régua Vibratória", valorDiario: "R$ 50,00" },
  { nome: "Compactador de Solo", valorDiario: "R$ 60,00" },
  { nome: "Serra de Bancada", valorDiario: "R$ 55,00" },
  { nome: "Escada Telescópica", valorDiario: "R$ 20,00" },
  { nome: "Aspirador de Pó Industrial", valorDiario: "R$ 40,00" },
  { nome: "Carro de Mão", valorDiario: "R$ 15,00" },
  { nome: "Nível de Bolha", valorDiario: "R$ 8,00" },
  { nome: "Gerador de Energia", valorDiario: "R$ 50,00" },
  { nome: "Chave Inglesa", valorDiario: "R$ 6,00" },
  { nome: "Serrote", valorDiario: "R$ 10,00" },
  { nome: "Escada de Alumínio", valorDiario: "R$ 18,00" },
  { nome: "Carrinho de Ferramentas", valorDiario: "R$ 25,00" },
  { nome: "Trena a Laser", valorDiario: "R$ 12,00" },
  { nome: "Furadeira de Impacto sem Fio", valorDiario: "R$ 30,00" },
  { nome: "Martelo de Carpinteiro", valorDiario: "R$ 7,00" },
  { nome: "Tesoura de Podar", valorDiario: "R$ 9,00" },
  { nome: "Tábua de Carpinteiro", valorDiario: "R$ 12,00" },
  { nome: "Desempenadeira", valorDiario: "R$ 8,00" },
  { nome: "Rolo de Pintura", valorDiario: "R$ 5,00" },
  { nome: "Alicate Universal", valorDiario: "R$ 6,00" },
  { nome: "Soprador Térmico", valorDiario: "R$ 15,00" },
  { nome: "Trena de Fibra de Vidro", valorDiario: "R$ 14,00" },
  { nome: "Mangueira de Jardim", valorDiario: "R$ 4,00" },
  { nome: "Chave de Fenda", valorDiario: "R$ 3,00" },
  { nome: "Alicate de Corte", valorDiario: "R$ 5,00" },
  { nome: "Lanterna de Cabeça", valorDiario: "R$ 7,00" },
  { nome: "Raspador de Tinta", valorDiario: "R$ 9,00" },
  { nome: "Ferro de Solda", valorDiario: "R$ 10,00" },
  { nome: "Nível de Torpedo", valorDiario: "R$ 6,00" },
  { nome: "Lixa para Madeira", valorDiario: "R$ 3,00" },
  { nome: "Cinta Métrica", valorDiario: "R$ 4,00" },
  { nome: "Serra Copo", valorDiario: "R$ 8,00" },
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

      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-5 px-5 md:px-0">
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
          className="my-8 pl-4 lg:hidden"
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

        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant={"default"}
              className="mx-auto flex h-14 w-full items-center gap-5 uppercase"
              size={"lg"}
            >
              Acessar catálogo de ferramentas <GrCatalog size={25} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="mx-auto w-full 3xl:max-w-7xl">
            <DrawerHeader>
              <div className="flex items-center justify-around md:justify-between md:px-5">
                <DrawerTitle className="uppercase">
                  Catálogo de Ferramentas
                </DrawerTitle>

                <DrawerClose>
                  <Button variant="link" size={"icon"} className="text-black">
                    <IoCloseCircleOutline size={35} />
                  </Button>
                </DrawerClose>
              </div>
              <Separator className="my-5" />
              <DrawerDescription className="text-black">
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="text-lg font-bold">
                    Os valores apresentados correspondem ao custo diário de
                    aluguel.
                  </h2>
                  <p className="my-4">
                    Além disso, destacamos que oferecemos descontos especiais
                    para aluguéis de múltiplos dias. Para obter mais
                    informações, não hesite em entrar em contato conosco pelo
                    WhatsApp.
                  </p>
                </div>
                <ScrollArea className="h-80 w-full rounded-xl border p-4">
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {catalogoFerramentas.map((ferramenta, index) => (
                      <li key={index}>
                        <strong>{ferramenta.nome}</strong> -{" "}
                        {ferramenta.valorDiario}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button
                asChild
                variant={"default"}
                className="flex h-14"
                size={"lg"}
              >
                <Link
                  href={"/"}
                  className="flex items-center justify-center gap-5"
                >
                  Solicitar Aluguel via WhatsApp <MdWhatsapp size={25} />
                </Link>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default RentSection;
