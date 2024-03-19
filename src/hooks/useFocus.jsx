import { createRef } from 'react'

const useFocus = () => {
    const htmlElRef = createRef(null)
    const setFocus = () => {
        htmlElRef.current && htmlElRef.current.focus()
    }
    return [ htmlElRef, setFocus] 
}

export default useFocus;