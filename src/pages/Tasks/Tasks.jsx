import './Tasks.css'
import RoundCheckbox from '../../components/ui/RoundCheckbox/RoundCheckbox'
import { useState, useRef, useEffect, createRef } from 'react'
import edit from '../../assets/edit.svg';
import useFocus from '../../hooks/useFocus';
import EditButton from '../../components/ui/EditButton/EditButton';

const Tasks = () => {    
    const [inputRef1, setInputFocus1] = useFocus()
    const [inputRef2, setInputFocus2] = useFocus()

    const [items, setItems] = useState([
        {
            title: 'eat food',
            done: true,
            isBeingEdited: false,
            ref: inputRef1,
            focus: setInputFocus1
        },
        {
            title: 'think about life',
            done: false,
            isBeingEdited: false,
            ref: inputRef2,
            focus: setInputFocus2
        }
    ])
    useEffect(() => {
        items.forEach(item => {
            if (item.isBeingEdited)
                item.focus()
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
        console.log("hh")
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
                <div key={i} className='tasks__task'>
                    <RoundCheckbox id={i} checked={item.done} className='tasks__task-checkbox' onChange={() => onInputChange(i)} />
                    <input ref={item.ref} style={{
                        display: item.isBeingEdited ? 'inline': 'none',
                    }} onBlur={() => onBlur(i)} defaultValue={item.title} className='tasks__task-input' type="text" />
                    <span style={{
                        display: item.isBeingEdited ? 'none': 'inline',
                        textDecoration: item.done ? 'line-through' : 'none'
                    }} className='tasks__task-title'>{item.title}</span>
                    <EditButton className='tasks__task-edit-btn' onClick={() => onTaskEdit(i)} />
                </div>
            ))}
        </div>
    )
}

export default Tasks;