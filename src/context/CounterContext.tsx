import { ReactNode, createContext, useContext, useState } from 'react';

type CounterProviderProps = { children: ReactNode }

type CounterContext = {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    invert: () => void
}

const CounterContext = createContext({} as CounterContext)

export const useCounter = () => {
    return useContext(CounterContext)
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
    const initialCount: number = 0
    const [count, setCount] = useState<number>(initialCount)

    const increment = (): void => {
        setCount(prev => prev + 1)
    }

    const decrement = (): void => {
        setCount(prev => prev - 1)
    }

    const reset = (): void => {
        setCount(initialCount)
    }

    const invert = (): void => {
      setCount(prev => prev * -1)
    }

    return (
        <CounterContext.Provider value={{
            count,
            increment,
            decrement,
            reset,
            invert
        }}>
            {children}
        </CounterContext.Provider>
    )
}