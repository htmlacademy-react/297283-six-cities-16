import { AxiosInstance } from 'axios'
import { AppDispatch, RootState } from '../store/store'

export interface ThunkConfig {
	dispatch: AppDispatch
	state: RootState
	extra: AxiosInstance
}
