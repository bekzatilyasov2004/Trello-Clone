import { create } from 'zustand'

const loadListsFromLocalStorage = () => {
  const storedLists = localStorage.getItem('trello-lists')
  return storedLists ? JSON.parse(storedLists) : []
}

const saveListsToLocalStorage = (lists) => {
  localStorage.setItem('trello-lists', JSON.stringify(lists))
}

const useTrelloStore = create((set) => ({
  lists: loadListsFromLocalStorage(), 

  addList: (title) => {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes().toString().padStart(2, '0')

    set((state) => {
      const newList = { id: Date.now(), title, cards: [], time: hours, minut: minutes }
      const updatedLists = [...state.lists, newList]
      saveListsToLocalStorage(updatedLists) 
      return { lists: updatedLists }
    })
  },

  addCard: (listId, content) => set((state) => {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes().toString().padStart(2, '0')

    const updatedLists = state.lists.map(list =>
      list.id === listId
        ? { ...list, cards: [...list.cards, { id: Date.now(), content, time: hours, minut: minutes }] }
        : list
    )
    saveListsToLocalStorage(updatedLists) 
    return { lists: updatedLists }
  }),

  deleteList: (listId) => set((state) => {
    const updatedLists = state.lists.filter(list => list.id !== listId)
    saveListsToLocalStorage(updatedLists) 
    return { lists: updatedLists }
  }),

  deleteCard: (listId, cardId) => set((state) => {
    const updatedLists = state.lists.map(list =>
      list.id === listId
        ? { ...list, cards: list.cards.filter(card => card.id !== cardId) }
        : list
    )
    saveListsToLocalStorage(updatedLists) 
    return { lists: updatedLists }
  }),

  updateCard: (listId, cardId, newContent) => set((state) => {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes().toString().padStart(2, '0')

    const updatedLists = state.lists.map(list =>
      list.id === listId
        ? {
            ...list,
            cards: list.cards.map(card =>
              card.id === cardId
                ? { ...card, content: newContent, time: hours, minut: minutes }
                : card
            )
          }
        : list
    )
    saveListsToLocalStorage(updatedLists) 
    return { lists: updatedLists }
  }),
}))

export default useTrelloStore
