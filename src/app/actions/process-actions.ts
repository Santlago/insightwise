"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function createProcess(formData: FormData){
    const varprocess = {
        name: formData.get('name'),
        process: formData.get('process'),
    }

    const response = await fetch(`${process.env.BASE_API_URL}/process`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token')?.value}`
        },
        body: JSON.stringify(varprocess),
    })

    if(response.status === 403){
        redirect('/')
    }

    return await response.json()
 
}

export async function getProcesses(page: number = 0){
    const response = await fetch(`${process.env.BASE_API_URL}/process?page=${page}`, {
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