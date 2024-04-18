<script lang="ts">
	import { scrollRef } from 'svelte-scrolling'
	import Icon from '@iconify/svelte'
	export let projectData: any

	let currentPage = 1
	let itemsPerPage = 4

	$: startIndex = (currentPage - 1) * itemsPerPage
	$: endIndex = startIndex + itemsPerPage
	$: visibleData = projectData.repositories.slice(startIndex, endIndex)

	const nextPage = () => {
		if (currentPage * itemsPerPage < projectData.repositories.length) {
			currentPage++
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			currentPage--
			return
		}
	}
</script>

<section
	use:scrollRef={'projects'}
	id="projects"
	class="grid grid-rows-[auto_1fr] gap-16 px-16 py-12 bg-base-100"
>
	<h2 class="text-4xl text-[#EEC7FC] text-center">My projects</h2>
	<section class="grid grid-rows-[1fr_auto] gap-y-10">
		<div class="join justify-self-center">
			<button
				class="join-item btn"
				on:click={prevPage}>«</button
			>
			<button class="join-item btn">Page {currentPage}</button>
			<button
				class="join-item btn"
				on:click={nextPage}>»</button
			>
		</div>
		<section class="flex min-h-[600px] container mx-auto justify-center gap-12 flex-wrap">
			{#await projectData}
				<p>Loading...</p>
			{:then value}
				{#each visibleData as item, i}
					<div class="w-60 md:w-96 lg:w-[32rem] shadow-xl h-52 justify-self-center card bg-base-300">
						<div class="card-body">
							<h2 class="capitalize card-title line-clamp-1">{item.name}</h2>
							<p class="text-description">{item.description ?? 'No description'}</p>
							<div class="items-center justify-between card-actions">
								<div class="">
									<img
										src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${String(
											item.language
										).toLowerCase()}/${String(item.language).toLowerCase()}-original.svg`}
										alt={item.language}
										class="object-fill w-8 h-8"
									/>
								</div>
								<a
									href={item.url}
									class="transition-colors btn btn-warning hover:text-white"
									target="_blank"
									><Icon
										icon="mdi:github"
										height={30}
										width={30}
									/></a
								>
							</div>
						</div>
					</div>
				{/each}
			{/await}
		</section>
	</section>	
</section>

<style>
	.text-description {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
