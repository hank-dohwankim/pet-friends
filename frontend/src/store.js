import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { petDetailsReducer, PetListReducer } from "./reducers/petReducers";
import { userLoginReducer } from './reducers/userReducers';
import { loginAction } from "./actions/userActions";
import { registerAction } from "./actions/userActions";
import { profileLoadReducer } from "./reducers/profileReducers";

const reducer = combineReducers({
  petList: PetListReducer,
  petDetails: petDetailsReducer,
  profileLoad: profileLoadReducer,
  userInfo: userLoginReducer,
  userLogin: loginAction,
  userRegister: registerAction,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
