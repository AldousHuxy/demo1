import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type State = {
    count: number
}

const initialState: State = { count: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        reset: (state, action: PayloadAction<number>) => { state.count = action.payload },
        invert: (state) => { state.count *= -1 }
    }
})

export const { increment, decrement, reset, invert } = counterSlice.actions

export default counterSlice.reducer