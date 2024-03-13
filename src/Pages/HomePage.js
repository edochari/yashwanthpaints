import NavBar from "../Components/NavBar";
import MainPage from "./MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsSeperation from "./ProductsSeperation";
import MainPageItems from "../Components/MainPageItems";
function HomePage(){
  const router=createBrowserRouter([
    {path:"/",element:<NavBar />,children:[
      {index:true,element:<MainPage />},
      {path:"/items",element:<ProductsSeperation />}
    ]}
  ])
    return (
        <>
          <RouterProvider router={router} />
         
          
        
        </>
    );
}

export default HomePage;