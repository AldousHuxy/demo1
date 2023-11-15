import { Button, Container, Stack } from 'react-bootstrap';

type CounterDisplayProps = {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    invert: () => void
}

export const SetCounterDisplay = ({ count, increment, decrement, reset, invert }: CounterDisplayProps) => {
    return (
        <Container className="mt-5">
            <Stack direction="horizontal" gap={4} className="my-1">
                <Button onClick={increment} className="ms-auto fs-4">+</Button>
                <h3>{count}</h3>
                <Button onClick={decrement} className="me-auto fs-4">-</Button>
            </Stack>
            <Stack direction="horizontal" gap={4}>
                <Button variant="danger" onClick={reset} className="ms-auto">Reset</Button>
                <Button variant="info" onClick={invert} className="me-auto">Invert</Button>
            </Stack>
        </Container>
    )
}