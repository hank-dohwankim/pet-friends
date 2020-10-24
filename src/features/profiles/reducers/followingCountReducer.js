const followingCountReducer = (followingCount = 0, action) => {
  switch (action.type) {
    case "FOLLOW":
      return followingCount + 1
    case "UNFOLLOW":
      return followingCount - 1
    default:
      return followingCount
  }
}

export default followingCountReducer;