import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Main from 'components/main'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO />

        <Main />
      </Layout>
    </ThemeProvider>
  )
}

export default Home
