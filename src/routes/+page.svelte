<script context="module">
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';
	export const prerender = true; // index page is most visited, lets prerender
</script>

<script lang='ts'>
	import { browser } from "$app/environment";
	import { getFlagValue } from '../lib/launchdarkly/client.js'
	import FeatureCard from '../components/FeatureCard.svelte';
	import ContentCard from '../components/ContentCard.svelte';
	import { page } from '$app/stores';
	import Auth from "./Auth.svelte";
	import Logout from "./Logout.svelte";
	let showAuth: boolean;

	if (browser) {
		getFlagValue('show-auth', setMyFlag).then(setMyFlag)
	}

	function setMyFlag(val: boolean) {
		showAuth = val
	}
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/api/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</svelte:head>

<div
	class="mx-auto flex max-w-6xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"
>
	<div class="grid grid-cols-3 items-start sm:flex-row">
		<div class="hidden xl:inline col-start-1 w-full">
			<img
				class="mx-auto flex h-24 w-24 justify-center rounded-3xl align-middle shadow-2xl xl:h-72 xl:w-72"
				src="/me.png"
				alt="humblelab"
			/>

		</div>
		<div class="xl:col-span-2 xl:col-start-2 col-span-3 col-start-1 w-full">
			<h1
				class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-yellow-500 md:text-5xl"
			>
				Cody De Arkland
			</h1>
			<h2 class="mb-3 text-xl text-black  dark:text-yellow-300 md:text-lg">
				Builder | Advocate | Marketer | BBQ'er | Dad Joke Maker
			</h2>
			<div class="visible xl:hidden w-full">
				<img
					class="mx-auto flex h-72 w-72 justify-center rounded-3xl align-middle shadow-2xl xl:h-72 xl:w-72"
					src="/me.png"
					alt="humblelab"
				/>
			</div>
			<br />
			<h2 class="mb-4 text-gray-700 dark:text-gray-200">
				I work at <a href="https://www.launchdarkly.com"><span class="text-yellow-500">LaunchDarkly</span></a> where I lead a team focused on helping developers and teams learn ways to deploy software faster. I spend most of my days building content and implementing strategies to create better connections with developer and practitioners in the technical community. Content wise, I spend most of my time building video and blog content - but enjoy most forms of digital content creation. 
				<br />
				<br />
				I love learning. I'm passionate about mental health, community, and mentorship. When I'm not working, I'm hanging out with my wife Shannon, our daughters Hayley and Morgan, training my Goldendoodle Charlie, or working on my BBQ craft and the journey to smoke the perfect piece of meat.
				<br />
				<br />
				In my past lives I've had a variety of operational and architecture roles within the utility industry, as well as a mix of sales, marketing, and advocacy roles at <a href="https://www.vmware.com"><span class="text-yellow-500">VMware</span></a>, <a href="https://www.hashicorp.com"><span class="text-yellow-500">HashiCorp</span></a>, and <a href="https://www.kong.com"><span class="text-yellow-500">Kong</span></a>. 
				<br />
				<br />
				If you want to chat about these, or anything really, I encourage you to reach out using the social links below! Enjoy your visit!
			</h2>
			<div class="flex flex-row gap-3">
				<a href="https://hachyderm.io/@codydearkland">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					class="bi bi-mastodon fill-black dark:fill-white"
					viewBox="0 0 16 16"
				>
					<path
						d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
					/>
				</svg>
			</a>
			<a href="https://linkedin.com/in/codydearkland">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					class="bi bi-linkedin fill-black dark:fill-white"
					viewBox="0 0 16 16"
				>
					<path
						d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
					/>
				</svg>
			</a>
			<a href="https://twitter.com/codydearkland">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					class="bi bi-twitter fill-black dark:fill-white"
					viewBox="0 0 16 16"
				>
					<path
						d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
					/>
				</svg>
				
				</a>
			</div>
		</div>
		<!-- <div class="flex mx-auto justify-center align-middle pt-2 xl:pt-8">
			<a  href="https://twitter.com/codydearkland"><i class="fa fa-inverse fa-twitter fa-2x px-2" aria-hidden="true"></i></a>
			<a href="https://linkedin.com/in/codydearkland"><i class="fa fa-inverse fa-linkedin fa-2x px-2" aria-hidden="true"></i></a>
			<a href="https://github.com/codyde"><i class="fa fa-inverse fa-github fa-2x px-2" aria-hidden="true"></i></a>
		  </div> -->
	</div>

	<section class="mb-8 w-full">
		<h3
			class="mb-6 mt-3 text-2xl font-bold tracking-tight text-black dark:text-yellow-400 md:text-4xl"
		>
			Featured Posts
		</h3>
		<div class=" flex flex-col gap-6 md:flex-row">
			<FeatureCard
				title="Write them a Story with NextJS and OpenAI"
				href="/story-nextjs-openai"
				stringData="Mar 2023"
			/>
			<FeatureCard
				title="Anatomy of Awareness - DevRel Edition"
				href="/anatomy-of-awareness"
				stringData="Mar 2023"
			/>
			<FeatureCard
				title="The Next Age of Developer Relations"
				href="/next-age-devrel"
				stringData="Feb 2023"
			/>
   			<FeatureCard
				title="Building Your Corner of the Internet"
				href="/your-corner-of-the-internet"
				stringData="Jan 2023"
			/>
		</div>
		<a
			class="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all dark:text-gray-400 dark:hover:text-gray-200"
			href="/blog"
			>See latest posts<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="ml-1 h-6 w-6"
				><path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
				/></svg
			></a
		>
	</section>

	<section class="mb-8 w-full">
		<h3
			class="mb-6 mt-3 text-2xl font-bold tracking-tight text-black dark:text-yellow-400 md:text-4xl"
		>
			Publications
		</h3>
		<div class=" flex flex-col gap-6 md:flex-row">
			<FeatureCard
				title="AI Development in LaunchDarkly: Release, Measure, and Iterate"
				href="https://launchdarkly.com/blog/ai-development-with-launchdarkly/"
				stringData="Dec 2023"
			/>
			<FeatureCard
				title="Controlling the Machines: Feature Flagging Meets AI"
				href="https://thenewstack.io/controlling-the-machines-feature-flagging-meets-ai/"
				stringData="Sep 2023"
			/>
			<FeatureCard
				title="OpenAI, ChatGPT and the Next Age of ‘Build’"
				href="https://thenewstack.io/openai-chatgtp-and-the-next-age-of-build/"
				stringData="Feb 2024"
			/>
			<FeatureCard
				title="The Core Tenents of Technical Marketing"
				href="https://devmarketing.c4media.com/p/the-core-tenets-of-technical-marketing"
				stringData="Oct 2022"
			/>
			<FeatureCard
				title="Evolution of Feature: Growing Beyond Software Delivery"
				href="https://thenewstack.io/evolution-of-a-feature-growing-beyond-software-delivery/"
				stringData="Nov 2021"
			/>
			
		</div>
	</section>

	<section class="mb-4 w-full">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-yellow-400 md:text-4xl">
			Video Content
		</h3>
		<div class=" flex flex-col">
			<ContentCard
				title="LaunchDarkly + AWS: Iterating on AI With LaunchDarkly and Amazon Bedrock"
				href="https://youtu.be/dTyxRnuI3FQ"
				description="LaunchDarkly should be a default tool in the toolbelt of anyone building AI applications. In this video, we show why, with Amazon Bedrock."
				stringData="Dec 23"
			/>
			<ContentCard
				title="Talkin Ship: LaunchDarkly Use Cases Demo"
				href="https://youtu.be/apQ4invZh-Q"
				description="An overview of how LaunchDarkly can be used to across multiple different core use cases - everything from standard releases through migrations, entitlements, measurement and more."
				stringData="Jun 23"
			/>
			<ContentCard
				title="What is a Feature Flag?"
				href="https://youtu.be/eBT9bCRIHWQ"
				description="What is a feature flag anyways? This video explains the high level concept and why you would use it."
				stringData="Oct 22"
			/>
			<ContentCard
				title="Feature Flags - Frontend vs Backend"
				href="https://youtu.be/JFyuG_38pb0"
				description="In this video I talk through the differences between feature flags that impact frontend applications vs backend applications with examples of each."
				stringData="Oct 22"
			/>
			<ContentCard
				title="How it works - Exploring the Tech of LaunchDarkly"
				href="https://youtu.be/4kxEGmsGw9E"
				description="LaunchDarkly is a platform made up of many different capabilities and architecture choices. This video gives a high level of both."
				stringData="Apr 22"
			/>
			<ContentCard
				title="Extending APIs with LaunchDarkly"
				href="https://youtu.be/2SXjnpmL2MU"
				description="A common use case for LaunchDarkly is rolling out new APIs to developer teams. In this video, I create a simple example using Python and Flask and show rolling out a new API change."
				stringData="Jan 22"
			/>
			<ContentCard
				title="Cloud and Databse Migrations with LaunchDarkly"
				href="https://youtu.be/-z7qdFW15hI"
				description="People often use feature flags to rollout new databases or cloud services. In this video I show rolling out 
				a new database change using feature flags and LaunchDarkly."
				stringData="Jan 22"
			/>
			<ContentCard
				title="Understanding Gateway Mode in Kuma Service Mesh"
				href="https://youtu.be/livro7I5TzQ"
				description="Learn how Kuma, an open source service mesh, and Kong Mesh for enterprise allow you to use ANY API gateway as a 'doorway' into the service mesh using 'Gateway Mode.'"
				stringData="Jun 21"
			/>
			<ContentCard
				title="Kong Builders - Getting Started with Kuma Service Mesh"
				href="https://www.youtube.com/live/dOOuz1fadv0?feature=share"
				description="Cody De Arkland from Kong discusses some of the basics of service mesh and how to get set up on Kuma."
				stringData="Jun 21"
			/>
			<ContentCard
				title="Up and Running with HCP Consul on AWS, Service Mesh, and Terraform"
				href="https://youtu.be/f8L1Z55i7vU"
				description="Unpack how we build consistent networking between services running in AWS with Consul Service Mesh for the HashiCorp Cloud Platform and unpack how we simplify and scale our management with Terraform Cloud."
				stringData="Nov 20"
			/>
			<ContentCard
				title="Tech Field Day - Application First Networking with Consul"
				href="https://youtu.be/R9zDU2_UeMk"
				description="Demonstrates HashiCorp Consul, using Nomad to deploy workloads and connect multiple environments together in a practical service mesh."
				stringData="Nov 20"
			/>
		</div>
	</section>
</div>