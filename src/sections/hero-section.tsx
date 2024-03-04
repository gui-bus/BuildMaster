import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MdWhatsapp } from "react-icons/md";
import { FcMenu } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";

const Links = [
  {
    text: "Serviços",
    href: "/#Services",
  },
  {
    text: "Aluguel",
    href: "/#Rent",
  },
  {
    text: "Contato",
    href: "/#Contact",
  },
  {
    text: "FAQ",
    href: "/#FAQ",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-[url('/Banner.svg')] bg-cover bg-center bg-no-repeat pb-10 3xl:rounded-b-2xl">
      <header className="mx-auto w-full max-w-sm md:max-w-2xl lg:max-w-5xl">
        <Card className="rounded-b-[3rem] rounded-t-none drop-shadow-xl">
          <CardContent className="flex items-center justify-evenly p-3">
            <Image
              src="/Logo.svg"
              alt="BuildMaster"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-32 object-cover md:w-44"
            />

            <nav className="hidden items-center justify-center gap-2 lg:flex">
              {Links.map((link) => (
                <Button asChild variant={"ghost"} key={link.text}>
                  <Link
                    href={link.href}
                    className="font-light transition-all duration-300 hover:font-bold"
                  >
                    {link.text}
                  </Link>
                </Button>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-2">
              <Button
                asChild
                variant={"default"}
                className="hidden h-14 md:flex"
                size={"lg"}
              >
                <Link
                  href={"/"}
                  className="flex items-center justify-center gap-5"
                >
                  Solicitar Orçamento <MdWhatsapp size={25} />
                </Link>
              </Button>

              <Button
                variant={"ghost"}
                size={"icon"}
                asChild
                className="md:hidden"
              >
                <Link href={"/"}>
                  <MdWhatsapp size={25} />
                </Link>
              </Button>

              <Sheet>
                <SheetTrigger asChild className="hidden md:flex lg:hidden">
                  <Button variant={"outline"} className="size-14 p-0">
                    <FcMenu size={30} />
                  </Button>
                </SheetTrigger>

                <SheetTrigger asChild className="md:hidden">
                  <Button variant={"ghost"} className="size-14 p-0">
                    <FcMenu size={30} />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <Image
                        src="/Logo.svg"
                        alt="BuildMaster"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto object-cover w-44 mx-auto"
                      />
                    </SheetTitle>
                    <SheetDescription className="pt-5">
                      <div className="flex flex-col items-center justify-center">
                        {Links.map((link) => (
                          <SheetClose key={link.text} asChild>
                            <div className="w-full">
                              <Link
                                href={link.href}
                                className="w-full text-lg font-light transition-all duration-300 hover:font-bold"
                              >
                                {link.text}
                              </Link>
                              <Separator className="my-3 w-full" />
                            </div>
                          </SheetClose>
                        ))}
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </CardContent>
        </Card>
      </header>

      <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-center gap-5 p-5 text-center text-white">
        <h1 className="max-w-4xl text-2xl font-bold md:text-5xl">
          CONSTRUA SEUS SONHOS COM UMA PARCERIA DE CONFIANÇA
        </h1>
        <p className="font-light">
          Faça seus sonhos se tornarem realidade conosco! Oferecemos serviços
          excepcionais de construção e aluguel de ferramentas e máquinas a
          preços diários convenientes.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
