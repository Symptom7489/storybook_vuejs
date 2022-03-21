import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            books: [
                {
                    id: 'b1',
                    title: 'My First Book',
                    author: 'Ryan Maddox',
                    numberOfPages: 6,
                    coverPage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg'
                },
                {
                    id: 'b2',
                    title: 'My Second Book',
                    author: 'Shep Maddox',
                    numberOfPages: 6,
                    coverPage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg'
                },
                {
                    id: 'b3',
                    title: 'My third book',
                    author: 'JP Maddox',
                    numberOfPages: 6,
                    coverPage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg'
                },
                {
                    id: 'b4',
                    title: 'My fourth book',
                    author: 'Mitzi Maddox',
                    numberOfPages: 6,
                    coverPage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg'
                },
                {
                    id: 'b5',
                    title: 'My fifth book',
                    author: 'Ryan Maddox',
                    numberOfPages: 6,
                    coverPage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg'
                },
                {
                    id: 'b6',
                    title: 'My sixth book',
                    author: 'Holden Soileau',
                    numberOfPages: 6,
                    coverPage: 'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg'
                }
            ]
        }
    },
    mutations,
    actions,
    getters

};