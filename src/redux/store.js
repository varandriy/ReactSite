import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, likes: 13, post: "hello, how are u" },
                { id: 2, likes: 23, post: "come here" },
                { id: 3, likes: 44, post: "where are u" }
            ],
            newPostText: 'default value'


        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Andrey" },
                { id: 2, name: "Misha" },
                { id: 3, name: "Leonid" },
                { id: 4, name: "Ira" },
                { id: 5, name: "Bob" }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Where you are" },
                { id: 4, message: "Hahahha" },
                { id: 5, message: "No way!" }
            ],
            newMessageBody: ""
        }

    },
    _callSubscriber() {
        console.log("State id changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель обсервер патерн
    },

    dispatch(action) { //{обєкт з дією type 'ADD-POST' UPDATE TEXT}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);


        this._callSubscriber(this._state);

    }

}





export default store;
window.store = store;
