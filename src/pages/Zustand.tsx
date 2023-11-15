import { Button, Container, Stack } from 'react-bootstrap';
import { useCounter } from '../zustand/useStore';

type CounterProps = {
    initialCount: number
}

export const Counter = ({ initialCount }: CounterProps) => {
    const { count, increment, decrement, reset, invert } = useCounter()
    
    return (
        <Container className="mt-5">
            <Stack direction="horizontal" gap={4} className="my-1">
                <Button onClick={increment} className="ms-auto fs-4">+</Button>
                <h3>{count}</h3>
                <Button onClick={decrement} className="me-auto fs-4">-</Button>
            </Stack>
            <Stack direction="horizontal" gap={4}>
                <Button variant="danger" onClick={() => reset(initialCount)} className="ms-auto">Reset</Button>
                <Button variant="info" onClick={invert} className="me-auto">Invert</Button>
            </Stack>
        </Container>
    )
}