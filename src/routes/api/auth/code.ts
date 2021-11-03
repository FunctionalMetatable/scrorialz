import type { RequestHandler } from '@sveltejs/kit';
import { verify } from '$lib/db'

export const get: RequestHandler = async (req) => {
    

    return {
        body: {
            error: 'no tutorial found',
            code: 'TutorialNotFound'
        },
        status: 404
    }
}