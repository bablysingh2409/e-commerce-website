
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element:<Nav/>
  }
])

  return (
    <RouterProvider router={router}>
    {/* <div className="App">
     <h1>e-dashboard</h1>
    </div> */}
    </RouterProvider>
  );
}

export default App;
