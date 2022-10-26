import { RouterProvider } from 'react-router-dom'
import './App.css';
import Dark from './Darkmode/Dark';
import { routes } from './Routes/Route';

function App() {
  return (
    <div className="">

      <RouterProvider router={routes}></RouterProvider>
      <Dark></Dark>
    </div>
  );
}

export default App;
