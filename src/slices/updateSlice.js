import { createSlice } from '@reduxjs/toolkit'

const updateSlice = createSlice({
    name: 'update',
    initialState: {
        isUpdate : false,
        item: []
    },
    reducers:{
        updateState: (state)=> {
            state.isUpdate = !state.isUpdate
        }
    }
})

export const {updateState} = updateSlice.actions
export default updateSlice.reducer