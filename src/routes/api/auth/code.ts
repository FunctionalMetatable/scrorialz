import type { RequestHandler } from '@sveltejs/kit';
import { verify } from '$lib/db'
import { v4 as uuid } from '@lukeed/uuid'
export const get: RequestHandler = async (req) => {
    const privateCode = uuid()
    const publicCode = uuid()

    const data = await verify.insert({
        privateCode,
        publicCode
    })

    return {
        body: data,
    }
}