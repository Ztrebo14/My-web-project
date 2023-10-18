import React from 'react'

export const Task = (props) => {
    const [editedTaskName, setEditedTaskName] = React.useState('');
    const handleEditChange = (e) => {
        setEditedTaskName(e.target.value);
      };
    
      const handleUpdate = () => {
        props.updateTask(props.id, editedTaskName);
        setEditedTaskName('');
      };
    
    return(
        <div className="" style={{ textDecoration: props.completed ? "line-through" : "none"}}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>Remove</button>
            <input
        type="text"
        placeholder="New Task Name"
        value={editedTaskName}
        onChange={handleEditChange}
      />
      <button onClick={handleUpdate}>Update</button>
            {/* <button onClick={() => props.updateTask(props.id, props.taskName)}>Update</button> */}
        </div>
    )
}