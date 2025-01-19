import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {},
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
            if (state[camperId]) {
                delete state[camperId];
            } else {
                state[camperId] = true;
            }
        },
        clearFavorites: () => {
            return {};
        }
    },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export const selectFavorites = state => state.favorites;
export const favoritesReducer = favoritesSlice.reducer;
