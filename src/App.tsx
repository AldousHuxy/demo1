import { Counter as StateCounter } from './pages/State';
import { Counter as ReducerCounter } from './pages/Reducer';
import { Counter as ContextCounter } from './pages/Context';
import { Counter as RefCounter } from './pages/Reference';
import { Counter as ParamsCounter } from './pages/Params';
import { Counter as ZustandCounter } from './pages/Zustand';
import { Counter as ReduxCounter } from './pages/Redux';
import { Counter as LocalCounter } from './pages/Local';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const App = () => {
  const initialCount: number = 0

  return (
    <>
      <Header initialCount={initialCount} />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Lesson 1 - useState */}
        <Route path="/usestate" element={<StateCounter initialCount={initialCount} />} />

        {/* Lesson 2 - useReducer */}
        <Route path="/usereducer" element={<ReducerCounter initialCount={initialCount} />} />

        {/* Lesson 3 - Context API */}
        <Route path="/contextapi" element={<ContextCounter />} />

        {/* Lesson 4 - Context API */}
        <Route path="/useref" element={<RefCounter />} />

        {/* Lesson 5 - Local Storage */}
        <Route path="/localstorage" element={<LocalCounter initialCount={initialCount} />} />

        {/* Lesson 6 - useParams */}
        <Route path="/useparams/:count" element={<ParamsCounter initialCount={initialCount} />} />

        {/* Lesson 7 - Zustand */}
        <Route path="/zustand" element={<ZustandCounter initialCount={initialCount} />} />

        {/* Lesson 8 - Redux Toolkit */}
        <Route path="/redux" element={<ReduxCounter initialCount={initialCount} />} />
      </Routes>
    </>
  )
}

export default App;