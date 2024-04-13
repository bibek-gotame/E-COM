
import { Provider } from "react-redux";
import Body from "./components/Body";
import { store } from "./utils/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element: <Body />,
    children:[
      {
        path:'/productList',
        element:<ProductListing/>
      },
      {
        path:'/productDetail',
        element:<ProductDetails/>
      },
      
    ]

  }
])
  return (
    <>
    <Provider store={store} >
<RouterProvider router={router}/>
    </Provider>
    </>
  );
}

export default App;
