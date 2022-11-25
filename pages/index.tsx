import type { NextPage } from 'next'
import Button from 'components/button'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Layout from 'components/layout'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Button bgcolor="#ff4900" onClick={() => console.log('ck')}>
          Hola
        </Button>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
