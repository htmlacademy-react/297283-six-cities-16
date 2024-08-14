import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../../types/api'
import { Endpoint } from '../../const'
import { User } from '../../types/user'
import { deleteToken, setToken } from '../../services/token'

interface LoginPayload {
	email: string
	password: string
}

export const checkAuth = createAsyncThunk<User, void, ThunkConfig>('auth/check', async (_, { extra: api }) => {
	const response = await api.get<User>(Endpoint.Login)
	return response.data
})

export const login = createAsyncThunk<User, LoginPayload, ThunkConfig>('auth/login', async (payload, { extra: api }) => {
	const response = await api.post<User>(Endpoint.Login, payload)
	setToken(response.data.token)
	return response.data
})

export const logout = createAsyncThunk<void, void, ThunkConfig>('auth/logout', async (_, { extra: api }) => {
	await api.delete(Endpoint.Logout)
	deleteToken()
})
