import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import AuthPage from "./pages/AuthPage"
import DetailPage from "./pages/DetailPage"
import CheckoutPage from "./pages/CheckoutPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'auth/:mode',
        element: <AuthPage />
      },
      {
        path: ':id',
        element: <DetailPage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
