import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";



const Body = () => {
  
const appRouter = createBrowserRouter([
   {
      path:'/',
      element:<Login />
   },
   {
      path:'/browse',
      element:<Browse />
   }
])

//below logic we want to repeat for one time so kept in useeffect whenever state change like signin signup signout

 

   return (
      <div>
      <RouterProvider router={appRouter} />

      
   </div>
   )
 
};

export default Body;
