import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../slices/todoSlice";
import { updateState } from "../slices/updateSlice";

function EditTodo({ tempState }) {
   const { id } = tempState;
   const [state, setState] = useState(tempState.name);
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateTask({ name: state, id }));
   };

   return (
      <div>
         <form className="px-10" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 justify-between mb-4">
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="todo"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  name="todo"
               />
               <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto"
                  type="submit"
               >
                  Edit
               </button>
               <button
                  onClick={() => dispatch(updateState())}
                  className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto"
               >
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
}

export default EditTodo;
