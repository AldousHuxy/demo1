import { Button, Container, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, invert, reset } from '../redux/counterSlice';

type CounterProps = {
    initialCount: number
}

export const Counter = ({ initialCount }: CounterProps) => {
    const { count } = useSelector((state: any) => state.counter)
    const dispatch = useDispatch()

    return (
        <Container className="mt-5">
            <Stack direction="horizontal" gap={4} className="my-1">
                <Button onClick={() => dispatch(increment())} className="ms-auto fs-4">+</Button>
                <h3>{count}</h3>
                <Button onClick={() => dispatch(decrement())} className="me-auto fs-4">-</Button>
            </Stack>
            <Stack direction="horizontal" gap={4}>
                <Button variant="danger" onClick={() => dispatch(reset(initialCount))} className="ms-auto">Reset</Button>
                <Button variant="info" onClick={() => dispatch(invert())} className="me-auto">Invert</Button>
            </Stack>
        </Container>
    )
}