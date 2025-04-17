import Loading from '@components/Loading'
import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'

const customRender = (ui: React.ReactElement) => {
  const router = createMemoryRouter([{ path: '/', element: ui }])
  const wrapper = () => (
    <div id='root'>
      <ToastContainer />
      <section id='content'>
        <RouterProvider router={router} />
      </section>
      <Loading />
    </div>
  )

  render(ui, { wrapper })
  return { router }
}

export * from '@testing-library/react'
export { customRender as render }
