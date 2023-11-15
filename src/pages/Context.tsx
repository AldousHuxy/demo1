import { useCounter } from '../context/CounterContext';
import { CounterDisplay } from '../components/Counter';

export const Counter = () => {
    const { count, increment, decrement, reset, invert } = useCounter()

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