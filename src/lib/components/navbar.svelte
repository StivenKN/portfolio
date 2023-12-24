<script lang="ts">
	import { scrollTo } from 'svelte-scrolling'
	import Icon from '@iconify/svelte'

	let navbarColor = 'border-b-yellow-500'
</script>

<nav class={`navbar bg-base-100 px-10 border-b-2 fixed z-50 ${navbarColor}`}>
	<section class="navbar-start">
		<div class="flex-1">
			<Icon
				icon="carbon:portfolio"
				height={30}
				width={30}
			/>
		</div>
	</section>
	<section class="navbar-center">
		<ul class="hidden font-semibold menu menu-horizontal md:flex">
			<li>
				<a
					href="#start"
					use:scrollTo={'start'}
					class="uppercase">Home</a
				>
			</li>
			<li>
				<a
					href="#about"
					use:scrollTo={'about'}
					class="uppercase">About me</a
				>
			</li>
			<li>
				<a
					href="#projects"
					use:scrollTo={'projects'}
					class="uppercase">Projects</a
				>
			</li>
		</ul>
	</section>
	<section class="navbar-end">
		<div class="dropdown dropdown-left md:hidden">
			<div
				tabindex="0"
				role="button"
				class="m-1 btn"
			>
				<Icon
					icon="gg:menu-round"
					height={30}
					width={30}
				/>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a
						href="#start"
						use:scrollTo={'start'}
						class="uppercase">Home</a
					>
				</li>
				<li>
					<a
						href="#about"
						use:scrollTo={'about'}
						class="uppercase">About me</a
					>
				</li>
				<li>
					<a
						href="#projects"
						use:scrollTo={'projects'}
						class="uppercase">Projects</a
					>
				</li>
				<li>
					<a
						class="uppercase"
						href="https://www.linkedin.com/in/blandons02/"
						target="_blank">Contact me</a
					>
				</li>
				<li>
					<a
						href="https://www.github.com/ConanGH-S"
						class="uppercase"
						target="_blank"
						><Icon
							icon="mdi:github"
							height={30}
							width={30}
							class="transition-colors hover:text-white"
						/>Github</a
					>
				</li>
			</ul>
		</div>
		<ul class="items-center hidden gap-5 menu menu-horizontal md:flex">
			<li>
				<a
					class="btn btn-warning btn-outline btn-sm"
					href="https://www.linkedin.com/in/blandons02/"
					target="_blank">Contact me</a
				>
			</li>
			<li>
				<a
					href="https://www.github.com/ConanGH-S"
					target="_blank"
					><Icon
						icon="mdi:github"
						height={30}
						width={30}
						class="transition-colors hover:text-white"
					/></a
				>
			</li>
		</ul>
	</section>
</nav>

<style>
</style>
