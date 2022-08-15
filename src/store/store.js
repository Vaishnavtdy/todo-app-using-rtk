import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slices/todoSlice'
import updateReducer from '../slices/updateSlice'

export default configureStore({
    reducer:{
        todo: todoReducer,
        update: updateReducer
    }
})