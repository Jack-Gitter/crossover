import { createSlice } from "@reduxjs/toolkit";
import { checkFootballPlayerThunk } from "../../services/thunks";
import { footballTeams } from "./footballteams";
import { baseballTeams } from "./baseballteams";

const sportsInfo = createSlice({
    name: "sportsInfo",
    initialState: {
        footballTeams: [footballTeams],
        baseballTeams: [baseballTeams],
        userGuesses: [[]]
    },
    reducers: {
        setFootballTeams(state, action) {
            state.footballTeams = action.payload
            console.log(action.payload)
        },
        setBaseballTeams(state, action) {
            state.baseballTeams = action.payload
        }
    },
    extraReducers: {
        [checkFootballPlayerThunk.fulfilled]:
        (state, {payload}) => {
            // set user guesses here (like correct/incorrect)
            state.teams = payload
        }, 
        [checkFootballPlayerThunk.rejected]: 
        (state, {payload}) => {
            console.log('request failed')
        }
    }
})

export const {setFootballTeams, setBaseballTeams} = sportsInfo.actions
export default sportsInfo.reducer