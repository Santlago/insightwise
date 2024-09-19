"use client"

import { logout } from "@/app/actions/user-actions";
import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";

interface LogoutButtonProps {
    title: string;
}

import { useState } from "react";

export default function LogoutButton(props: LogoutButtonProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Button 
            variant="ghost" 
            color="danger" 
            className="text-[#F0145C] font-bold text-[1rem]" 
            style={{ width: '100%' }} 
            onClick={() => logout()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <>
                {hovered ? (
                    <>
                        <span className="text-white">{props.title}</span><LogOut color="#fff" />
                    </>
                ) : (
                    <>
                        <span className="text-[#f0145c]">{props.title}</span><LogOut color="#f0145c" />
                    </>
                )}
            </>
        </Button>
    );
}