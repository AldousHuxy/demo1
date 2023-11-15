import { Button, Container, Stack } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

type CounterProps = {
    initialCount: number
}

export const Counter = ({ initialCount }: CounterProps) => {
    const { count } = useParams()
    const navigate = useNavigate()

    return (
        <Container className="mt-5">
            <Stack direction="horizontal" gap={4} className="my-1">
                <Button onClick={() => navigate(`/useparams/${count ? parseInt(count) + 1 : 0}`)} className="ms-auto fs-4">+</Button>
                <h3>{count}</h3>
                <Button onClick={() => navigate(`/useparams/${count ? parseInt(count) - 1 : 0}`)} className="me-auto fs-4">-</Button>
            </Stack>
            <Stack direction="horizontal" gap={4}>
                <Button variant="danger" onClick={() => navigate(`/useparams/${initialCount}`)} className="ms-auto">Reset</Button>
                <Button variant="info" onClick={() => navigate(`/useparams/${count ? parseInt(count) * -1 : 0}`)} className="me-auto">Invert</Button>
            </Stack>
        </Container>
    )
}