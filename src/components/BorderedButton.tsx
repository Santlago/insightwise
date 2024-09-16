import { Button } from "@nextui-org/button";

interface BorderedButtonProps {
    title: string;
}

export default function BorderedButton(props: BorderedButtonProps) {
    return (
        <Button variant="ghost" className="text-white font-bold text-[1rem] hover:text-[#9249FF]"  style={{ width: '100%' }}>{props.title}</Button>
    );
}