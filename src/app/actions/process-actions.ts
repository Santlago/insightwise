"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function createProcess(prevState: any, formData: FormData){
    const varprocess = {
        name: formData.get('name'),
        process: formData.get('process'),
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/process`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token')?.value}`
        },
        body: JSON.stringify(varprocess),
    })

    if (!response.ok) {
        return {
            success: false,
            name: varprocess.name,
            process: varprocess.process,
        }
    }

    return {
        success: true,
        name: '',
        process: '',
    }

}

export async function getProcesses(page: number = 0){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/process?page=${page}`, {
        headers: {
            "Authorization": `Bearer ${cookies().get('token')?.value}`
        }
    })

    if(response.status === 403){
        redirect('/')
    }

    const json = await response.json()
    return json.content
}
