import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from 'components/Navbar';
import Head from 'next/head';

const client = new QueryClient;

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={client}>
    
    <Head>
      <title>UCLAN Timetable {"(unofficial)"}</title>
    </Head>
    
    <NavBar/>

    <div className='content'>
      <Component {...pageProps} />
    </div>
  </QueryClientProvider>
  )
}

export default MyApp
