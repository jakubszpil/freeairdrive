import { createSlice } from '@reduxjs/toolkit';

export type NotificationState = {};

const initialState: NotificationState = {};

const slice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
});

export { slice as notifications };
