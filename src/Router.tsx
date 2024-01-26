import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { TeamPage } from './pages/Team.page'
import { Services } from './pages/Services.page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/team',
        element: <TeamPage />,
    },
    {
        path: '/services',
        element: <Services />,
    },
])

export function Router() {
    return <RouterProvider router={router} />
}
