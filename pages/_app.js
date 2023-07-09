import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Layout from '@/src/components/app/core/Layout'
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      router.push('/auth')
    }
  }, [])

  return <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
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
  </>
}
