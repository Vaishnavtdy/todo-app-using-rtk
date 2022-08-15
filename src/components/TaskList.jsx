import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../slices/todoSlice";
import { updateState } from "../slices/updateSlice";

function TaskList({ name, id, status, index, bg, setTempState}) {
   const dispatch = useDispatch();
   const handleDelete = (id) => {
      dispatch(deleteTask(id));
   };
   const handleDone = (id) => {
      dispatch(doneTask(id));
   };
   const handleEdit = (id) => {
      dispatch(updateState())
      setTempState({name, id})
   }

   return (
      <div
         className="flex justify-between p-3 mx-10 shadow-lg rounded"
         style={{ backgroundColor: "#" + bg}}
      >
         <div className="flex space-x-3">
            <div style={{display:"flex", width: "22px", height: "22px", background:"transparent", borderRadius:"50%", border:"1px solid black"}}>
               <p className="text-sm m-auto p-auto">{index}</p>
            </div>
            <h1 className="text-white">
               {status ? <s>{name}</s> : <>{name}</>}
            </h1>
         </div>
         <div className="flex space-x-2">
            <svg
               onClick={() => handleDone(id)}
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 cursor-pointer "
               viewBox="0 0 20 20"
               fill="#149c4f"
            >
               <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
               />
            </svg>
            <svg
               onClick={()=>handleEdit(id)}
               xmlns="http://www.w3.org/2000/svg"
               className=" h-5 w-5 cursor-pointer"
               viewBox="0 0 20 20"
               fill="#135787"
            >
               <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            <svg
               onClick={()=> handleDelete(id)}
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 cursor-pointer"
               viewBox="0 0 20 20"
               fill="#fc0303"
            >
               <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
               />
            </svg>
         </div>
      </div>
   );
}

export default TaskList;
