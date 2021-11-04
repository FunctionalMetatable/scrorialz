import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (req) => {
    return {
        body: req.locals.user,
    }
}