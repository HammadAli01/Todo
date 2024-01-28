import './App.scss';
import { Customnavbar } from './components/Customnavbar';
import { Route, Routes } from 'react-router-dom';
import appRoutes from './routes';
import { Notfound } from './pages/Notfound';
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Customnavbar />}>
          {appRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
