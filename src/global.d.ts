/// <reference types="@sveltejs/kit" />

interface Tutorial {
    id: string,
    author: Author
}

interface Author {
    id: string,
    username: string,
    scratchId: number
}