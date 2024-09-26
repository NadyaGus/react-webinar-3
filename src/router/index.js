import Main from '../app/main';
import { Product } from '../app/product';
import { pageLoader as productPageLoader } from '../app/product/loader';
import { pageLoader as mainPageLoader } from '../app/main/loader';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/:id',
        loader: ({ request }) => productPageLoader({ request }),
        element: <Product />,
      },
      {
        path: '/',
        loader: mainPageLoader,
        element: <Main />,
      },
    ],
  },
]);

export { router };
