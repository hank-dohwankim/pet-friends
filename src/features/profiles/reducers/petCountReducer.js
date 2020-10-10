const petCountReducer = (petCount = 0, action) => {
  switch (action.type) {
    case "FOLLOW":
      return petCount + 1
    case "UNFOLLOW":
      return petCount - 1
    default:
      return petCount
  }
}

export default petCountReducer;