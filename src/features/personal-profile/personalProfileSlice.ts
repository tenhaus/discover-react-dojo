import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { Profile } from "./personalProfileTypes";
import { postProfile, fetchProfile } from "./personalProfileAPI";

export interface PersonalProfileState {
    saved: boolean;
    profile?: Profile;
}

const initialState: PersonalProfileState = {
    saved: false
}

export const loadProfile = createAsyncThunk(
    'personalProfile/loadProfile',
    async () => {
        const response = await fetchProfile();
        return response.data;
    }
);

export const saveProfile = createAsyncThunk(
    'personalProfile/saveProfile',
    async (profile: Profile) => {
        const response = await postProfile(profile);
        return response.data;
    }
)

export const personalProfileSlice = createSlice({
    name: 'personalProfile',
    initialState,
    reducers: {
        showProfileForm: (state) => {
            state.saved = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
            })
            .addCase(saveProfile.fulfilled, (state, action) => {
                state.saved = true;
                state.profile = action.payload;

            })
    }
});

export const selectProfile = (state: RootState) => state.personalProfile.profile;
export const isProfileSaved = (state: RootState) => state.personalProfile.saved;

export const { showProfileForm } = personalProfileSlice.actions;
export default personalProfileSlice.reducer;