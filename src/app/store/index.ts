import { configureStore } from '@reduxjs/toolkit';
import { notifications } from './slices/notifications';

export const store = configureStore({
  reducer: {
    notifications: notifications.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
