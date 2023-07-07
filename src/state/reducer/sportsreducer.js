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
    extraReducers: {
        [checkFootballPlayerThunk.fulfilled]:
        (state, {payload}) => {
            state.teams = payload
        }, 
        [checkFootballPlayerThunk.rejected]: 
        (state, {payload}) => {
            console.log('request failed')
        }
    }
})

export default sportsInfo.reducer