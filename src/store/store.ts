import { AuthActionsType, authReducer } from './auth-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, { ProfileActionsType } from "./profile-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer, { AppActionsType } from './app-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    auth: authReducer,
    app: appReducer
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AllActionsType =
      AppActionsType
    | ProfileActionsType
    | AuthActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))