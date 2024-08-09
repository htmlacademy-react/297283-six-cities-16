import axios, { AxiosInstance } from 'axios'
import { getToken, TOKEN_NAME } from './token'

const API_URL = 'https://16.design.htmlacademy.pro/six-cities'
const REQUEST_TIMEOUT = 5000

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: API_URL,
		timeout: REQUEST_TIMEOUT
	})

	api.interceptors.request.use((config) => {
		const token = getToken()
		if (token) {
			config.headers[TOKEN_NAME] = token
		}
		return config
	})

	return api
}
