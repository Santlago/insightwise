"use client"

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function Login() {

    const [selected, setSelected] = useState("login");

    return (
        <>
            <main className="bg-black h-screen flex" style={{ background: 'var(--Sun-500, #9249FF)', boxShadow: '0px 300px 190px 0px #650FC8 inset' }}>
                <aside className="h-screen hidden lg:block w-1/2">
                    <Image src="/login.png" alt="login" width={4096} height={2732} />
                </aside>
                <div className="flex flex-col justify-center items-center m-auto">
                    <Image src="/logo.png" alt="logo" width={1841} height={343} className="w-[24.2rem] h-[4.6rem]" />
                    <Card  className="max-w-full w-[340px] h-[400px]">
                        <CardBody className="overflow-hidden">
                            <Tabs
                                fullWidth
                                size="md"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={(key) => setSelected(key.toString())}
                            >
                                <Tab key="login" title="Login">
                                    <form className="flex flex-col gap-4">
                                        <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                        <Input
                                            isRequired
                                            label="Password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                        <p className="text-center text-small">
                                            Need to create an account?{" "}
                                            <Link href="/">
                                                Sign up
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-end">
                                            <Button fullWidth color="primary">
                                                Login
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                                <Tab key="sign-up" title="Sign up">
                                    <form className="flex flex-col gap-4 h-[300px]">
                                        <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                                        <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                        <Input
                                            isRequired
                                            label="Password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                        <p className="text-center text-small">
                                            Already have an account?{" "}
                                            <Link href="/">
                                                Login
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-end">
                                            <Button fullWidth color="primary">
                                                Sign up
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                </div>
            </main>
        </>
    );
}