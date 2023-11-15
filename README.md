# [React](https://react.dev/)
- React is a frontend library used develop client-side applications.
- React runs on the client as a Single Page Application (SPA).
- React is referred to as a framework comparable to other component-based SPAs such as Angular and Vue.
- React Components that serve many functions including the visual UI layout, state management, and data fetching.

## JavaScript XML (JSX)
 - JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
 - JSX produces React elements inside a Virtual DOM as functions, this differs from template engines that simply allow dynamic rerendering.
 - Template languages include: [Handlebars](https://handlebarsjs.com/), [EJS](https://ejs.co/), [Pug](https://pugjs.org/api/getting-started.html), and many more.

### JSX vs. HTML
 1. JSX allows you to include expressions and functions within the syntax, while HTML only allows for static text.
 2. JSX elements are transformed into JavaScript function calls, while HTML elements are rendered as DOM nodes.
 3. JSX can be used to create dynamic user interfaces, while HTML is mainly used for static content.
 4. JSX components can have states and props, while HTML elements cannot.
 5. JSX allows for the use of JS expressions, like variables, inside the JSX tags, while HTML doesn’t.
 6. JSX allows for the use of JS conditional statements and loops, while HTML doesn’t.
 7. JSX components can be reused across the application, while HTML elements can’t.
 8. JSX is used with React, which follows a component-based architecture, while HTML follows a document-based architecture.
 9. JSX allows for the use of JS to create a virtual DOM, while HTML doesn’t.
 10. JSX allows for the use of JS for server-side rendering and code-splitting, which can improve the SEO of the application, while HTML doesn’t
```html
<div className="container">
    <div>Variable: {myVariable}</div>
    <button className="btn btn-primary">Click Me!</button>
</div>
```

## Virtual Document Object Model (Virtual DOM)
 - The Virtual DOM is unique to all single page applications (SPA's) as it create the markup for the client entirely in JavaScript changing elements via programmatic rendering of those elements.
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>I <3 React</title>
  </head>
  <body>
    <!-- The only code we need is a div tag with an id of 'root' -->
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
 - `createRoot` lets you create a root to display React components inside a browser DOM node.
 - StrictMode lets you find common bugs in your components early during development.
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

## React Components
 - React component are JavaScript functions that return JSX to the Virtual DOM.
 - The stateful values and all other hooks are declared at the top of the component.
 - Each component can receive props from the parent component.

## React Fragments
 - Sometimes we need to return multiple elements from a JSX function
```html
<div className="nav navbar">Navbar</div>
<div className="container">Main Content</div>
<div className="nav sidebar">Sidebar</div>
```
 - In order to do so we need to follow the same principal of any function, return only one thing.
```html
<div>
    <div className="nav navbar">Navbar</div>
    <div className="container">Main Content</div>
    <div className="nav sidebar">Sidebar</div>
</div>
```
 - Unfortunately, this can make SEO and the accessibility of application overly complex with randoms div tags.
 - Instead, we can use React fragments.
```html
<>
    <div className="nav navbar">Navbar</div>
    <div className="container">Main Content</div>
    <div className="nav sidebar">Sidebar</div>
</>
```
## State vs. Props


## State vs. Props
 - All state is immutable!
 - Stateful values within a React component can be changed between renders.
 - State is immutable so a function a used to reevaluate the value and rerender the component with the modified state.

```tsx
import { Counter } from './Counter'

const MyCounterApp = () => {
    const [count, setCount] = useState<number>(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <button onClick={incrementCount}>Increment</button>
            <Counter count={count} />
            <button onClick={decrementCount}>Decrement</button>
        </>
    )
}

export default MyCounterApp;
```
 - Props a simply the arguments to the React functional component.
 - React Components accept a `props` object that contains all of the properties we've passed to the component.
```ts
export const Counter = (props) => {
    return (
        <div>{props.count}</div>
    )
}
```
```ts
export const Counter = ({ count }) => {
    return (
        <div>{count}</div>
    )
}
```

![Component State](https://static.packt-cdn.com/products/9781786465658/graphics/image_03_001.jpg)

```tsx
const App = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)

    return (
        <ThisComponent isOpen={sidebarIsOpen} isDisabled={buttonDisabled} />
    )
}

export default App;
```
```tsx
export default function ThisComponent(props) {
    return (
        <div className="container">
            <Sidebar isOpen={props.isOpen} />
            <button type="button" disabled={props.isDisabled}>Click Me!</button>
        </div>
    )
}
```
 - Instead of receiving props in a single variable, we can destructure them individually.
```tsx
const ThisComponent = ({ isOpen, isDisabled }) => {
    return (
        <div className="container">
            <Sidebar open={isOpen} />
            <button type="button" disabled={isDisabled}>Click Me!</button>
        </div>
    )
}

export default MyComponent;
```
### Upstream Props
 - Additionally, stateful values can be passed from child to parent through callback functions.
 - Typically this method of passing state up and down our component tree will result in an overly-complicated structure that, with greater complexity, will be a pain a expand down the line.
```tsx
import { Child } from './Child';

const Parent = () => {
    const greetFromChild = (location: string) => {
        console.log(`Greetings from ${location}`)
    }

    return (
        <Child greet={greetFromChild} />
    )
}

export default App;
```
```tsx
export const Child = ({ greet }) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        greet('This Component')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.current.target)} />
            <button type="submit">Submit Form</button>
        </form>
    )
}
```

## Suspense
 - `<Suspense>` lets you display a fallback until its children have finished loading.
```tsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

## Profiler
- `<Profiler>` lets you measure rendering performance of a React tree programmatically.
 - You use browser extensions such as Chrome's [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) to view your application component tree.
```ts
<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>
```

## React Router
 - [React Router](https://reactrouter.com/en/main) enables "client side routing".

```tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Store } from '../pages/Store'
import { About } from '../pages/About'

const App = () => {
    return  (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
// https://www.myapp.com/
// https://www.myapp.com/store
// https://www.myapp.com/about
```

## Zod
 - [Zod](https://zod.dev/) is a typeScript-first schema validation with static type inference.

```bash
npm i zod
```

![Dru-Zod](https://static.wikia.nocookie.net/youngjustice/images/d/d0/Dru-Zod.png/revision/latest?cb=20220613114249)

### Validating External Data
 - Backend API requests
 - Third-party APIs
 - User Input (Form Data)
 - Local Storage
 - URL Parameters

### Creating a schema

```ts
import { z } from "zod";

const User = z.object({ username: z.string() })

User.parse({ username: "Ludwig" })

// extract the inferred type
type User = z.infer<typeof User>
// { username: string }
```

# React Hooks
 - Hooks are functions that let you "hook" into the React state and lifecycle features from function components.
## React Hook - useState
 - *useState* returns a state value and a function to update it.
 - RULES TO FOLLOW:
   - All state/lifecycle logic should be inside either a react, external, or custom hook.
   - All hooks should be declared at the top of the function.
   - Hooks cannot be conditional and must run in the same order they were declared.
```tsx
import { useState } from 'react';

const [value, setValue] = useState<string>('initial value')

function handleValueChange(newValue: string) {
    setValue(newValue)
    console.log(value)
}

return (
    <button onClick={() => handleValueChange('new value')}>Click Me!</button>
)
// new value
```
 - the update function additionally can take a callback to use the previous value.
 - the callback version MUST be used whenever the previous value is contingent for a calculation!
```tsx
import { useState } from 'react';

const [value, setValue] = useState<string>('initial value')

function handleValueChange() {
    setValue(prevValue => `${prev} updated`)
    console.log(value)
}

return (
    <button onClick={handleValueChange}>Click Me!</button>
)
// initial value updated
```
## React Hook - useEffect
 - *useEffect* performs side effect on functional components.
 - React components go through 4 lifecycle phases
    - Mount: component is added to the virtual DOM
    - Update: component is rerender with new state/props
    - Unmount: component is removed from the virtual DOM
    - Error Handling
 - Lifecycle methods are available in class components, but are increasingly unsupported.
```tsx
import { useEffect } from 'react';

useEffect(() => {
    console.log('component rerendered')
}, [])
// onMount: component rerendered
// onUpdate: component rerendered
// onUpdate: component rerendered
```
 - wrapping a fetch request in the useEffect hook prevents and infinite loop where the component rerenders causing the refetch causing a rerender.
```tsx
import { useEffect, useState } from 'react';

const [user, setUser] = useState<User|null>(null)

fetch('/api/users/auth')
    .then(res => res.json())
    .then(data => setUser(data))

return (
    <div>User: {!user ? 'loading...' : `${user.firstName} ${user.lastName}`}</div>
)
// User: loading...
// User: loading...
// User: loading...
```
 - the second parameter to useEffect is am array of values to render the component.
 - an empty array will only runs on component mount.
```tsx
import { useEffect, useState } from 'react';

const [user, setUser] = useState<User|null>(null)

useEffect(() => {
    fetch('/api/users/auth')
        .then(res => res.json())
        .then(data => setUser(data))
}, [])

return (
    <div>User: {!user ? 'loading...' : `${user.firstName} ${user.lastName}`}</div>
)
// User: loading...
// User: Miles Morales
```
 - passing a variable to the array will cause the component to render whenever the value changes.
```tsx
import { useEffect, useState } from 'react';

const [user, setUser] = useState<User|null>(null)
const [refetch, setRefetch] = useState<boolean>(false)

useEffect(() => {
    fetch('/api/users/auth')
        .then(res => res.json())
        .then(data => setUser(data))
}, [refetch])

return (
    <div>User: {!user ? 'loading...' : `${user.firstName} ${user.lastName}`}</div>
    <button onClick={() => setRefetch(!refetch)}>Refetch</button>
)
// User: loading...
// User: Miles Morales
// User: Miles Morales
// User: Miles Morales
```

## React Hook - useRef
```tsx
import { useRef, useState } from 'react';

const [email, setEmail] = useState('')
const emailRef = useRef()

const focus = () => {
    emailRef.current.focus()
}

return (
    <form>
        <input ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} />
        <div>Your email: {email}</div>
        <button onClick={focus}>Focus</button>
    </form>
)
```

## React Hook - useId
 - `useId` returns a unique ID string associated with this particular useId call in this particular component.
```ts
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId()
}
```

## React Hook - useMemo
 - Call `useMemo` at the top level of your component to cache a calculation between re-renders.
 - Basically, if the parameters of our function haven't changed then use the previously returned value rather than calculating the same value again.
```ts
export const doubleValue = (num: number) => {
    for (let i = 0; i < 1_000_000_000; i++) {}
    return num * 2
}
```
```tsx
import { useState } from 'react';

const [number, setNumber] = useState<number>(0)
const value = doubleValue(number)
```
```tsx
import { useCallback, useState } from 'react';

const [number, setNumber] = useState<number>(0)
const value = useMemo(() => {
    return doubleValue(number)
}, [number])
```

### Memoization
 - [Memoization](https://en.wikipedia.org/wiki/Memoization#:~:text=In%20computing%2C%20memoization%20or%20memoisation,the%20same%20inputs%20occur%20again.) is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls to pure functions and returning the cached result when the same inputs occur again.
 - It's derived from the latin word **memorandum** which means "to be remembered."

## React Hook - useCallback
 - `useCallback` is a React Hook that lets you cache a function definition between re-renders.
 - useMemo let's you memoize variables while useCallback let's you memoize function.
```tsx
const cachedFn = useCallback(fn, dependencies)
```


## React Hook - useReducer
 - **Parameters**:
   - *reducer*: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
   - *initialArg*: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
   - *init*(optional): The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
 - **Returns**:
   - The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
   - The dispatch function that lets you update the state to a different value and trigger a re-render.
```ts
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count + 1 }
        default:
            return state
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const increment = () => {
        dispatch({ type: 'increment' })
    }

    const decrement = () => {
        dispatch({ type: 'decrement' })
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
    )
} 
```

## React Hook - Context API
### Prop Drilling
 - Let's assume below that were fetching the data for the stateful value **name** in *Component A*, but we need access to that value in *Component I*.

![Prop Drilling](https://miro.medium.com/v2/resize:fit:982/1*4bxAkSA4oHcSAeAzzcJPHA.png)

### useContext/createContext
 - `useContext` call in a component is not affected by providers returned from the same component. The corresponding **<Context.Provider>** needs to be above the component doing the **useContext()** call.
 - `createContext` lets you create a context that components can provide or read.
```tsx
import { createContext } from 'react';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';

const NameContext = createContext()

const App = () => {
    const [name, setName] = useState<string>('')

    return (
        <NameContext.Provider value={name}>
            <ComponentA />
            <ComponentB />
        </NameContext.Provider>
    )
}

export default App;
```
```ts
import { useContext } from 'react';
import { NameContext } from './App';

const ComponentI = () => {
    const name = useContext(NameContext)
}
```
#### Context API Example
```tsx
import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ShoppingCartContext = createContext({})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("CART",[])

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const removeItemFromCart = (id: number) => {
        setCartItems(prev => {
            return prev.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            openCart,
            closeCart,
            removeItemFromCart
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}

// somewhere else...
import { useShoppingCart } from './useShoppingCart';
import { ShoppingCartProvider } from './ShoppingCartContext';

export const ShopPage = () => {
    const { removeFromCart } = useShoppingCart()

    return (
        <ShoppingCartProvider>
            ...
        </ShoppingCartProvider>
    )
}
```

## React Hook - Custom Hooks
 - Custom hooks is way of creating non-native React hooks.
 - Hooks are just functions, the uniqueness comes with understanding React design patterns.
```ts
import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
```