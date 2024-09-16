interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    cnpj: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
}

interface Process {
    id: number;
    name: string;
    process: string;
    createdAt: string;
    user: User;
}