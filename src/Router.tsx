import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { TeamPage } from './pages/Team.page'


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/team',
        element: <TeamPage />,
    },
   
])

export function Router() {
    return <RouterProvider router={router} />
}
