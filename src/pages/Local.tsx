import { CounterDisplay } from "../components/Counter"
import { useLocalStorage } from "../hooks/useLocalStorage"

type CounterProps = {
    initialCount: number
}

export const Counter = ({ initialCount }: CounterProps) => {
    const [count, setCount] = useLocalStorage('COUNT', initialCount)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const reset = () => {
        setCount(initialCount)
    }

    const invert = () => {
      setCount(prev => prev * -1)
    }

    return (
        <CounterDisplay
            count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}
            invert={invert}
        />
    )
}