import React  from 'react';
import classes from './Profile.module.css';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/reducer-profile';
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId).then(response => {
           
            this.props.setUserProfile(response.data);
            });
    }
    

    render(){
        return (
            <Profile {...this.props}/>
        )
    }
}


let mapStateToProps = (state)=> {
    
    return {
        profile: state.profilePage.profile
    }

}
export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));