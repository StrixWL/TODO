const TaskTitle = ({setCount, count, display, textDecoration, title, done}) => {
    return (
        <span
            onClick={() => setCount(count + 1)}
            style={{
                display,
                textDecoration
            }} className='tasks__task-title'>{title}
        </span>
    )
}

export default TaskTitle;