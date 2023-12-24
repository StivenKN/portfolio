<script lang="ts">
	import type { PageData } from './$types'
	import About from './about.svelte'
	import Hero from './hero.svelte'
	import Projects from './projects.svelte'

	export let data: PageData
</script>

<main>
	<Hero />
	<About />
	<Projects projectData={data} />
</main>
