import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '@/libs/theme'

const App = ({ Component, pageProps }: AppProps) =>
  <>
    <Head>
      <title>CHAT-APP</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>

export default App
