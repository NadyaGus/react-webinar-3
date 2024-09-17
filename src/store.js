import { generateCode } from './utils';

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: generateCode(), title: 'Новая запись' }],
    });
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      list: this.state.list.filter(item => item.code !== code),
    });
  }

  addItemToCart({ code, price, title }) {
    if (this.state.cart.find(item => item.code === code)) {
      // Если в корзине уже есть такая запись
      this.setState({
        ...this.state,
        cart: this.state.cart.map(item => {
          if (item.code === code) item.quantity += 1;
          return item;
        }),
      });
    } else {
      this.setState({
        ...this.state,
        cart: [...this.state.cart, { code, quantity: 1, price, title }],
      }); // Добавляем новую запись
    }
  }

  getTotalPrice() {
    return this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  }
}

export default Store;
