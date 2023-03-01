import { createTheme, NextUIProvider } from '@nextui-org/react'

const App = () => {

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {},
    }
  })
  
  return (
    <NextUIProvider theme={darkTheme}>
    </NextUIProvider>
  )
}

export default App
