import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (req) => {
	const res = await fetch(`https://api.scratch.mit.edu/users/${req.params.user}`);
	const json = await res.json();

	return {
		status: 301,
		headers: {
			Location: req.query.get('uploads')
				? `https://cdn2.scratch.mit.edu/get_image/user/${json.id}_500x500.png?`
				: `https://uploads.scratch.mit.edu/users/avatars/${json.id}.png`
		}
	};
};
