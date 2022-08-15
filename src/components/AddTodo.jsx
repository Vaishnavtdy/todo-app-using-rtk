import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTask } from "../slices/todoSlice";

function AddTodo() {
   const [input, setInput] = useState("");
   const dispatch = useDispatch()
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addTask({id: Date.now(), name: input, status: false, color: Math.random().toString(16).substr(-6)}))
      setInput('')
   };
   return (
      <>
         <form className="px-10" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 justify-between mb-4">
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="todo"
                  type="text"
                  placeholder="Add your Todolist here"
                  name="todo"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
               />
               <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto"
                  type="submit"
               >
                  Add
               </button>
            </div>
         </form>
      </>
   );
}

export default AddTodo;
