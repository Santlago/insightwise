import { Card, CardBody } from "@nextui-org/card";
import { Pencil, Trash2 } from "lucide-react";
import moment from "moment";

export function Process({ process }: { process: Process }) {

    return (
        <Card className="my-[.5rem]">
            <CardBody>
                <div className="flex justify-between gap-4 text-[#9249FF] px-[1.5rem]">
                    <p>{process.name}</p>
                    <p>{process.process}</p>
                    {moment(process.createdAt, "YYYY-MM-DDTHH:mm:ss").fromNow()}
                    <div className="flex gap-[.5rem]">
                        <Pencil />
                        <Trash2 />
                    </div>
                </div>

            </CardBody>
        </Card>
    );
}