'use client'

import { Button } from "@nextui-org/react";
import { Check } from "lucide-react";
import { title } from "process";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
    title: string;
}

export function SubmitButton(props: SubmitButtonProps){
    const { pending } = useFormStatus()

    return (
        <Button fullWidth type="submit" color="primary" isLoading={pending}>
            {props.title}
        </Button>
    )
}