import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import { loadData } from './loaders/loadData';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: loadData,
          element: <Orders></Orders>
        },
        { 
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
