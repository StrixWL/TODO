import './Task.css'
import RoundCheckbox from '../ui/RoundCheckbox/RoundCheckbox'
import EditButton from '../ui/EditButton/EditButton'
import { useEffect, useState } from 'react'

const Task = (props) => {
    const [isBeingEdited, setIsBeingEdited] = useState(props.item.isBeingEdited)
    const [done, setDone] = useState(props.item.done)
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("rendered")
    })
    const onBlur = () => {
        props.item.title = props.item.ref.current.value
        setIsBeingEdited(false)
    }
    const onTaskEdit = () => {
        setIsBeingEdited(true)
        props.item.focus()
    }
    const onInputChange = () => {
        props.item.done = !props.item.done
        setDone(!done)
    }
    useEffect(() => {
        props.item.focus()
    }, [isBeingEdited])
    return (
        <div key={props.i} className='tasks__task'>
            <RoundCheckbox id={props.i} checked={props.item.done} className='tasks__task-checkbox' onChange={() => onInputChange()} />
            <input ref={props.item.ref} 
                style={{
                    display: isBeingEdited ? 'inline': 'none',
                }}
                onBlur={() => onBlur(props.i)} defaultValue={props.item.title} className='tasks__task-input' type="text" />
            <span
                onClick={() => setCount(count + 1)}
                style={{
                    display: isBeingEdited ? 'none': 'inline',
                    textDecoration: props.item.done ? 'line-through' : 'none'
                }} className='tasks__task-title'>{props.item.title}
            </span>
            <span className='tasks__task-counter'> {count} </span>
            <EditButton className='tasks__task-edit-btn' onClick={() => onTaskEdit(props.i)} />
        </div>
    )
}

export default Task;