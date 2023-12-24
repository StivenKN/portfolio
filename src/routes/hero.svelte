<script>
	import { scrollRef } from 'svelte-scrolling'
	import myImage from '$lib/assets/me.jpg'
	import Icon from '@iconify/svelte'
</script>

<section
	use:scrollRef={'start'}
	id="start"
	class="min-h-screen hero bg-base-200"
>
	<div
		class="hero-content h-full text-center grid grid-rows-[2fr_1fr] justify-center items-center gap-y-12"
	>
		<section
			class="grid grid-rows-[1fr_auto] md:grid-rows-1 md:grid-cols-[1fr_auto] items-center justify-evenly gap-10 max-w-screen-2xl self-end"
		>
			<aside class="w-full">
				<h1 class="text-5xl font-bold text-primary-yellow">Web Developer</h1>
				<p class="py-6 text-xl w-full text-[#EEC7FC]">
					Front-End <span class="text-white">&</span> Back-End
				</p>
			</aside>
			<div class="rounded-full w-52 h-52 justify-self-center">
				<img
					src={myImage}
					alt="Foto personal"
					class="object-fill w-full h-full rounded-full image-full"
				/>
			</div>
		</section>
		<div class="flex flex-col items-center gap-16">
			<a
				href="#about"
				class="btn btn-sm btn-warning max-w-32"
			>
				About me
			</a>
			<div class="flex flex-row gap-3 justify-self-center">
				<Icon
					icon="fa6-brands:node"
					height={48}
					width={48}
				/>
				<Icon
					icon="skill-icons:expressjs-dark"
					height={48}
					width={48}
				/>
				<Icon
					icon="logos:typescript-icon"
					height={48}
					width={48}
				/>
				<Icon
					icon="logos:javascript"
					height={48}
					width={48}
				/>
				<Icon
					icon="cib:next-js"
					height={48}
					width={48}
				/>
				<Icon
					icon="logos:react"
					height={48}
					width={48}
				/>
				<Icon
					icon="devicon:svelte"
					height={48}
					width={48}
				/>
				<Icon
					icon="logos:mysql"
					height={48}
					width={48}
				/>
			</div>
		</div>
	</div>
</section>

<style>
</style>
