import { useState, useEffect } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Button } from './components/MyButton'
import { Typography } from './theme'

const { myAPI } = window

const StyledBox = styled(Box)`
  border-radius: 8px;
`

export const App = () => {
  const [count, setCount] = useState(0)

  const onCountUp = () => setCount((count) => count + 1)
  const onCountDown = () => setCount((count) => count - 1)

  useEffect(() => {
    myAPI.update(count)
  }, [count])

  return (
    <StyledBox p={'8px'}>
      <Header />
      <h1>{count}</h1>
      <div>
        <button onClick={onCountDown}>&#x25BC;</button>
        <button onClick={onCountUp}>&#x25B2;</button>

        <Box p={'8px'}>
          <Button variant="blueViolet" scale="xs">
            <Typography>文字</Typography>
          </Button>
        </Box>
      </div>
    </StyledBox>
  )
}
