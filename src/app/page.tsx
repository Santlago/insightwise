import Footer from "@/components/Footer";
import { Button } from "@nextui-org/button";
import { ChevronDown, Dot } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="bg-[url('/landingpage.png')] bg-cover h-screen  p-[6rem]">
          <div className="h-full flex items-center">
            <div className="w-[30rem] flex flex-col gap-[1.22rem]">
              <Image src="/logo.png" alt="logo" width={1841} height={343} />
              <p className="font-bold text-[1.25rem]">
                Potencialize a Experiência de seus funcionários. Transformando Dados em Insights através da mais nova ferramenta da Plusoft!
              </p>
            </div>
          </div>
          <a href="#second-section" className="mt-auto text-white flex flex-col justify-center items-center">
            Veja mais
            <ChevronDown />
          </a>
        </section>
        <section id="second-section" className="bg-[#33066F]  flex">
          <div className="w-7/12 pl-[6rem] flex flex-col gap-[2.75rem]">
            <h1 className="font-bold text-[2.5rem] pt-[5.8rem] text-end">Sobre Nós</h1>
            <p className="text-[1.75rem]">Transformamos dados em insights valiosos para melhorar a experiência nas plataformas digitais desenvolvidas pela Plusoft. Com nossa tecnologia avançada de análise de dados e feedback funcional, capacitamos as empresas a entender e otimizar a jornada dos funcionários, impulsionando a eficiência e a produtividade</p>
          </div>
          <div className="5/12 h-full">
            <Image src="/about.png" alt="about" width={340} height={374} className="h-[30rem] w-[27rem]" />
          </div>
        </section>
        <section className="bg-black">
          <h1 className="py-[3.19rem] pl-[3.62rem] font-bold text-[2.54rem]">Benefícios Principais</h1>
          <div className="flex flex-col px-[6.25rem] gap-[3.61rem] font-semibold text-[1.375rem] pb-[6.6rem]">
            <div className="flex items-center"><Dot size={48} strokeWidth={5} />Melhoria da Experiência do Funcionário - Identifique áreas de oportunidade para aprimorar a usabilidade e eficiência da plataforma.</div>
            <div className="flex items-center"><Dot size={48} strokeWidth={5} />Otimização de Processos Internos - Personalize estratégias de desenvolvimento com base no comportamento e necessidades reais dos funcionários.</div>
            <div className="flex items-center"><Dot size={48} strokeWidth={5} />Tomada de Decisão Baseada em Dados - Transforme dados em insights acionáveis para impulsionar o desempenho e o sucesso da equipe.</div>
          </div>
        </section>
        <section className="bg-[#9249FF]">
          <h1 className="font-bold text-[2.5rem] text-center py-[3.62rem]">Mas como funciona?</h1>
          <div className="flex justify-between px-[7rem] pb-[4rem]">
            <p className="text-[2rem] font-semibold w-[33rem]">Nossa aplicação irá capturar as ações, como cliques e scroll, que o usuário realizar</p>
            <Image src="/how1.png" alt="how1" width={700} height={700} className="w-[18rem] h-[17rem]" />
          </div>
        </section>
        <section className="bg-[#8724FF]">
          <div className="flex justify-between px-[7rem] py-[7rem] items-center">
            <Image src="/how2.png" alt="how1" width={817} height={683} className="w-[21rem] h-[17rem]" />
            <p className="text-[2rem] font-semibold w-[33rem]">Então, um relatório é automaticamente gerado, apontando insights valiosos e um feedback de sua plataforma   </p>
          </div>
        </section>
        <section className="bg-[#7913EE]">
          <div className="flex justify-between px-[7rem] py-[7rem] items-center">
            <p className="text-[2rem] font-semibold w-[33rem]">Por fim, você poderá ver este relatório de forma mais precisa através de nosso man</p>
            <Image src="/how3.png" alt="how1" width={671} height={570} className="w-[21rem] h-[17rem]" />
          </div>
        </section>
        <section className="flex bg-[#33066F]">
          <div className="w-5/12 flex justify-center">
            <Image src="/man.png" alt="man" width={612} height={918} className="max-h-[42rem] max-w-[38rem] object-contain" />
          </div>
          <div className="flex flex-col justify-center items-center w-5/12 gap-[5.2rem]">
            <h1 className="text-[2.9rem] font-semibold text-center">Tá esperando o que?</h1>
            <p className="font-semibold text-[2.3rem]">Potencialize sua plataforma Plusoft com o InsightWise e obtenha respostas precisas.</p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
