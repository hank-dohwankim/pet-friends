const followerCountReducer = (followerCount = 0, action) => {
  switch (action.type) {
    case "FOLLOW":
      return followerCount + 1
    case "UNFOLLOW":
      return followerCount - 1
    default:
      return followerCount
  }
}

export default followerCountReducer;