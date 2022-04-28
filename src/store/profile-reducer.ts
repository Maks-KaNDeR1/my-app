

export type ProfileType = {
    
}

export type initialStateType = {
    profile: ProfileType | null
}



let initialState: initialStateType = {
    profile: null
};



export const profileReducer = (state = initialState, action: ProfileActionsType): initialStateType => {
    switch (action.type) {
        case 'PROFILE/SET_USER_PROFILE': {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
};



type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) =>
    ({ type: 'PROFILE/SET_USER_PROFILE', profile } as const)


export type ProfileActionsType = SetUserProfileType


export default profileReducer
