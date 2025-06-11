import { createSlice, original } from "@reduxjs/toolkit";
import NewDisney from "../../components/NewDisney";
import Popular from "../../components/Popular";
import Sports from "../../components/Sports";
import Treading from "../../components/Treading";


const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    popular: null,
    sports: null,
    treading: null
};

const movieSlice = createSlice(
    {
        name: 'movie',
        initialState,
        reducers: {
            setMovies: (state, action) => {
                state.recommend = action.payload.recommend
                state.newDisney = action.payload.NewDisney
                state.popular = action.payload.popular
                state.sports = action.payload.sports
                state.original = action.payload.original
                state.treading = action.payload.treading
            },
        },
    }
);

export const { setMovies } = movieSlice.actions

export const SelectRecommend = state => state.movie.recommend
export const SelectNewDisney = state => state.movie.newDisney
export const SelectPopular = state => state.movie.popular
export const SelectSports = state => state.movie.sports
export const SelectOriginal = state => state.movie.original
export const SelectTreading = state => state.movie.treading


export default movieSlice.reducer;