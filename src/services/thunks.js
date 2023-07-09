import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './services'

export const generateValidFootballTeamCombinationsThunk = createAsyncThunk(
    'getTeamsFootball',
    async () => await service.generateValidFootballTeamCombinations()
)

