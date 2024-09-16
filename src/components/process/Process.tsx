import { Card, CardBody } from "@nextui-org/card";
import { Pencil, Trash2 } from "lucide-react";

export function Process({ process }: { process: Process }) {

    return (
        <Card className="my-[.5rem]">
            <CardBody>
                <div className="flex justify-between gap-4 text-[#9249FF]">
                    <p>{process.name}</p>
                    <p>{process.createdAt}</p>
                    <div className="flex">
                        <Pencil />
                        <Trash2 />
                    </div>
                </div>

            </CardBody>
        </Card>
    );
}