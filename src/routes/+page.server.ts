import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { GITHUB_TOKEN } from '$env/static/private'

interface IRepositoryData {
	name: string
	description: string
	html_url: string
	language: string
}

export const load: PageServerLoad = async () => {
	const URL: string = 'https://api.github.com/users/ConanGH-S/repos'
	const token = GITHUB_TOKEN

	try {
		const response = await fetch(URL, {
			headers: {
				Authorization: `token ${token}`
			}
		})
		const data = await response.json()
		const necessaryData = data.filter((repo: IRepositoryData) => repo.name !== 'conangh-s')
		.map((repo: IRepositoryData) => {
			console.log(repo.language, repo.name)
			let language = repo.language
			if (String(repo.language).toLowerCase() === 'css') language = 'css3'
			if (String(repo.language).toLowerCase() === 'scss') language = 'sass'
			if (String(repo.language).toLowerCase() === 'c#') language = 'csharp'
			if (!repo.language) language = 'markdown'
			return {
				name: repo.name,
				description: repo.description,
				url: repo.html_url,
				language
			}
		})
		return {
			repositories: necessaryData
		}
	} catch (err) {
		console.log('error', err)
		throw error(500, 'Error al conseguir los datos de los repositorios')
	}
}
