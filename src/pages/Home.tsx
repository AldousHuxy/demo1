import { Card, Container } from "react-bootstrap"

export const Home = () => {
    return (
        <Container>
            <h3 className="text-center">Demo 1: React State Management</h3>
            <Card>
                <Card.Title className="bg-light text-center p-2">Lesson Plan</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <div>How do we manage the state of application in React?</div>
                    </Card.Text>
                    <Card.Text>
                        <h5>Lesson 1 - useState</h5>
                        <div>Native React hook for component-level state</div>
                    </Card.Text>
                    <Card.Text>
                        <h5>Lesson 2 - useReducer</h5>
                        <div>Native React hook for component-level state</div>
                    </Card.Text>
                    <Card.Text>
                        <h5>Lesson 3 - Context API</h5>
                        <div>Native React hook for provider-level state</div>
                    </Card.Text>
                    <Card.Text>
                        <h5>Lesson 4 - useLocalStorage</h5>
                        <div>Custom React hook for persistent state</div>
                    </Card.Text>
                    <Card.Text>
                        <h5>Lesson 5 - useParams</h5>
                        <div>React Router hook for URL-level state</div>
                    </Card.Text>
                    <Card.Text>
                        <h5>Lesson 6 - Zustand</h5>
                        <div>Third-Party React Library for application-level state</div>
                    </Card.Text>
                    <Card.Text>
                        <h5>Lesson 7 - Redux Toolkit</h5>
                        <div>Third-Party React Library for application-level state</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}