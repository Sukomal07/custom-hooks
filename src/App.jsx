import useTodos from './hooks/useTodos'
import useIsOnline from './hooks/useIsOnline'
import Track from './Track'
import useMousemove from './hooks/useMousemove'
import { useState } from 'react'
import useInterval from './hooks/useInterval'


function App() {
  const { todos, loading } = useTodos(5)
  const isOnline = useIsOnline()
  const position = useMousemove()
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)

  return (
    <div>
      {loading ? 'loading ..' : todos.map((todo, index) => (
        <Track key={index} todo={todo} />
      ))}
      {isOnline ? "You are online" : "you are offline"}
      <p>x position is{position.x}</p>
      <p>y position is {position.y}</p>
      <p>{count}</p>
    </div>
  )
}


export default App