import './Tasks.css'
import { useState } from 'react'
import useFocus from '../../hooks/useFocus';
import Task from '../../components/Task/Task';

const Tasks = () => {
    const [items, setItems] = useState([])
    const onBtnclick = () => {
        const _items = [...items]
        const [inputRef, setInputFocus] = useFocus()
        _items.push({
            title: '',
            done: false,
            isBeingEdited: true,
            ref: inputRef,
            focus: setInputFocus
        })
        setItems(_items)
    }
    return (
        <div className='tasks'>
            <h1>My Tasks</h1>
            <button onClick={onBtnclick} className='tasks__add-btn'>Add a task</button>
            {items.map((item, i) => (
                <Task key={i} item={item} i={i} />
            ))}
        </div>
    )
}

export default Tasks;