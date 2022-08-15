import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
   name: "todo",
   initialState: {
      todo: [],
   },
   reducers: {
      addTask: (state, action) => {
         const {id, name, color, status} = action.payload
         state.todo=[...state.todo, {id, name, color, status}]
      },
      deleteTask: (state, action) => {
         state.todo = state.todo.filter(
            (task) => task.id !== action.payload
         );
      },
      doneTask: (state, action) => {
         state.todo = state.todo.map((task)=>{
            if(task.id === action.payload){
               return({...task, status: !task.status})
            }
            return task
         })
         
      },
      updateTask: (state, action) => {
         state.todo = state.todo.map((task)=>{
            if(task.id === action.payload.id){
               return({...task, name:action.payload.name})
            }
            return task
         })
      }
   },
});

export const { addTask, deleteTask, doneTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
