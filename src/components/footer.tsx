import React, { ReactNode } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./ui/button";

type ButtonSize = "sm" | "lg" | "icon" | "default" | null | undefined;

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  size: ButtonSize;
}

function SocialLink({ href, icon, size }: SocialLinkProps) {
  return (
    <Button size={size} variant={"outline"} asChild>
      <Link href={href} target="_blank">
        {icon}
      </Link>
    </Button>
  );
}

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <p className="group flex cursor-pointer items-center justify-center gap-1">
      <span
        className="footerLink hidden group-hover:block group-hover:animate-spin"
        style={{ animationIterationCount: 1, animationDuration: "0.3s" }}
      >
        <FaChevronRight size={12} />
      </span>
      {text}
    </p>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const departments = [
    "Construção e Reforma",
    "Ferramentas e Equipamentos",
    "Design e Projetos",
    "Materiais de Construção",
    "Segurança e Qualidade",
  ];

  const institucionals = [
    "Sobre a Build Master",
    "Termos e Condições",
    "Política de Troca e Devoluções",
    "Política de Segurança e Privacidade",
    "Política de Cookies",
  ];

  const helps = [
    "Como Utilizar Nossos Serviços",
    "Prazos e Entregas",
    "Métodos de Pagamento",
    "Programa de Parcerias",
    "Dúvidas Frequentes",
  ];

  return (
    <footer className="mx-auto w-full border-t border-input cursor-default items-center justify-center bg-white pt-8 shadow-xl md:px-0 3xl:max-w-7xl">
      <section className="flex flex-col items-center justify-around gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Build Master"
            width={200}
            height={50}
            style={{ objectFit: "contain" }}
            className="h-auto w-52"
          />
        </Link>

        <p className="text-sm">
          &copy; {currentYear} BuildMaster - Todos os direitos reservados.
        </p>

        <div className="flex gap-1">
          <SocialLink
            href="https://www.instagram.com/guibus_dev"
            icon={<FaInstagram size={20} />}
            size="icon"
          />
          <SocialLink
            href="https://github.com/gui-bus"
            icon={<FaGithub size={20} />}
            size="icon"
          />
          <SocialLink
            href="https://www.linkedin.com/in/gui-bus"
            icon={<FaLinkedinIn size={20} />}
            size="icon"
          />
        </div>
      </section>

      <div className="bg-zinc-200/60 px-4 py-6">
        <section className="mx-auto flex flex-col items-center justify-center gap-3 text-center text-xs md:flex-row">
          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Departamentos</h3>
            {departments.map((department, index) => (
              <FooterLink key={index} text={department} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Institucional</h3>
            {institucionals.map((institucional, index) => (
              <FooterLink key={index} text={institucional} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Dúvidas</h3>
            {helps.map((help, index) => (
              <FooterLink key={index} text={help} />
            ))}
          </div>
        </section>

        <section className="mx-auto flex flex-col items-center justify-center gap-2 pt-4 text-center text-xs">
          <h3 className="text-base font-medium uppercase">Atendimento</h3>
          <p>
            Horário de atendimento: 09:00 às 19:00 - Segunda a Sábado, horário
            de Brasília (Exceto domingo e feriados)
          </p>

          <div className="flex items-center justify-center gap-2">
            <h3 className="font-medium uppercase">Central SAC - </h3>
            <p>+55 (12) 99999-9999</p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <h3 className="font-medium uppercase">E-mail - </h3>
            <p>contato@buildmaster.com</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
