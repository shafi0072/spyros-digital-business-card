import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Layout from '@/src/components/core/Layout'
import 'react-toastify/dist/ReactToastify.css';

import ContextApi from '@/src/Sotrage/ContextApi'
export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      router.push('/auth')
    }
  }, [])

  return <ContextApi>
    {router.pathname !== '/auth' ? (<Layout>
      <Component {...pageProps} />
    </Layout>) : (<Component {...pageProps} />)}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
  </ContextApi>
}
