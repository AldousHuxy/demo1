import { useReducer } from "react"
import { CounterDisplay } from "../components/Counter"

type CounterProps = {
    initialCount: number
}

type State = {
    count: number
}

type Action = {
    type: string
    payload: number
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: action.payload }
        case 'invert':
            return { count: state.count * -1 }
        default:
            return state
    }
}

export const Counter = ({ initialCount }: CounterProps) => {
    const [state, dispatch] = useReducer(reducer, { count: initialCount })

    const increment = () => {
        dispatch({ type: 'increment', payload: initialCount })
    }

    const decrement = () => {
        dispatch({ type: 'decrement', payload: initialCount })
    }
    
    const reset = () => {
        dispatch({ type: 'reset', payload: initialCount })
    }

    const invert = () => {
        dispatch({ type: 'invert', payload: initialCount })
    }

    return (
        <CounterDisplay
            count={state.count}
            increment={increment}
            decrement={decrement}
            reset={reset}
            invert={invert}
        />
    )
}