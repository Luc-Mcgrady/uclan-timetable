import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental"
import { persistQueryClient } from "react-query/persistQueryClient-experimental"
import NavBar from 'components/Navbar';
import Head from 'next/head';
import { useEffect } from 'react'

const client = new QueryClient

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    const persistor = createWebStoragePersistor({
      storage: window.localStorage,
    })
    
    persistQueryClient({
      queryClient: client,
      persistor: persistor,
      maxAge: 1000 * 60 * 60 * 24 // 1 Day
    })
  }, [])

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
