import ProductsPage from "./Pages/ProductsPage";
import SingleProductPage from "./Pages/singleProductPage";
import Root from "./Pages/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductLoader } from "./Loaders/ProductLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        element: <SingleProductPage />,
        path: "products/:id",
        loader: ProductLoader,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
