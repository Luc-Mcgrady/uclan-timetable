import NavBar from 'components/Navbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'

const client = new QueryClient

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <QueryClientProvider client={client}>
    
    <Head>
      <title>UCLAN Timetable (unofficial)</title>
    </Head>
    
    <NavBar/>

    <div className='content'>
      <Component {...pageProps} />
    </div>
  </QueryClientProvider>
  )
}

export default MyApp
