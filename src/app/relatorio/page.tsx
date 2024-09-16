import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Dot } from "lucide-react";

export default function Relatorio() {
    return (
        <>
            <main>
                <Header />
                <div className="min-h-screen">
                    <h1 className="text-[#7913EE] font-semibold text-[2rem] text-center mt-[6rem] mb-[4rem]">Relatório</h1>
                    <div className="flex justify-center">
                        <Card className="mx-[5rem] max-w-[70rem]  mb-[6rem]">
                            <CardHeader>Análise da Plataforma Online de ERP (07/08/2024 a 14/08/2024)</CardHeader>
                            <Divider />
                            <CardBody className="flex flex-col gap-[2rem]">
                                <div>
                                    <ul>
                                        <li className="flex">Página Inicial: A página inicial foi a área mais visitada, com alto tempo de permanência, indicando que os usuários a consideram um ponto de partida útil para navegar na plataforma.</li>
                                        <li className="flex">Seção de Vagas: A seção de vagas teve um grande número de cliques, o que demonstra o interesse dos funcionários em buscar currículos enviados à empresa recentemente.</li>
                                        <li className="flex">Seção de Benefícios: A seção de benefícios também recebeu um bom número de cliques, sugerindo que os usuários estão buscando informações sobre os benefícios oferecidos pela empresa.</li>
                                        <li className="flex">Seção de Treinamento: A seção de treinamento registrou um tempo de permanência relativamente alto, indicando o interesse dos usuários em aprimorar suas habilidades.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[1.3rem] text-[#7913EE]">Recomendações</h1>
                                    <p>Com base na análise do mapa de calor, o InsightWise recomenda as seguintes ações:</p>
                                    <ul>
                                        <li className="flex">Destacar as vagas mais relevantes: Sua plataforma mostra quais vagas estão sendo buscadas pela empresa; todavia, seria interessante mostrar quais vagas estão em maior necessidade.</li>
                                        <li className="flex">Fornecer mais informações sobre os benefícios: A plataforma pode oferecer mais informações sobre os benefícios da empresa, incluindo vídeos, depoimentos de funcionários e FAQs.</li>
                                        <li className="flex">Criar mais conteúdo de treinamento: A plataforma pode desenvolver mais conteúdo de treinamento para atender às necessidades dos usuários, como cursos online, tutoriais e webinars.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[1.3rem] text-[#7913EE]">Observações</h1>
                                    <ul>
                                        <li className="flex">A área de manejo de horários apresentou uma média de atraso de 2 minutos (após o clique na função) durante o período de análise da plataforma. Seria interessante observar o que está acontecendo com o time para obter explicações do padrão de comportamento.</li>
                                        <li className="flex">Nenhum funcionário clicou na sessão de avisos do gerente. Seria interessante rever a necessidade de tal área em sua aplicação.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[1.3rem] text-[#7913EE]">Próximos Passos</h1>
                                    <p>O InsightWise continuará monitorando o comportamento dos usuários na plataforma online de ERP. Por enquanto, observamos a necessidade de aprimoramento nas áreas de vagas disponíveis, benefícios e treinamento, visto que seus funcionários estão constantemente acessando estas áreas e, por sua vez, mostram-se importantes para a equipe.</p>
                                </div>
                            </CardBody>
                            <Divider />
                            <CardFooter>Equipe InsightWise</CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}