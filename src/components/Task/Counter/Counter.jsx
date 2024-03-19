import './Counter.css'
import { useEffect } from "react"

const Counter = ({count}) => {
    useEffect(() => {
        console.log("rendered")
    })
    return (
        <span className='tasks__task-counter'> {count} </span>
    )
}

export default Counter;