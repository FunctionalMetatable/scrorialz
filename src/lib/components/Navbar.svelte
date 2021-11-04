<script lang="ts">
	import { session } from '$app/stores';
</script>

<div id="navigation">
	<div class="inner">
		<div>
			<div>
				<a href="/" class="item"> Scrorialz </a>
				<a href="/explore" class="item"> Explore </a>
			</div>
			{#if $session && $session.user}
				<div class="logged-in">
					<div class="item">
						<img
							class="profile-picture"
							src={`/api/users/${$session.user.username}/picture?uploads=true`}
							alt={`${$session.user.username}`}
						/>
						<span>{$session.user.username}</span>
					</div>
				</div>
			{:else}
				<div class="right">
					<a href="/accounts/login"> Login </a>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	#navigation {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
		background-color: #3b6ad1;
		width: 100%;
		height: 50px;
		justify-content: center;
		max-height: 50px;
	}

	.inner {
		height: 100%;
	}

	#navigation .inner > div {
		display: flex;
		flex-wrap: nowrap;
		background: #3b6ad1;
		z-index: 10;
		height: 50px;
		list-style: none;
		flex-direction: row;
		justify-content: space-between;
		padding: 0;
		line-height: 1.5em;
		font-size: 1rem;
		font-weight: normal;
	}

	#navigation .inner > div > div {
		display: flex;
		flex-wrap: nowrap;
		z-index: 10;
		height: 100%;
		list-style: none;
		flex-direction: row;
		justify-content: flex-start;
	}

	#navigation .inner > div > div a {
		line-height: 1.5em;
		font-size: 1rem;
		font-weight: 900;
		position: relative;
		float: left;
		margin: 0;
		padding: 13px 15px 4px 15px;
	}

	@media only screen and (min-width: 942px) {
		.inner {
			margin: 0px;
			width: 942px;
		}
	}

	.logged-in > div {
		display: inline-block;

		max-width: 260px;
		height: 33px;
		overflow: hidden;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: white;
		font-size: 0.8125rem;
		font-weight: normal;
	}

	img.profile-picture {
		margin-right: 10px;
		border-radius: 3px;
		width: 24px;
		height: 24px;
		vertical-align: middle;
	}

	.logged-in > div::after {
		display: inline-block;
		margin-left: 8px;
		background-image: url('https://scratch.mit.edu/images/dropdown.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 50%;
		width: 20px;
		height: 20px;
		vertical-align: middle;
		content: ' ';
	}

	.item {
		cursor: pointer;
		max-height: 50px;
		display: inline-block;
		position: relative;
		margin: 0;
		height: 100%;
		align-self: flex-start;
		display: block;
		padding: 13px 15px 4px 15px;
		height: 33px;
		text-decoration: none;
		white-space: nowrap;
		color: white;
		font-size: 0.85rem;
		font-weight: bold;
	}

	.item:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
