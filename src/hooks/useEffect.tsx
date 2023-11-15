import { useEffect, useState } from "react"
import { TTodo, Todo } from "../components/Todo"
import { Container } from "react-bootstrap"


export const FetchData = () => {
    const [todos, setTodos] = useState<TTodo[]>([])
    const [refetch, setRefetch] = useState<boolean>(false)

    // fetch('http://localhost:5174/todos')
    //     .then(res => res.json())
    //     .then(data => setTodos(data))

    useEffect(() => {
        fetch('http://localhost:5174/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [refetch])

    return (
        <Container>
            {/* <Button onClick={() => setRefetch(!refetch)} className="mb-1">Refetch</Button> */}
            {todos.map(todo => (
                <Todo {...todo} />
            ))}
        </Container>
    )
}