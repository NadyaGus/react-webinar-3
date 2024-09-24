import React, { useCallback } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Cart from './components/cart';
import ModalLayout from './components/modal-layout';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cart = store.getState().cart;
  const totalPrice = store.getTotalPrice();

  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const callbacks = {
    onDeleteItemFromCart: useCallback(
      code => {
        store.deleteItemFromCart(code);
        store.setTotalPrice();
      },
      [store],
    ),

    onAddItemToCart: useCallback(
      item => {
        store.addItemToCart(item);
        store.setTotalPrice();
      },
      [store],
    ),

    toggleModal: useCallback(() => setIsOpenModal(!isOpenModal), [isOpenModal]),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls cart={cart} toggleModal={callbacks.toggleModal} totalPrice={totalPrice} />
      <List list={list} itemFunction={callbacks.onAddItemToCart} />

      <ModalLayout isOpen={isOpenModal}>
        <Cart
          cart={cart}
          onDeleteItemFromCart={callbacks.onDeleteItemFromCart}
          toggleModal={callbacks.toggleModal}
          totalPrice={totalPrice}
        />
      </ModalLayout>
    </PageLayout>
  );
}

export default App;
