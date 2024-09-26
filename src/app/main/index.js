import { memo, useCallback, useEffect, useState } from 'react';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import Basket from '../basket';
import { Pagination } from '../../components/pagination';
import { useLoaderData, useSearchParams } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

function Main() {
  const store = useStore();

  const activeModal = useSelector(state => state.modals.name);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();

  const data = useLoaderData();

  useEffect(() => {
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    setPage(page);
    setTotalPages(Math.ceil(data / ITEMS_PER_PAGE));
  }, []);

  useEffect(() => {
    store.actions.catalog.load({ page });
  }, [page]);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    onPageChange: useCallback(_page => setPage(_page), []),
  };

  const renders = {
    item: useCallback(
      item => {
        return <Item item={item} onAdd={callbacks.addToBasket} />;
      },
      [callbacks.addToBasket],
    ),
  };

  return (
    <>
      <PageLayout>
        <Head title="Магазин" />
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
        <List list={select.list} renderItem={renders.item} />
        <Pagination page={page} onPageChange={callbacks.onPageChange} pages={totalPages} />
      </PageLayout>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default memo(Main);
