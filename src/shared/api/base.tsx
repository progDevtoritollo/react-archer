import axios, { AxiosResponse } from 'axios'

import { API_URL } from '@/shared/api/config'

export class ApiClient {
	private baseUrl: string

	constructor(url: string) {
		this.baseUrl = url
	}

	private handleResponse<T>(response: AxiosResponse<T>): T {
		if (response.status < 200 || response.status >= 300) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		return response.data
	}

	public async get<T = unknown>(
		endpoint: string,
		queryParams?: Record<string, string | number>,
	): Promise<T> {
		const url = new URL(endpoint, this.baseUrl)

		if (queryParams) {
			Object.entries(queryParams).forEach(([key, value]) => {
				url.searchParams.append(key, value.toString())
			})
		}

		try {
			const response = await axios.get<T>(url.toString(), {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			})

			return this.handleResponse<T>(response)
		} catch (error) {
			throw new Error('Error fetching data')
		}
	}

	public async post<T = unknown, D = Record<string, unknown>>(
		endpoint: string,
		body: D,
	): Promise<T> {
		try {
			const response = await axios.post<T>(`${this.baseUrl}${endpoint}`, body, {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			})

			return this.handleResponse<T>(response)
		} catch (error) {
			throw new Error('Error posting data')
		}
	}

	public async postFile<T = unknown>(endpoint: string, body: T): Promise<T> {
		try {
			const response = await axios.post<T>(`${this.baseUrl}${endpoint}`, body, {
				withCredentials: true,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			return this.handleResponse<T>(response)
		} catch (error) {
			throw new Error('Error posting data')
		}
	}
}

export const apiClient = new ApiClient(API_URL)
