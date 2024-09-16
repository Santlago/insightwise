"use client";

import { Suspense, useEffect, useState } from "react";
import { getProcesses } from "../actions/process-actions";
import { Button } from "@nextui-org/button";
import { Process } from "@/components/process/Process";

export function Processes({ initialProcesses }: { initialProcesses: Process[] }) {
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
            <div className="flex justify-center mt-[4rem]">
                <Button onClick={loadMore} color="primary">Carregar mais</Button>
            </div>
        </Suspense>
    );
}