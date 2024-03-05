import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuildMaster | Potencialize seu sucesso conosco!",
  description: "Descubra como a BuildMaster pode impulsionar seus projetos e negócios. Seu parceiro confiável para inovação e excelência, gerando resultados extraordinários.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}
      <Footer/></body>
    </html>
  );
}
