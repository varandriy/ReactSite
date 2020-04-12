import { usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {

    posts: [
        { id: 1, likes: 13, post: "hello, how are u" },
        { id: 2, likes: 23, post: "come here" },
        { id: 3, likes: 44, post: "where are u" }
    ],
    newPostText: 'default value',
    profile: null,


}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                likes: 13,
                post: state.newPostText
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        default:
            return state;


    }

}

export const addPostActionCreator = () => {
    return {

        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
};



export default profileReducer;