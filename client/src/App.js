import './App.css';
import Title from './components/Title';
import { Home } from './screens/Home';
import { Register } from './screens/Register';
import UserLists from './screens/UserLists';
import {  createBrowserRouter,  RouterProvider, Link } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import store from './store/Store';
import Testing from './screens/Testing';

import NoteState from './context/NoteState';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Register />,
  },
  {
    path: "/users",
    element: <UserLists />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
 
 
]);

function App() {
  return (
    <div>
      {/* For using context api or whatever exporting need first letter is Capital */}
      <NoteState>
       <Provider store={store}>

       <RouterProvider router={router} />

       </Provider>
       </NoteState>
       
      {/* <Home />  */}
      
      {/* <Register /> */}
      
      {/* <UserLists /> */}
    </div>
  );
}

export default App;
