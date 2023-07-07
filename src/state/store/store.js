import sportsInfoReducer from '../reducer/sportsreducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {sportsInfoReducer}
})