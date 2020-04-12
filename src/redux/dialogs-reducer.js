const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {

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
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: 6, message: body }]
            }

        default:
            return state;
    }
}


export const sendMessageCreator = () => {
    return {

        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {

        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;