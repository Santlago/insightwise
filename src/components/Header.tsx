import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav className="bg-black flex justify-around items-center py-[1.5rem] px-[4rem]" style={{ background: 'var(--Sun-500, #9249FF)', boxShadow: '0px 40px 40px 0px #4F00C6 inset' }}>
                <div className="flex justify-around w-full items-center font-semibold text-[1.25rem]">
                    <div>
                        <Link href="/profile">
                            <Image src="/logo.png" alt="logo" width={1841} height={343} className="w-[14.2rem] h-[2.6rem]" />
                        </Link>
                    </div>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                    <Link href="/relatorio">
                        Relatório
                    </Link>
                    <Link href="/analise">
                        Análise individual
                    </Link>
                    <Link href="/about">
                        Sobre nós
                    </Link>
                    <Link href="/profile">
                        Perfil da Empresa
                    </Link>
                </div>
            </nav>
        </>
    )
}