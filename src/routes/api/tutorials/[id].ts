import type { RequestHandler } from '@sveltejs/kit';
import { tutorials, users } from '$lib/db'

export const get: RequestHandler = async (req) => {
    const tutorial = await tutorials.findOne({
        id: Number(req.params.id)
    })

    if (tutorial && tutorial.id) {
        tutorial.author = await users.findOne({
            id: tutorial.author
        })

        return {
            body: tutorial
        }
    }

    return {
        body: {
            error: 'no tutorial found',
            code: 'TutorialNotFound'
        },
        status: 404
    }
}