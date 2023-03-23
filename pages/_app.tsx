import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='lg:block hidden'>
        <Topbar />
      </div>
      <Navbar />
      <Component {...pageProps} />
      <FloatingButtons />
      <Footer />
    </>
  )
}
