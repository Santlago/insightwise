import { Button } from "@nextui-org/button";

interface WhiteButtonProps {
    title: string;
}

export default function WhiteButton(props: WhiteButtonProps) {
    return (
        <Button className="text-[#9249FF] font-bold text-[1.5rem]" style={{borderRadius: '3.625rem', background: '#ffffff'}}>{props.title}</Button>
    );
}