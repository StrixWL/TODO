import './Task.css'
import RoundCheckbox from '../ui/RoundCheckbox/RoundCheckbox'
import EditButton from '../ui/EditButton/EditButton'
import { useEffect, useState } from 'react'
import Counter from './Counter/Counter'
import TaskInput from './TaskInput/TaskInput'
import TaskTitle from './TaskTitle/TaskTitle'

const Task = (props) => {
    const [isBeingEdited, setIsBeingEdited] = useState(props.item.isBeingEdited)
    const [done, setDone] = useState(props.item.done)
    const [count, setCount] = useState(0)
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
            <TaskInput onBlur={onBlur} title={props.item.title} ref={props.item.ref} display={isBeingEdited ? 'inline': 'none'} i={props.i}/>
            <TaskTitle setCount={setCount} count={count} display={isBeingEdited ? 'none': 'inline'} textDecoration={props.item.done ? 'line-through' : 'none'} title={props.item.title} />
            <Counter count={count} />
            <EditButton className='tasks__task-edit-btn' onClick={() => onTaskEdit(props.i)} />
        </div>
    )
}

export default Task;