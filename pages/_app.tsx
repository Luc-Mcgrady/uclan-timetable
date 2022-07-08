import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from 'components/Navbar';

const client = new QueryClient;

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={client}>
    <NavBar/>

    <div className='content'>
      <Component {...pageProps} />
    </div>
  </QueryClientProvider>
  )
}

export default MyApp
