import {createBrowserRouter as Router} from 'react-router-dom'
import Timeline from './pages/Timeline'
import { Status } from './pages/Status'
import { Default } from './layouts/Default'


export const router = Router([
    {
        path:"/",
        element:<Default/>,
        children: [
            {
                path:'/',
                element:<Timeline/>
            },
            {
                path:'/status',
                element:<Status/>
            },

        ]
    }
])

