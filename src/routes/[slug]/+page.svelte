<script>
	import { MY_TWITTER_HANDLE, SITE_URL } from '$lib/siteConfig';
	import Comments from '../../components/Comments.svelte';

	import 'prism-themes/themes/prism-night-owl.min.css';
	import Reactions from '../../components/Reactions.svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('$lib/types').ContentItem} */
	$: json = data.json; // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates

	$: canonical = SITE_URL + $page.url.pathname;
</script>

<svelte:head>
	<title>{json.title}</title>
	<meta name="description" content="Cody De Arkland's Blog" />

	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={json.title} />
	<meta name="Description" content={json.description} />
	<meta property="og:description" content={json.description} />
	<meta name="twitter:card" content={json.image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={json.title} />
	<meta name="twitter:description" content={json.description} />
	{#if json.image}
		<meta property="og:image" content={json.image} />
		<meta name="twitter:image" content={json.image} />
	{/if}
</svelte:head>

<article class="mx-auto mb-16 flex w-full max-w-6xl flex-col items-start justify-center px-4 sm:px-8">
	<h1 class="mb-8 text-3xl font-bold tracking-tight text-black dark:text-yellow-500 md:text-5xl ">
		{json.title}
	</h1>
	<div
		class="bg mt-2 flex w-full justify-between border-red sm:flex-col sm:items-start md:flex-row md:items-center"
	>
		<p class="flex items-center text-sm text-gray-700 dark:text-gray-300">Written by: Cody</p>
		<p class="min-w-32 flex items-center text-sm text-gray-600 dark:text-gray-400 md:mt-0">
			<a href={json.ghMetadata.issueUrl} rel="external" class="no-underline" target="_blank">
				<span class="mr-4 font-mono text-xs text-gray-700 text-opacity-70 dark:text-gray-300"
					>{json.ghMetadata.reactions.total_count} reactions</span
				>
			</a>
			{new Date(json.date).toISOString().slice(0, 10)}
		</p>
	</div>
	<div
		class="-mx-4 my-2 flex h-1 w-[100vw] bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-900  sm:mx-0 sm:w-full"
	/>
	
	<div class="prose mt-16 mb-32 w-full max-w-none flex-row dark:prose-invert">
		{@html json.content}
	</div>
</article>
<div class="mx-auto max-w-6xl">
	<div class="prose mb-12 border-t border-b border-blue-800 p-4 dark:prose-invert">
		{#if json.ghMetadata.reactions.total_count > 0}
			Reactions: <Reactions
				issueUrl={json.ghMetadata.issueUrl}
				reactions={json.ghMetadata.reactions}
			/>
		{:else}
			<a href={json.ghMetadata.issueUrl}>Leave a reaction </a>
			if you liked this post! 🧡
		{/if}
	</div>
	<div class="mb-8">
		<Comments ghMetadata={json.ghMetadata} />
	</div>
</div>

<style>
	/* https://ryanmulligan.dev/blog/layout-breakouts/ */
		.swyxcontent {
			--gap: clamp(1rem, 6vw, 3rem);
			--full: minmax(var(--gap), 1fr);
			/* --content: min(65ch, 100% - var(--gap) * 2); */
			--content: 65ch;
			--popout: minmax(0, 2rem);
			--feature: minmax(0, 5rem);

			display: grid;
			grid-template-columns: 
				[full-start] var(--full)
				[feature-start] 0rem
				[popout-start] 0rem
				[content-start] var(--content) [content-end]
				[popout-end] 0rem
				[feature-end] 0rem
				var(--full) [full-end]
		}

		@media (min-width: 768px) {
			.swyxcontent {
				grid-template-columns:
					[full-start] var(--full)
					[feature-start] var(--feature)
					[popout-start] var(--popout)
					[content-start] var(--content) [content-end]
					var(--popout) [popout-end]
					var(--feature) [feature-end]
					var(--full) [full-end];
			}
		}

	:global(.swyxcontent > *) {
		grid-column: content;
	}

	article :global(pre) {
		grid-column: feature;
		margin-left: -1rem;
		margin-right: -1rem;
	}

	article :global(.popout) {
		grid-column: popout;
	}
	article :global(.feature) {
		grid-column: feature;
	}
	article :global(.full) {
		grid-column: full;
		width: 100%;
	}

	article :global(.admonition) {
		@apply p-8 border-4 border-red-500;
	}
</style>
