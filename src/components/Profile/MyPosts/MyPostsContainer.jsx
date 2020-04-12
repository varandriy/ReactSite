import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer"
import MyPosts from './MyPosts'
import { connect } from "react-redux";


// const MyPostsContainer = (props) => {


//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState();
//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }

//           let onPostChange = (text) => {

//             let action = updateNewPostActionCreator(text)
//             store.dispatch(action);
//           }

//           return (<MyPosts addPost={addPost}
//             updateNewPostText={onPostChange}
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText} />)

//         }
//       }
//     </StoreContext.Consumer>
//   )
// };

const mapStateToProps = (state) => {
  return {
    // ...state,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text)
      dispatch(action)
    }

  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
