<script lang="ts">
	import { scrollRef } from 'svelte-scrolling'
</script>

<section
	use:scrollRef={'about'}
	id="about"
	class="justify-items-center items-center bg-base-300 grid grid-rows-[1fr_auto_1fr] p-16"
>
	<article class="flex flex-col items-center gap-7 py-10 text-center justify-evenly container">
		<h2 class="text-2xl text-[#C670FF] capitalize">About me</h2>
		<p>
			Enthusiastic Full Stack Developer in web application development using technologies like React, NextJS, JavaScript, and TypeScript. Proficient in SQL and NoSQL. Strong problem-solving skills and a keen interest in emerging technologies.
		</p>
	</article>
	<div class="self-center w-4/5 divider" />
	<article class="flex flex-col items-center py-10 gap-7 text-center container">
		<h2 class="text-2xl text-[#C670FF] capitalize">Projects experiences</h2>
		<p>
			I have been developing projects since 2022 when I started to build a company's project for
			schedule services. After that I made a SENA's application for students with apprenticeship
			contract. In that lapse of time, I participate on SENASOFT 2023 hackaton.
		</p>
	</article>
</section>
