import { Card, Form, Stack } from "react-bootstrap"

export type TTodo = {
    id: number
    title: string
    complete: boolean
}

export const Todo = ({ title, complete }: {} & TTodo) => {
    return (
        <Card className="mb-1 px-3">
            <Stack direction="horizontal">
                <Card.Title className="me-auto">{title}</Card.Title>
                <Form.Check checked={complete} />
            </Stack>
        </Card>
    )
}