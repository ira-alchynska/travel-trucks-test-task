import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        selectedEquipment: {},
        selectedType: null,
        location: null,
    },
    reducers: {
        setEquipment: (state, action) => {
            state.selectedEquipment = action.payload;
        },
        setType: (state, action) => {
            state.selectedType = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        resetFilters: (state) => {
            state.selectedEquipment = {};
            state.selectedType = [];
        },
    },
});

export const { setEquipment, setType, setLocation, resetFilters } = filterSlice.actions;

export const selectEquipment = state => state.filter.selectedEquipment;
export const selectType = state => state.filter.selectedType;
export const selectLocation = state => state.filter.location;

export const filtersReducer = filterSlice.reducer;
