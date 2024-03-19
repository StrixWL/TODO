import './Task.css'
import RoundCheckbox from '../ui/RoundCheckbox/RoundCheckbox'
import EditButton from '../ui/EditButton/EditButton'

const Task = (props) => {
    return (
        <div key={props.i} className='tasks__task'>
            <RoundCheckbox id={props.i} checked={props.item.done} className='tasks__task-checkbox' onChange={() => props.onInputChange(props.i)} />
            <input ref={props.item.ref} style={{
                display: props.item.isBeingEdited ? 'inline': 'none',
            }} onBlur={() => props.onBlur(props.i)} defaultValue={props.item.title} className='tasks__task-input' type="text" />
            <span style={{
                display: props.item.isBeingEdited ? 'none': 'inline',
                textDecoration: props.item.done ? 'line-through' : 'none'
            }} className='tasks__task-title'>{props.item.title}</span>
            <EditButton className='tasks__task-edit-btn' onClick={() => props.onTaskEdit(props.i)} />
        </div>
    )
}

export default Task;