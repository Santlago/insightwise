"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Tab, Tabs } from "@nextui-org/tabs";
import { CheckIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createUser, login } from "../actions/user-actions";
import { SubmitButton } from "@/components/SubmitButton";
import { NODE_BASE_ESM_RESOLVE_OPTIONS } from "next/dist/build/webpack-config";

const initialState = {
  success: false,
  name: "",
  bio: "",
  email: "",
  password: "",
};
console.log(process.env.BASE_API_URL);

const loginInitialState = {
  message: "",
};

export default function Login() {
  const [selected, setSelected] = useState("login");
  const { pending } = useFormStatus();

  const [state, handleSubmit, isPending] = useFormState(
    createUser,
    initialState
  );
  const [loginState, formAction] = useFormState(login, loginInitialState);

  return (
    <>
      <main
        className="bg-black h-screen flex"
        style={{
          background: "var(--Sun-500, #9249FF)",
          boxShadow: "0px 300px 190px 0px #650FC8 inset",
        }}
      >
        <aside className="h-screen hidden lg:block w-1/2 overflow-hidden">
          <Image
            src="/login.png"
            alt="login"
            width={4096}
            height={2732}
            className="object-cover h-full w-full"
          />
        </aside>
        <div className="flex flex-col justify-center items-center m-auto gap-[3.75rem]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={1841}
              height={343}
              className="w-[24.2rem] h-[4.6rem]"
            />
          </Link>
          <Card className="max-w-full w-[340px]">
            <CardBody className="overflow-hidden">
              <Tabs
                fullWidth
                size="md"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key.toString())}
                color="primary"
              >
                <Tab key="login" title="Login">
                  <form action={formAction} className="flex flex-col gap-4">
                    <Input
                      isRequired
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Input
                      isRequired
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <div className="flex flex-col  gap-2">
                      <SubmitButton title="Login" />
                      <Button
                        startContent={
                          <Image
                            alt="googlelogin"
                            src="/google.png"
                            width={20}
                            height={20}
                          />
                        }
                        onClick={() => {
                          const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
                          if (baseUrl) {
                            window.location.href = `${baseUrl}/api/auth/google`;
                          } else {
                            console.error(
                              "NEXT_PUBLIC_BASE_API_URL is not defined"
                            );
                          }
                        }}
                      >
                        Login with Google
                      </Button>
                    </div>
                    {loginState.message && (
                      <div className="flex gap-2 items-center text-red-500">
                        <X size={24} />
                        <span>{loginState.message}</span>
                      </div>
                    )}
                  </form>
                </Tab>
                <Tab key="sign-up" title="Sign up">
                  <form action={handleSubmit} className="flex flex-col gap-4">
                    <Input
                      isRequired
                      name="name"
                      label="Name"
                      placeholder="Enter your name"
                    />
                    <Input
                      isRequired
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Input
                      name="password"
                      isRequired
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <Input
                      isRequired
                      name="cnpj"
                      label="CNPJ"
                      placeholder="Enter your CNPJ"
                    />
                    <div className="flex gap-2 justify-end">
                      <SubmitButton title="Sign Up" />
                    </div>
                    {state.success && (
                      <div className="flex gap-2 items-center text-green-500">
                        <CheckIcon size={24} />
                        <span>Account created successfully</span>
                      </div>
                    )}
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
