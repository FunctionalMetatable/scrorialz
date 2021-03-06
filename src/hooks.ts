import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';
import { sessions, users } from '$lib/db';
import sanitizeString from '$lib/sanitise-string';
import type { ServerRequest } from '@sveltejs/kit/types/hooks';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');

	if (cookies.sessionId) {
		const session = await sessions.findOne({
			id: new RegExp(`^${cookies.sessionId}$`)
		});

		if (session && session.id) {
			const user = await users.findOne({
				username: new RegExp(`^${sanitizeString(session.username)}$`)
			});

			request.locals.user = user;
			request.locals.token = cookies.sessionId;
			const response = await resolve(request);

			return response;
		} else {
			const response = await resolve(request);

			response.headers['set-cookie'] = cookie.serialize('sessionId', '', {
				path: '/',
				expires: new Date(1)
			});

			return response;
		}
	}

	const response = await resolve(request);

	return response;
};


export function getSession(request: ServerRequest): Session {

	if (request.locals.user) {
		const __static_session__ = JSON.parse(JSON.stringify(request.locals.user))
		return {
			user: __static_session__ ,
			token: String(request.locals.token)
		}
	}
	

	return { user: null, token: null }
}