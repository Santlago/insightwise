import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProcesses } from "../actions/process-actions";
import { Processes } from "./processes";

export default async function Home() {

    const processes = await getProcesses()

    return (
        <>
            <main>
                <Header />
                <div className="h-screen">
                    <h1 className="text-[#7913EE] font-semibold text-[2rem] text-center mt-[6rem] mb-[4rem]">Processos Cadastrados</h1>
                    <div className="px-[10rem]">
                        <Processes initialProcesses={processes} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}