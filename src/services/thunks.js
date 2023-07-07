import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './services'

export const checkFootballPlayerThunk = createAsyncThunk(
    'getTeams',
    async () => await service.checkFootballPlayer() 
)