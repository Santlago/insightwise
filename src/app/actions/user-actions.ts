// app/action/user-action.ts
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function createUser(prevState: any, formData: FormData) {

    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        cnpj: formData.get('cnpj'),
    }
    console.log("Sending user data to backend:", JSON.stringify(user)) // Log the JSON data

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    if (!response.ok) {
        return {
            success: false,
            name: user.name,
            cnpj: user.cnpj,
            email: user.email,
            password: user.password,
        }
    }

    return {
        success: true,
        name: '',
        bio: '',
        email: '',
        password: '',
    }

}

export async function login(prevState: any, formData: FormData) {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const user = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    if (!response.ok) {
        return {
            message: "Acesso negado"
        }
    }

    const data= await response.json()
    cookies().set('token', data.token)
    cookies().set('email', data.email)

    redirect('/profile')

    return {
        success: true,
        email: '',
        password: '',
    }

}

export async function getUserProfile() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/profile`, {
        headers: {
            'Authorization': `Bearer ${cookies().get('token')?.value}`
        }
    })

    if (response.status === 403) {
        redirect('/')
    }

    const json = await response.json()
    return {
        name: json.name,
        email: json.email,
        cnpj: json.cnpj,
        avatar: json.avatar,
    }
}

export async function updateUser(prevState: any, formData: FormData) {

    const user = {
        name: formData.get('name'),
        bio: formData.get('bio'),
        email: formData.get('email'),
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token')?.value}`
        },
        body: JSON.stringify(user),
    })

    if (response.status === 403) {
        redirect('/')
    }

    if (response.status === 400) {
        const json = await response.json()
        return {
            success: false,
            name: json.find((error: any) => error.field === 'name')?.message,
            bio: json.find((error: any) => error.field === 'bio')?.message,
            email: json.find((error: any) => error.field === 'email')?.message,
        }
    }

    return {
        success: true,
        name: '',
        bio: '',
        email: '',
    }
}

export async function uploadAvatar(formData: FormData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/avatar`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${cookies().get('token')?.value}`
        },
        body: formData,
    })

    if (response.status === 403) {
        redirect('/')
    }

    if(!response.ok) {
        return {
            success: false,
        }
    }

    return {
        success: true,
    }
}

export async function searchUsers(name: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users?name=${name}`, {
        headers: {
            "Authorization": `Bearer ${cookies().get('token')?.value}`
        }
    })

    if (response.status === 403) {
        redirect('/')
    }

    const json = await response.json()
    return json.map((user: any) => ({
        name: user.name,
        bio: user.bio,
        avatar: user.avatar,
        isFollowing: false,
    }))
}


export async function logout() {
    cookies().delete("token")
    redirect('/')
}
