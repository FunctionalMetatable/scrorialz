import type { RequestHandler } from '@sveltejs/kit';
import { users } from '$lib/db'
import sanitizeString from '$lib/sanitise-string';

export const get: RequestHandler = async (req) => {
    const user = await users.findOne({
        username: new RegExp(`^${sanitizeString(req.params.user)}$`)
    })

    if (user) {
        return {
            body: user,
        }
    }

    
    return {
        body: {
            error: 'no user found',
            code: 'UserNotFound'
        },
        status: 404
    }
}