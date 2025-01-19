import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchCampers } from '../api-trucks.js';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = createAsyncThunk(
    'campers/getCampers',
    async (query, thunkAPI) => {
        try {
            const result = await fetchCampers(query);
            return result;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
