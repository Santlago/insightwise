"use client"

import { createProcess } from "@/app/actions/process-actions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { CheckIcon } from "lucide-react";
import { useFormState } from "react-dom";

const initialState = {
    success: false,
    name: '',
    process: '',
}

export default function Cadastro() {

    const [state, handleSubmit] = useFormState(createProcess, initialState)

    return (
        <>
            <main>
                <Header />
                <div className="h-screen">
                    <h1 className="text-[#7913EE] font-semibold text-[2rem] text-center mt-[6rem] mb-[4rem]">Cadastrar processo</h1>
                    <div className="flex justify-center">
                        <Card className="w-[30rem]">
                            <CardBody className="flex flex-col">
                                <form action={handleSubmit} className="flex flex-col gap-[.8rem]">
                                    <Input label="Nome" name="name" isRequired placeholder="Nome do processo" />
                                    <Input label="Processo" name="process" isRequired placeholder="Processo" />
                                    <Button color="primary" type="submit">Cadastrar</Button>
                                    {state.success &&
                                        <div className="flex gap-2 items-center text-green-500">
                                            <CheckIcon size={24} />
                                            <span>Process created successfully</span>
                                        </div>
                                    }
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}