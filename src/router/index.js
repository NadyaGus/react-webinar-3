import Main from '../app/main';
import { Product } from '../app/product';
import { pageLoader } from '../app/product/loader';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/:id',
        loader: ({ request }) => pageLoader({ request }),
        element: <Product />,
      },
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
]);

export { router };
