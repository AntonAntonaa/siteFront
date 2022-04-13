

export interface Books {
  name: string
}

export const setBooks = (books: Books) => ({
  type: 'SET_BOOKS',
  payload: books
});