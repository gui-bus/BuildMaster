import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question:
      "Como a equipe da Build Master pode auxiliar no meu projeto de construção?",
    answer:
      "Estamos aqui para tornar o seu projeto uma realidade! Desde a consultoria inicial até a execução, nossa equipe especializada oferece suporte em todas as fases do seu projeto. Entre em contato para discutir suas necessidades específicas e descubra como podemos ser seu parceiro confiável na construção dos seus sonhos.",
  },
  {
    id: "item-2",
    question:
      "Além do aluguel de ferramentas, quais outros serviços a Build Master oferece?",
    answer:
      "Oferecemos uma gama abrangente de serviços, desde construção e renovação até design e gerenciamento de projetos. Além do aluguel de ferramentas e máquinas, nossa equipe está pronta para proporcionar soluções integradas para atender às suas necessidades de construção. Explore nossos serviços para descobrir como podemos contribuir para o sucesso do seu projeto.",
  },
  {
    id: "item-3",
    question:
      "Existem programas de fidelidade ou benefícios para clientes frequentes?",
    answer:
      "Sim, valorizamos a lealdade dos nossos clientes! Oferecemos programas de fidelidade que proporcionam benefícios exclusivos, descontos especiais e acesso a eventos promocionais. Entre em contato no nosso WhatsApp para obter mais detalhes sobre como você pode aproveitar ao máximo essas vantagens como cliente frequente.",
  },
  {
    id: "item-4",
    question:
      "Quais medidas a Build Master adota para garantir a qualidade e segurança dos equipamentos?",
    answer:
      "Priorizamos a qualidade e segurança em todos os aspectos. Nossos equipamentos passam por rigorosas verificações de manutenção e inspeções regulares para garantir seu desempenho ideal. Além disso, seguimos os mais altos padrões de segurança do setor para proporcionar tranquilidade a você durante o uso dos nossos equipamentos.",
  },
  {
    id: "item-5",
    question:
      "Como posso entrar em contato com a Build Master para esclarecer dúvidas adicionais?",
    answer:
      "Ficamos felizes em ajudar! Você pode entrar em contato conosco através do nosso WhatsApp. Nossa equipe está pronta para fornecer informações adicionais e esclarecer qualquer dúvida que você possa ter.",
  },
  {
    id: "item-6",
    question:
      "A Build Master oferece serviços personalizados para projetos residenciais?",
    answer:
      "Com certeza! Nosso compromisso com a excelência se estende a projetos residenciais. Entre em contato para discutir suas ideias e requisitos específicos. Estamos prontos para criar soluções personalizadas que atendam às suas necessidades residenciais com a qualidade e expertise que você merece.",
  },
];

const FaqSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center p-5">
      <h3 className="text-center text-3xl font-bold">
        PERGUNTAS FREQUENTES (FAQ)
      </h3>

      <div className="w-full py-5">
        <Accordion type="single" collapsible className="w-full rounded-lg">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
