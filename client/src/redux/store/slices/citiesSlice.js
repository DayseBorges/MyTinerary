import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        bulkCreateCities: (state,action) => {
            state.data = action.payload
        },
        addOneCity: (state, action) => {
            const { city } = action.payload
            state.push(city)
        },
        resetCities: (state) => {
            return []
        }
    }   
})

    

export const { bulkCreateCities, addOneCity, resetCities } = citiesSlice.actions



export default citiesSlice.reducer