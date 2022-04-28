


let initialState = {
    initialized: false
};


type AppReducerType = typeof initialState

export const appReducer = (state: AppReducerType = initialState, action: AppActionsType): AppReducerType => {
    switch (action.type) {
        case 'APP/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};



type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => ({ type: 'APP/INITIALIZED_SUCCESS' } as const)



export type AppActionsType = initializedSuccessType

export default appReducer
