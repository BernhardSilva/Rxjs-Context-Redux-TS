//Context

import { useState } from "react"
import { useGentlemanContext } from "../context/useGentleman.context"

const ComponentContext1 = () => {

    const { setGentlemanContextValue } = useGentlemanContext()
    const [inputValue, setInputValue] = useState('')

    const handleClick = () => {
        setGentlemanContextValue(inputValue)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleClick}>
                SEND INFO CONTEXT
            </button>
        </div>
    )
}

export default ComponentContext1