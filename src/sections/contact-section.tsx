import { RiMapPin2Fill } from "react-icons/ri";
import { MdWhatsapp } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="bg-[url('/Contact.svg')] bg-cover bg-center bg-no-repeat w-full h-auto py-10 md:p-10 lg:rounded-xl max-w-7xl mx-auto my-5">
      <div className="w-full flex flex-col md:flex-row max-w-7xl mx-auto text-white items-center justify-around px-5 md:px-0">
        <div className="flex flex-col">
          <span className="uppercase font-light">Localização e Contato</span>
          <h3 className="text-5xl font-black">BUILD MASTER</h3>
        </div>

        <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-4 bg-black bg-opacity-60 p-5 rounded-xl">
          <div className="flex items-center gap-4">
            <RiMapPin2Fill className="text-primary w-12 h-12 md:w-9 md:h-9" />
            <p className="font-light">
              Avenida dos Pinheiros, 394 - Parque Industrial, SJC - SP
            </p>
          </div>

          <div className="flex items-center gap-4">
            <MdWhatsapp className="text-primary w-9 h-9" />
            <p className="font-light">+55 (12) 99999-9999</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
