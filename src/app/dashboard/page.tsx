import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BarChart, Gauge, gaugeClasses, LineChart, PieChart } from "@mui/x-charts";
import { Card, CardBody, CardHeader } from "@nextui-org/card";


export default function Dashboard() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <h1 className="text-[#7913EE] font-semibold text-[2rem] text-center mt-[6rem] mb-[4rem]">Dashboard</h1>
                <div className="flex flex-col px-[7rem] pb-[7.63rem] gap-[3.75rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="flex justify-center">Performance Geral</CardHeader>
                            <CardBody className="flex justify-center items-center">
                                <LineChart
                                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                    series={[
                                        {
                                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                                        },
                                    ]}
                                    width={400}
                                    height={300}
                                />
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="flex justify-center">Funções mais utilizadas hoje</CardHeader>
                            <CardBody className="flex justify-center items-center">
                                <PieChart
                                    series={[

                                        {
                                            data: [
                                                { label: 'Group A', value: 2400 },
                                                { label: 'Group B', value: 4567 },
                                                { label: 'Group C', value: 1398 },
                                                { label: 'Group D', value: 9800 },
                                                { label: 'Group E', value: 3908 },
                                                { label: 'Group F', value: 4800 },
                                            ],
                                            innerRadius: 40,
                                            outerRadius: 80,
                                        },
                                    ]}
                                    height={200}
                                    slotProps={{
                                        legend: { hidden: false },
                                    }}
                                />
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="flex justify-center">Funções utilizadas hoje</CardHeader>
                            <CardBody className="flex justify-center items-center">
                                <Gauge
                                    value={80}
                                    startAngle={-110}
                                    endAngle={110}
                                    sx={{
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                            transform: 'translate(0px, 0px)',
                                        },
                                    }}
                                    text="80%"
                                    width={300}
                                />
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardHeader>Média mensal de atividade na plataforma</CardHeader>
                            <CardBody className="flex justify-center items-center">
                                <LineChart
                                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                    series={[
                                        {
                                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                                        },
                                    ]}
                                    width={900}
                                    height={300}
                                />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}