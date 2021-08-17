import { createSlice } from '@reduxjs/toolkit'

export interface PersonalProfileState {
    name?: string;
    email?: string;
}

const initialState: PersonalProfileState = {}

export const personalProfileSlice = createSlice({
    name: 'personalProfile',
    initialState,
    reducers: {}
});

export default personalProfileSlice.reducer;