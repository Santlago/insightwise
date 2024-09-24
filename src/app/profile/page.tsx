import Header from "@/components/Header";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { cookies } from "next/headers";
import Image from "next/image";
import { getUserProfile, uploadAvatar } from "../actions/user-actions";
import BorderedButton from "@/components/BorderedButton";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import { ArrowUpFromLine, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default async function Profile() {

    const data = await getUserProfile();

    async function handleUpload(formData: FormData) {
        "use server"
        const success = await uploadAvatar(formData)
        if (!success) {
            console.log('Erro ao enviar')
        }
        redirect('/profile')

    }

    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col items-center gap-[7.5rem] pb-[5rem]" style={{ background: "var(--Sun-500, #9249FF)", boxShadow: "0px 300px 190px 0px #650FC8 inset" }}>
                <h1 className="font-bold text-[2rem] pt-[4rem]">Perfil da Empresa</h1>
                <div className="flex gap-[3.81rem] items-center">
                    <div className="flex flex-col gap-[3.19rem] items-center">
                        <img src={data.avatar} alt="avatar" className="w-[10rem] h-[10rem] rounded-[20rem]" />
                        <div className="flex flex-col gap-[1rem] justify-center">
                            <Card>
                                <CardBody>
                                    <form action={handleUpload} className="flex items-center">
                                        <div>
                                            <p>Atualizar Avatar</p>
                                            <Input
                                                type="file"
                                                name="file"
                                                id="file"
                                                isRequired
                                                endContent={
                                                    <Button type="submit" color="primary" className="text-white font-bold text-[1rem]">Enviar</Button>
                                                } />
                                        </div>
                                    </form>

                                </CardBody>
                            </Card>
                            <Link href="/process">
                                <BorderedButton title="Processos Cadastrados" />
                            </Link>
                            <Link href="process/cadastro">
                                <BorderedButton title="Cadastrar Processo" />
                            </Link>
                            <LogoutButton title="Sair" />
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