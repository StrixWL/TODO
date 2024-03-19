import './TaskTitle.css'

const TaskTitle = ({setCount, count, display, textDecoration, title, done, item}) => {
    return (
        <span
            onClick={() => (item.count = count + 1, setCount(count + 1))}
            style={{
                display,
                textDecoration
            }} className='tasks__task-title'>{title}
        </span>
    )
}

export default TaskTitle;