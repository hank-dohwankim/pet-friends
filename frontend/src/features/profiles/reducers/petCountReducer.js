const petCountReducer = (petCount = 0, action) => {
  switch (action.type) {
    case "ADD":
      return petCount + 1
    case "REMOVE":
      return petCount - 1
    default:
      return petCount
  }
}

export default petCountReducer;