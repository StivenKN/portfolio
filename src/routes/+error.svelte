<script>
	import { page } from '$app/stores'
</script>

<section class="flex items-center justify-center h-screen">
	<p>{$page.error?.message}</p>
</section>
