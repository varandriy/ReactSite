import React from "react";
import axios from 'axios'
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from "./Profile";
import { withRouter, Redirect } from "react-router-dom";



class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId //з app.js
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)

  }

  render() {
    if (!this.props.isAuth) return <Redirect to='/login'/>
    return (
      <div>
        {/* получити всі пропси і прокинути далі */}
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, //берем з редукссторе і передаєєм в презентаційну через пропси
  isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer); //для считування адресноі строки і передавання в стейт

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);
