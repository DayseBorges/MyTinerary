import { createSlice } from "@reduxjs/toolkit";

const citiesPerPage = 4;

const initialState = {
  data: [],
  pages: [],
  countrys: [],
  backup: [],
  currentPage: 1,
  citiesPerPage,
};

export const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        bulkCreateCities: (state, action) => {
            state.data = action.payload
            state.backup = action.payload
            state.currentPage = 1;
            state.pages = paginate(state.data, citiesPerPage); 
        },
        getCountrys: (state) => {
            const cities = state.data
            state.countrys = Array.from(new Set(cities.map((city)=>city.country)))
        },
        filterCities: (state, action) => {
            const {input, countrys} = action.payload
            if (input) {
                state.data = state.data.filter((city)=> city.name.toLowerCase().includes(input.toLowerCase()))
            } else if (countrys && countrys.length) {
                let filtered = []
                countrys.forEach((country)=> state.data.map((city)=> {city.country === country && filtered.push(city)}))
                state.data = filtered
            }
            
        },
        formatPages: (state) => {
            state.pages = paginate(state.data, citiesPerPage);
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
        backupCities: (state) => {
            state.data = state.backup
        },
        createItinerary: (state, action) => {   
            state.data.push(action.payload);
            state.pages = paginate(state.data, citiesPerPage);
        },
    },
    backupCities: (state) => {
      state.data = state.backup;
    },
    createItinerary: (state, action) => {
      state.data.push(action.payload);
      state.pages = paginate(state.data, citiesPerPage);
    },
  },
});

const paginate = (data, pageSize) => {
  const pageCount = Math.ceil(data.length / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => {
    const start = i * pageSize;
    return data.slice(start, start + pageSize);
  });
  return pages;
};

export const {
  bulkCreateCities,
  addOneCity,
  resetCities,
  setPage,
  formatPages,
  getCountrys,
  filterCities,
  backupCities,
  createItinerary,
} = citiesSlice.actions;

export default citiesSlice.reducer;
