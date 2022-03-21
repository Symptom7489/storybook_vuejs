export default {
    loadBooks(context, payload) {
        const bookData = {
            id: payload.id,
            title: payload.title,
            author: payload.author,
            numberOfPages: payload.numberOfPages,
            coverPage: payload.coverPage
        };
        context.commit('setBooks', bookData)
    }
};
