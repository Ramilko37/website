import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { TeamPage } from './pages/Team.page'
import { ServicesPage } from './pages/Services.page'
import { NewsPage } from './pages/News.page'
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/services',
        element: <ServicesPage />,
    },
    {
        path: '/team',
        element: <TeamPage />,
    },
    {
        path: '/news',
        element: <NewsPage />,
    },
])

export function Router() {
    return <RouterProvider router={router} />
}
