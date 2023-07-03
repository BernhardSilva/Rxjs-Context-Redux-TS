//Context

import { useGentlemanContext } from "../context/useGentleman.context"

const ComponentContext2 = () => {

    const { gentlemanContextValue } = useGentlemanContext()

    return (
        <div>
            <h3>Context value is:</h3><b>{gentlemanContextValue}</b>
        </div>
    )
}

export default ComponentContext2