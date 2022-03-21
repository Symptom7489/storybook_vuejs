import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    state() {
        return {
            pages: [
                {
                    pageNumber: 1,
                    pageImage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg',
                    bookId: 'b1',
                    bookTitle: 'My First Book',
                    author: 'Ryan Maddox',
                },
                {
                    pageNumber: 2,
                    pageImage: 'https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg',
                    bookId: 'b1',
                    bookTitle: 'My First Book',
                    author: '',
                },
                {
                    pageNumber: 3,
                    pageImage: 'https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg',
                    bookId: 'b1',
                    bookTitle: 'My First Book',
                    author: 'Ryan Maddox',
                },
                {
                    pageNumber: 1,
                    pageImage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg',
                    bookId: 'b2',
                    bookTitle: 'My Second Book',
                    author: 'Shep Maddox',
                },
                {
                    pageNumber: 2,
                    pageImage: 'https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg',
                    bookId: 'b2',
                    bookTitle: 'My Second Book',
                    author: 'Shep Maddox',
                },
                {
                    pageNumber: 3,
                    pageImage: 'https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg',
                    bookId: 'b2',
                    bookTitle: 'My Second Book',
                    author: 'Shep Maddox',
                },
            ]
        };
    },
    mutations,
    actions,
    getters

};