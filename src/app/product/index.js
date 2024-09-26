import { useCallback, useEffect } from 'react';
import BasketTool from '../../components/basket-tool';
import Head from '../../components/head';
import PageLayout from '../../components/page-layout';
import useSelector from '../../store/use-selector';
import useStore from '../../store/use-store';
import { useLoaderData, useParams } from 'react-router-dom';
import Basket from '../basket';
import { numberFormat } from '../../utils';
import './style.css';

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
    // Добавление в корзину
    addToBasket: useCallback(() => store.actions.basket.addToBasket(id), [store]),
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
        <div className="Product">
          <p>{product.description}</p>
          <p>
            Страна производителя: <span className="bold">{product.madeIn._type}</span>
          </p>
          <p>
            Категория: <span className="bold">{product.category._type}</span>
          </p>
          <p>
            Год выпуска: <span className="bold">{product.edition}</span>
          </p>
          <p className="Product-price">Цена: {numberFormat(product.price)} ₽</p>
          <button onClick={callbacks.addToBasket}>Добавить</button>
        </div>
      </PageLayout>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export { Product };
