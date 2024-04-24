import { useState } from "react"

export function useCounter() {
    const [count, setcount] = useState(0)

    function counterPlus() {
        setcount(count => count + 1)
    }
    function counterLoss() {
        setcount(count => count - 1)
    }
    function counterReset() {
        setcount(0)
    }
    return {
        count,
        counterPlus,
        counterLoss,
        counterReset,
    }
}