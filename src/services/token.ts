export const TOKEN_NAME = 'X-Token'

export const getToken = (): string => {
	const token = localStorage.getItem(TOKEN_NAME)
	return token ?? ''
}

export const setToken = (token: string): void => {
	localStorage.setItem(TOKEN_NAME, token)
}

export const deleteToken = (): void => {
	localStorage.removeItem(TOKEN_NAME)
}
