import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { petDetailsReducer, PetListReducer } from './reducers/petReducers';
import { loginAction } from './actions/userActions';

const reducer = combineReducers({
  petList: PetListReducer,
  petDetails: petDetailsReducer,
  userLogin: loginAction,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
