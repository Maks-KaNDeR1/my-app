



let initialState = {
    isAuth: false
};

export type authReducerType = {
    isAuth: boolean
}

export const authReducer = (state: authReducerType = initialState, action: AuthActionsType): authReducerType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA': {
            return {
                ...state, isAuth: true
            }
        }
        default:
            return state;
    }
};





type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = ( isAuth: boolean ) =>
    ({ type: 'AUTH/SET_USER_DATA',  isAuth  } as const)




export type AuthActionsType = setAuthUserDataType


export default authReducer
