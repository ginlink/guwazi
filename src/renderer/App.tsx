import { Header } from './components/Header'
import Home from './pages/Home'
import { Box } from '@mui/material'
import './App.css'

export const App = () => {
  return (
    <Box p={['8px']}>
      <Header />

      <Home />
    </Box>
  )
}
