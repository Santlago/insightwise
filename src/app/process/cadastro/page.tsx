import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

export default function Cadastro() {
    return (
        <>
            <main>
                <Header />
                <div className="h-screen">
                    <h1 className="text-[#7913EE] font-semibold text-[2rem] text-center mt-[6rem] mb-[4rem]">Cadastrar processo</h1>
                    <div className="flex justify-center">
                        <Card className="w-[30rem]">
                            <CardBody className="flex flex-col gap-[2rem]">
                                <Input label="Nome" isRequired placeholder="Nome do processo" />
                                <Input label="Processo" isRequired placeholder="Processo" />
                                <Button color="primary">Cadastrar</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}