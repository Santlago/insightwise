import Header from "@/components/Header";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { cookies } from "next/headers";
import Image from "next/image";
import { getUserProfile } from "../actions/user-actions";
import BorderedButton from "@/components/BorderedButton";
import Link from "next/link";

export default async function Profile() {
    const data = await getUserProfile();
    return (
        <>
            <Header />
            <main className="bg-black h-screen flex flex-col items-center gap-[7.5rem]" style={{ background: "var(--Sun-500, #9249FF)", boxShadow: "0px 300px 190px 0px #650FC8 inset" }}>
                <h1 className="font-bold text-[2rem] pt-[4rem]">Perfil da Empresa</h1>
                <div className="flex gap-[3.81rem] items-center">
                    <div className="flex flex-col gap-[3.19rem]">
                        <img src={data.avatar} alt="avatar" />
                        <div className="flex flex-col gap-[1rem]">
                            <BorderedButton title="Alterar Avatar" />
                            <Link href="/process">
                                <BorderedButton title="Processos Cadastrados" />
                            </Link>
                            <Link href="process/cadastro">
                                <BorderedButton title="Cadastrar Processo" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Card className="p-[1.5rem]">
                            <CardHeader>Dados da Empresa</CardHeader>
                            <CardBody className="w-[23.8rem]">
                                <Input label="Nome" variant="underlined" placeholder="Nome da empresa" isDisabled value={data.name} />
                                <Input label="Email" variant="underlined" placeholder="Email da empresa" isDisabled value={data.email} />
                                <Input label="CNPJ" variant="underlined" placeholder="CNPJ da empresa" isDisabled value={data.cnpj} />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    )
}