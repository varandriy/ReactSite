import React from "react";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = props => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState().dialogsPage;

//           let onSendMessageClick = () => {
//             store.dispatch(sendMessageCreator());
//           }

//           let onNewMessageChange = (body) => {
//             store.dispatch(updateNewMessageBodyCreator(body))
//           }
//           return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
//         }
//       }
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;
