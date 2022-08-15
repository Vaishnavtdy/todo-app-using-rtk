import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";
import EditTodo from "./EditTodo";

function Todo() {
   const todo = useSelector((state) => state.todo.todo);
   const isUpdate = useSelector((state) => state.update.isUpdate);
   const [tempState, setTempState] = useState("");

   return (
      <div className="flex flex-col items-center bg-[#3a3b3d] h-[100vh]">
         <h1 className="text-white font-bold text-2xl mt-20 mb-10">
            Todo List
         </h1>
         <div className="w-9/12">{isUpdate ? <EditTodo tempState={tempState} /> : <AddTodo />}</div>
         <div className="mt-5 flex flex-col space-y-4 w-9/12">
            {todo ?
               todo.map((item, index) => (
                  <TaskList
                     setTempState={setTempState}
                     name={item.name}
                     index={index + 1}
                     id={item.id}
                     status={item.status}
                     bg={item.color}
                  />
               )) 
               :
               <h1>No tasks...</h1>
            }
         </div>
      </div>
   );
}

export default Todo;
