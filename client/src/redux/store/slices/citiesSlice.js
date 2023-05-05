import { createSlice } from '@reduxjs/toolkit'

const citiesPerPage = 4;

const initialState  = {
    data: [],
    pages: [],
    currentPage: 1,
    citiesPerPage,
}

export const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        bulkCreateCities: (state,action) => {
            state.data = action.payload
            state.pages = paginate(action.payload, citiesPerPage);
            state.currentPage = 1;
        },
        addOneCity: (state, action) => {
            const { city } = action.payload
            state.push(city)
        },
        resetCities: (state) => {
            return []
        },
        setPage: (state, action) => {
                state.currentPage = action.payload
        },
    }
})

const paginate = (data, pageSize) => {
    const pageCount = Math.ceil(data.length / pageSize);
    const pages = Array.from({ length: pageCount }, (_, i) => {
      const start = i * pageSize;
      return data.slice(start, start + pageSize);
    });
    return pages;
};


export const { bulkCreateCities, addOneCity, resetCities, setPage } = citiesSlice.actions;


export default citiesSlice.reducer