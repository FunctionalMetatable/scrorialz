<script lang="ts" context="module">
	/** @type {import("@sveltejs/kit").Load} */
	export async function load({ error, status, page, fetch }): Promise<Object> {
		const res = await fetch(`/api/tutorials/${page.params.id}`);

		if (res.status === 200) {
			const tutorial = await res.json();

			return {
				status: 200,
				props: {
					tutorial
				}
			};
		} else {
			return {
				status: 404,
				error: 'This tutorial cannot be found'
			};
		}
	}
</script>

<script lang="ts">
	export let tutorial;
</script>

<div class="page tutorial-page">
	<div class="tutorial-post">
		<div class="header">
			{new Date(tutorial.meta.created).toLocaleDateString()}
		</div>
	</div>
</div>
