import { create } from 'zustand';

type State = {
    count: number
    increment: () => void
    decrement: () => void
    reset: (initialCount: number) => void
    invert: () => void
}

export const useCounter = create<State>((set) => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
    reset: (initialCount) => set(() => ({ count: initialCount })),
    invert: () => set(state => ({ count: state.count * -1 }))
}))