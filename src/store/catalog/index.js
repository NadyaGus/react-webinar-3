import { codeGenerator } from '../../utils';
import StoreModule from '../module';

const ITEMS_PER_PAGE = 10;

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
    };
  }

  async load({ page = 1 } = {}) {
    const skip = (page - 1) * ITEMS_PER_PAGE;
    const response = await fetch(`/api/v1/articles/?limit=10&skip=${skip}`);
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
      },
      'Загружены товары из АПИ',
    );
  }
}

export default Catalog;