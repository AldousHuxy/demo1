import { useMemo, useState } from "react"
import { Button, Container, Modal, Form, Stack } from "react-bootstrap"

type LaunchModalProps = {
    show: boolean
    handleClose: () => void
}

export const CalculatedValue = () => {
    const [value, setValue] = useState<string>('5')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const doubleValue = (num: string): number => {
        for (let i = 0; i < 1_000_000_000; i++) {}
        return parseInt(num) * 2
    }

    const doubledValue = doubleValue(value)

    // const doubledValue = useMemo(() => {
    //     return doubleValue(value)
    // }, [value])

    return (
        <Container>
            <div className="fs-3 text-center">Calculated Value: {doubledValue}</div>
            <Stack gap={2}>
                <Form.Control
                    type="text"
                    placeholder="Enter a number e.g. 5"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button variant="primary" onClick={handleShow}>
                    Launch Modal
                </Button>
            </Stack>
            <LaunchModal show={show} handleClose={handleClose} />
        </Container>
    )
}

const LaunchModal = ({ show, handleClose }: LaunchModalProps) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a launched modal</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}