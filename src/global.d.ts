/// <reference types="@sveltejs/kit" />

interface Tutorial {
	id: string;
	author: User;
}

interface User {
	id: string;
	username: string;
	scratchId: number;
}

interface Session {
	user: User,
	token: string
}