import { useState, useEffect } from 'react'
import { Box } from 'rebass'
import './App.css'
import { Button } from './components/MyButton'
import { Typography } from './theme'

const { myAPI } = window

export const App = () => {
  const [count, setCount] = useState(0)

  const onCountUp = () => setCount((count) => count + 1)
  const onCountDown = () => setCount((count) => count - 1)

  useEffect(() => {
    myAPI.update(count)
  }, [count])

  return (
    <div className="container">
      <h1>{count}</h1>
      <div>
        <button onClick={onCountDown}>&#x25BC;</button>
        <button onClick={onCountUp}>&#x25B2;</button>

        <Box p={'8px'}>
          <Button variant="blueViolet" scale="sm">
            <Typography>文字</Typography>
          </Button>
        </Box>
      </div>
    </div>
  )
}
