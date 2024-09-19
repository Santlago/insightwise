"use client";

import { Suspense, useEffect, useState } from "react";
import { getProcesses } from "../actions/process-actions";
import { Button } from "@nextui-org/button";
import { Process } from "@/components/process/Process";
import Link from "next/link";
import { Frown } from "lucide-react";

export function Processes({ initialProcesses }: { initialProcesses: Process[] }) {
    console.log(initialProcesses);
    if (initialProcesses.length === 0) console.log('no processes');
    const [processes, setProcesses] = useState<Process[]>(initialProcesses);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setProcesses(initialProcesses);
    }, [initialProcesses]);

    async function loadMore() {
        const newProcesses = await getProcesses(page);
        setPage(page + 1);
        setProcesses([...processes, ...newProcesses]);
    }

    return (
        <Suspense fallback={<p>carregando</p>}>
            {processes?.map((process: Process) => (
                <Process key={process.id} process={process} />
            ))}
            {processes.length === 0 ? (
                <>
                    <div className="flex flex-col items-center gap-[2rem]">
                        <Frown color="#7913EE" size={150} />
                        <p className="text-red-500">Você ainda não cadastrou nenhum processo </p>
                        <Link href="/process/cadastro">
                            <Button color="primary">Cadastrar processo</Button>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-center mt-[4rem]">
                        <Button onClick={loadMore} color="primary">Carregar mais</Button>
                    </div>
                </>
            )}
        </Suspense>
    );
}