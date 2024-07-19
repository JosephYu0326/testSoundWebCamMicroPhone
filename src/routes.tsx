import { RouteObject } from 'react-router-dom'
import Main from './pages/Main'
import WebCamera from './pages/WebCamera'
import Sound from './pages/Sound'
import MicroPhone from './pages/MicroPhone'

const routes: RouteObject[] = [
  {
    path: '',
    element: <Main />,
  },
  {
    path: 'webCam',
    element: <WebCamera />,
  },
  {
    path: 'sound',
    element: <Sound />,
  },
  {
    path: 'microPhone',
    element: <MicroPhone />,
  },
]
export default routes
