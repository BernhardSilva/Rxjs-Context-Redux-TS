//Redux

import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';

export const GentlemanStore = configureStore({
	reducer: {
		user: userSlice.reducer
	}
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
