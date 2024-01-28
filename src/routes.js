import { Main } from './pages/Main';
import { Listing } from './pages/Listing';
import { Addtask } from './pages/Addtask';
import { Edittask } from './pages/Edittask';
const appRoutes = [
  //for better readability and maanging routes
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/add',
    component: <Addtask />,
  },
  {
    path: '/list',
    component: <Listing />,
  },
  {
    path: '/edit/:id',
    component: <Edittask />,
  },
];
export default appRoutes;
