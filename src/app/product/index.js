import { useCallback, useEffect } from 'react';
import BasketTool from '../../components/basket-tool';
import Head from '../../components/head';
import PageLayout from '../../components/page-layout';
import useSelector from '../../store/use-selector';
import useStore from '../../store/use-store';
import { useLoaderData, useParams } from 'react-router-dom';
import Basket from '../basket';

function Product() {
  const store = useStore();
  const product = useLoaderData();
  const activeModal = useSelector(state => state.modals.name);
  const params = useParams();
  const id = params.id;

  // TODO remove console.log
  console.log('product', product);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  useEffect(() => {
    callbacks.closeModalBasket();
  }, [id]);

  const callbacks = {
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    // Закрытие модалки корзины
    closeModalBasket: useCallback(() => store.actions.modals.close(), [store]),
  };

  return (
    <>
      <PageLayout>
        <Head title={product.title} />
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
        <p>{product.description}</p>
        <p>Цена: {product.price}</p>
      </PageLayout>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export { Product };
