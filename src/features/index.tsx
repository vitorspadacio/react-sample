import Footer from '@components/Footer'
import Loading from '@components/Loading'
import Menu from '@components/Menu'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { router } from './routes'

export default function () {
  return (
    <>
      <Menu />
      <ToastContainer />
      <section id='content'>
        <RouterProvider router={router} />
      </section>
      <Footer />
      <Loading />
    </>
  )
}
