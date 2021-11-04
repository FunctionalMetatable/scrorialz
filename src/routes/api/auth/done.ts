import type { RequestHandler } from '@sveltejs/kit';
import { sessions, users, verify } from '$lib/db';
import { v4 as uuid } from '@lukeed/uuid';
import sanitizeString from '$lib/sanitise-string';
import { serialize } from 'cookie';
export const get: RequestHandler = async (req) => {
	const privateCode: string = req.query.get('privateCode');

	const data = await verify.findOne({
		privateCode: new RegExp(`^${sanitizeString(privateCode)}$`)
	});

	if (data) {
		const commentRes = await fetch(
			`https://api.scratch.mit.edu/users/9gr/projects/531190745/comments`
		);
		const comments = await commentRes.json();

		for (const comment of comments) {
			if (comment.content === data.publicCode) {
				const user: string = comment.author.username;

				let dbUser = await users.findOne({
					username: user
				});

				const createSession = async (u) => {
					const session = await sessions.insert({
						id: uuid(),
						username: u
					});

					return session;
				};

				if (!dbUser) {
					dbUser = await users.insert({
						username: user,
						scratchId: comment.author.id,
						history: {
							joined: new Date().toISOString()
						}
					});
				}

				const session = await createSession(dbUser.username);

				verify.remove({
					privateCode: data.privateCode
				});

				return {
					status: 200,
					body: {
						token: session.id
					},
					headers: {
						'set-cookie': serialize('sessionId', session.id, {
							path: '/'
						})
					}
				};
			}
		}
	}

	return {
		status: 404,
		body: {
			error: 'invalid private code',
			code: 'InvalidPrivateCodeError'
		}
	};
};
