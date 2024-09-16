import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer bg-black flex py-[5.31rem] px-[4rem] gap-[4.33rem]">
            <div className='flex flex-col w-1/2 gap-[3rem]'>
                <Image src="/logo.png" alt="logo" width={1841} height={343} className='w-[31.5rem] h-[5.8rem]' />
                <p>&copy; {new Date().getFullYear()} InsightWise. Todos os direitos reservados. Somos a plataforma líder em análise de websites, dedicada a impulsionar o progresso e a compreensão profunda dos dados por meio de tecnologias avançadas de Inteligência Artificial. Nossa missão é transformar informações em insights valiosos, ajudando empresas a otimizar suas operações e tomar decisões estratégicas baseadas em dados precisos e relevantes.</p>
            </div>
            <div>
                <div className="border-l-2 border-white h-full"></div>
            </div>
            <div className='w-1/2 flex flex-col gap-[2.29rem]'>
                <div>
                    <p>INTEGRANTES DO GRUPO</p>
                    <br />
                    <p>Breno Lemes Santiago - RM: 552270</p>
                    <p>Felipe Guedes Gonçalves - RM: 550906</p>
                    <p>Luiz Fellipe Soares de Sousa Lucena - RM: 551365</p>
                    <p>Nina Rebello Francisco - RM: 99509</p>
                    <p>Vitória Maria de Camargo - RM: 552344</p>
                </div>
                <div>
                    <p className='text-center'>Projeto sugerido e apoiado por:</p>
                    <div className="flex gap-4 justify-center items-center">
                        <Image src="/fiap.png" alt="FIAP logo" width={1186} height={320} className='w-[11rem] h-[3rem]' />
                        <Image src="/plusoft.png" alt="Plusoft logo" width={640} height={160} className='w-[17.3rem] h-[4.3rem]' />
                    </div>
                </div>
            </div>
        </footer>
    );
};