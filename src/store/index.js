import { createStore } from 'vuex';
import booksModule from './modules/books/index.js';
import pagesModule from './modules/pages/index.js';


const store = createStore({
    modules: {
        books: booksModule,
        pages: pagesModule,
    }

});

export default store;