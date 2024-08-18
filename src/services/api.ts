import axios, { AxiosError, AxiosInstance, isAxiosError } from 'axios'
import { getToken } from './token'
import { toast } from 'sonner'

enum ErrorType {
	Common = 'COMMON_ERROR',
	Validation = 'VALIDATION_ERROR'
}

interface ErrorBody {
	errorType: ErrorType
	message: string
	details: [
		{
			property: string
			value: string
			messages: [string]
		}
	]
}

function isAxiosErrorCustom<T>(error: unknown): error is AxiosError<T> {
	return isAxiosError(error)
}

const API_URL = 'https://16.design.htmlacademy.pro/six-cities'
const REQUEST_TIMEOUT = 5000
const TOKEN_HEADER_NAME = 'X-Token'

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: API_URL,
		timeout: REQUEST_TIMEOUT
	})

	api.interceptors.request.use((config) => {
		const token = getToken()
		if (token) {
			config.headers[TOKEN_HEADER_NAME] = token
		}
		return config
	})

	api.interceptors.response.use(null, (error) => {
		if (isAxiosErrorCustom<ErrorBody>(error)) {
			const errorResponse = error.response
			if (errorResponse) {
				if (errorResponse.status >= 500) {
					toast.error('Server error')
					return
				}
				if (errorResponse.data.errorType === ErrorType.Validation) {
					const validationMessage = errorResponse.data.details[0].messages[0]
					toast.error(validationMessage)
				}
			}
		}
	})

	return api
}
