<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte'
	import '../app.postcss'
</script>

<Navbar />
<slot />

<style>
	:root {
		font-family:
			Roboto,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
