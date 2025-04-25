export const capitalizeFirstLetter = letter => {
  return letter?.charAt(0).toUpperCase() + letter?.slice(1)
}

export const generatePlaceholderCard = () => {
  return {
    _id: 'column-id-04-placeholder-card',
    boardId: 'board-id-01',
    columnId: 'column-id-04',
    FE_PlaceholderCard: true
  }
}
