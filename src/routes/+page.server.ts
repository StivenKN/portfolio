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
		const necessaryData = data.map((repo: IRepositoryData) => {
			return {
				name: repo.name,
				description: repo.description,
				url: repo.html_url,
				language: repo.language
			}
		})
		return {
			repositories: necessaryData
		}
	} catch (err) {
		console.log('error')
		throw error(500, 'Error al conseguir los datos de los repositorios')
	}
}
