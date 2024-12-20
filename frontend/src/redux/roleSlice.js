import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
  name: 'role',
  initialState: null, // No role initially
  reducers: {
    setRole: (state, action) => action.payload,
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
