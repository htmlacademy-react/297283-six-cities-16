import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthStatus, RequestStatus } from '../../const'
import { checkAuth, login, logout } from '../thunks/auth'
import { User } from '../../types/user'

interface InitialState {
	authStatus: AuthStatus
	user: User | null
	status: RequestStatus
}

const initialState: InitialState = {
	authStatus: AuthStatus.Unknown,
	user: null,
	status: RequestStatus.Initial
}

const loginPending = (state: InitialState) => {
	state.status = RequestStatus.Loading
}

const loginFulfilled = (state: InitialState, action: PayloadAction<User>) => {
	state.status = RequestStatus.Success
	state.user = action.payload
	state.authStatus = AuthStatus.Auth
}

const loginRejected = (state: InitialState) => {
	state.status = RequestStatus.Failed
	state.authStatus = AuthStatus.NoAuth
}

const logoutPending = (state: InitialState) => {
	state.status = RequestStatus.Loading
}

const logoutFulfilled = (state: InitialState) => {
	state.status = RequestStatus.Success
	state.user = null
	state.authStatus = AuthStatus.NoAuth
}

const logoutRejected = (state: InitialState) => {
	state.status = RequestStatus.Failed
	state.authStatus = AuthStatus.NoAuth
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
			state.authStatus = action.payload
		}
	},
	selectors: {
		authStatus: (state) => state.authStatus,
		user: (state) => state.user,
		status: (state) => state.status
	},
	extraReducers: (builder) => {
		// prettier-ignore
		builder
			.addCase(checkAuth.pending, loginPending)
			.addCase(checkAuth.fulfilled, loginFulfilled)
			.addCase(checkAuth.rejected, loginRejected)
		// prettier-ignore
		builder
			.addCase(login.pending, loginPending)
			.addCase(login.fulfilled, loginFulfilled)
			.addCase(login.rejected, loginRejected)
		// prettier-ignore
		builder
			.addCase(logout.pending, logoutPending)
			.addCase(logout.fulfilled, logoutFulfilled)
			.addCase(logout.rejected, logoutRejected)
	}
})

export const { setAuthStatus } = authSlice.actions
