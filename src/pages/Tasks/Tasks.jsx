import './Tasks.css'
import { useState, useEffect } from 'react'
import useFocus from '../../hooks/useFocus';
import Task from '../../components/Task/Task';

const Tasks = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        items.forEach(item => {
            if (item.isBeingEdited)
                item.focus() // bad
        })
    }, [items])
    const onBtnclick = (id) => {
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
    const onInputChange = (id) => {
        const _items = [...items]
        _items[id].done = !_items[id].done
        setItems(_items)
    }
    const onBlur = (id) => {
        const _items = [...items]
        _items[id].isBeingEdited = false
        _items[id].title = _items[id].ref.current.value
        setItems(_items)
    }
    const onTaskEdit = (id) => {
        const _items = [...items]
        _items[id].isBeingEdited = true
        setItems(_items)
    }
    return (
        <div className='tasks'>
            <h1>My Tasks</h1>
            <button onClick={onBtnclick} className='tasks__add-btn'>Add a task</button>
            {items.map((item, i) => (
                <Task key={i} item={item} i={i} onBlur={onBlur} onTaskEdit={onTaskEdit} onInputChange={onInputChange} />
            ))}
        </div>
    )
}

export default Tasks;