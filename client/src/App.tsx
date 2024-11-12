import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/ui/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const router= createBrowserRouter([{
  path : "/",
  element : <Layout/> ,
  children : [
    { index : true, element : <Home/>},
    { path : "login", element : <Login/>}
  ]
}])

export default function App() {
  return <RouterProvider router={router}/>
}