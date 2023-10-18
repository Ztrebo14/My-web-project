// import React from 'react'
// import { useState, useEffect } from 'react'
// import {Task} from './Task'
// import '../styles/UpdateTask.css'

// const TodoList = () => {
//     let [todoList, setTodoList] = useState([])
//     let [newList, setNewList] = useState('')
//     let [editTaskId, setEditTaskId] = useState(null)

//     useEffect(() => {
        
//         console.log('render');
//     })

//     const handleChange = (e) => {
      
//         // const {value} = e.target
//         setNewList(e.target.value)
     
        
      
//     }

//     const addTask = (e) => {
//         e.preventDefault()
//         let task = {
//             id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, 
//             taskName: newList,
//             completed: false
//         }

    

        
//             setTodoList([...todoList, task])
//             setNewList('');
    
       
       
      
        
//     }

//     let deleteTask = (id) => { 
//         setTodoList(todoList.filter((task) => task.id !== id))
//     }
    

//     let completeTask = (id) => {
//         setTodoList(todoList.map((task) => task.id === id ? { ...task, completed: true } : task ))
//     }

//     let updateTask = (id) => {

//         setTodoList(todoList.map((task) => (task.id === id ? { ...task, taskName: newList } : task)));
//         setEditTaskId(null);
//         setNewList('');
        
//     }

//   return (
//     <>
//         <div className="addTask">
//             <form onSubmit={(e) => (editTaskId ? updateTask(editTaskId) : addTask(e))}>
//             <input required type="text" value={newList}  onChange={handleChange} />
//             <button type='submit'>{setEditTaskId ? "Update" : "Submit"}</button>
//             </form>
            
           
//         </div>
//         <div className="lists">
//             {todoList.map((task, index) => {
              
//                 return <Task 
//                     taskName={task.taskName} 
//                     key={task.id} 
//                     id={task.id}
//                     completed={task.completed}
//                     completeTask={completeTask}
//                     deleteTask={deleteTask} 
//                     updateTask={() => setEditTaskId(task.id)}
//                     />
//             })}
//         </div>
//     </>
//   )
// }

// export default TodoList

import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const[object, setObject] = useState([])
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React' },
//     { id: 2, text: 'Build a project' },
//   ]);

//   const [newTodo, setNewTodo] = useState('');
//   const [editingTodoId, setEditingTodoId] = useState(null);
//   const [editingTodoText, setEditingTodoText] = useState('');

//   const handleInputChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
//       const newTodoObj = { id: newId, text: newTodo };
//       setTodos([...todos, newTodoObj]);
//       setNewTodo('');
//     }
//   };

//   const handleEditTodo = (id, text) => {
//     setEditingTodoId(id);
//     setEditingTodoText(text);
//   };

//   const handleUpdateTodo = () => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === editingTodoId ? { ...todo, text: editingTodoText } : todo
//     );
//     setTodos(updatedTodos);
//     setEditingTodoId(null);
//     setEditingTodoText('');
//   };

//   const handleDeleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Add a new todo"
//         value={newTodo}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {editingTodoId === todo.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editingTodoText}
//                   onChange={(e) => setEditingTodoText(e.target.value)}
//                 />
//                 <button onClick={handleUpdateTodo}>Update</button>
//               </>
//             ) : (
//               <>
//                 {todo.text}{' '}
//                 <button onClick={() => handleEditTodo(todo.id, todo.text)}>
//                   Edit
//                 </button>{' '}
//                 <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

    const displayData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
           return res.json()
          
        }).then((response) => {
            setObject(response)
        })
     
    }

    useEffect(() => {
        displayData();
    })

    return (
        <>
        {
            object.map(o => {
                return(
                    <h2>{o.title}</h2>
                )
            })
        }
        </>
    )


};

export default TodoList;
