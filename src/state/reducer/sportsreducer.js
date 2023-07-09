import { createSlice } from "@reduxjs/toolkit";
import {generateValidFootballTeamCombinationsThunk} from '../../services/thunks'

const sportsInfo = createSlice({
    name: "sportsInfo",
    initialState: {
        gridTeams: [['hi', 'hey', 'hello'], 
                         ['someone', 'somethign', 'testing']],
        userGuesses: [[]]
    },
    extraReducers: {
        [generateValidFootballTeamCombinationsThunk.fulfilled]: 
            (state, {payload}) => {
                console.log('payload is')
                console.log(payload)
                state.gridTeams = payload;
            },
    },
})

export default sportsInfo.reducer