import followerCountReducer from './followerCountReducer'
import followingCountReducer from './followingCountReducer'
import petCountReducer from './petCountReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  numFollower: followerCountReducer,
  numFollowing: followingCountReducer,
  numPet: petCountReducer
})

export default allReducers