//Redux

import { createSlice } from '@reduxjs/toolkit';

export interface User {
	name: string;
	email: string;
}

export const UserEmptyState: User = {
	name: '',
	email: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState: UserEmptyState,
	reducers: {
		createUser: (state, action) => {
			return action.payload;
		},
		modifyUser: (state, action) => {
			return { ...state, ...action.payload };
		},
		resetUser: () => {
			return UserEmptyState;
		}
	}
});
