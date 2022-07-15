import NavBar from 'components/Navbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
    
    <Head>
      <title>UCLAN Timetable (unofficial)</title>
      <meta name='description' content={"Does UClan's timetable look ok, feel bad, and taste like awful? Well fret no more."}/>
    </Head>
    
    <NavBar/>

    <div className='content'>
      <Component {...pageProps} />
    </div>
  </>
  )
}

export default MyApp
