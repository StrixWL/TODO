// import 'Task.css'

// const Task = () => {
//     return (
//         <div key={i} className='tasks__task'>
//             <RoundCheckbox id={i} checked={item.done} className='tasks__task-checkbox' onChange={() => onInputChange(i)} />
//             <input ref={item.ref} style={{
//                 display: item.isBeingEdited ? 'inline': 'none',
//             }} onBlur={() => onBlur(i)} defaultValue={item.title} className='tasks__task-input' type="text" />
//             <span style={{
//                 display: item.isBeingEdited ? 'none': 'inline',
//                 textDecoration: item.done ? 'line-through' : 'none'
//             }} className='tasks__task-title'>{item.title}</span>
//             <EditButton className='tasks__task-edit-btn' onClick={() => onTaskEdit(i)} />
//         </div>
//     )
// }

// export default Task;