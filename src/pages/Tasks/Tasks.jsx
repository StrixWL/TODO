import './Tasks.css'
import { useEffect, useState } from 'react'
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
            focus: setInputFocus,
            count: 0
        })
        setItems(_items)
    }
    const onTaskRemove = (id) => {
        const _items = [...items]
        _items.splice(id, 1)
        setItems(_items)
    }
    return (
        <div className='tasks'>
            <h1>My Tasks</h1>
            <button onClick={onBtnclick} className='tasks__add-btn'>Add a task</button>
            {items.map((item, i) => (item.i = i ,<Task key={i} item={item} onTaskRemove={onTaskRemove} />))}
        </div>
    )
}

export default Tasks;