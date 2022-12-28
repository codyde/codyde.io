<script>
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
	import { MY_TWITTER_HANDLE, MY_YOUTUBE, REPO_URL, SITE_TITLE } from '$lib/siteConfig';
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<div class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-800 sm:px-8">
	<Nav />
</div>
<main class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-800 sm:px-8">
	<slot />
</main>

<footer class="mx-auto mb-8 flex w-full max-w-6xl flex-col items-start justify-center">
	<p class="prose px-4 dark:prose-invert sm:px-8">
		This blog is based on the
		<a href="https://swyxkit.netlify.app/">swyxkit</a>
		template.
	</p>
</footer>
