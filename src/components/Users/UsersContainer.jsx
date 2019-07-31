// import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from 'react-redux';
import {unfollow,follow,setUsers, setPage,setTotalUserCount,toggleFetching} from '../../redux/reducer-users';
import React from 'react';
import Users from './Users';
import * as axios from 'axios';


class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
            this.props.toggleFetching(false);
            
        });
    }

    onSetPage = (currentPage)=>{
        this.props.setPage(currentPage);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${currentPage}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleFetching(false);
        });
    }

    render() {
        return (<Users isFetching={this.props.isFetching} onSetPage={this.onSetPage} currentPage={this.props.currentPage} totalCount={this.props.totalCount} pageSize={this.props.pageSize} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} />);
    }
    
}


let mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

let mapDispatchToProps = (dispatch)=> {
    // return {
    //     follow:(userId)=> {
    //         dispatch(followAC(userId));
    //     },
    //     unfollow:(userId)=> {
    //         dispatch(unfollowAC(userId));
    //     },
    //     setUsers:(users)=> {
    //         dispatch(setUsersAC(users));
    //     },
    //     setPage:(page)=>{
    //         dispatch(setPageAC(page));
    //     },
    //     setTotalUserCount:(totalCount)=>{
    //         dispatch(setTotalUserCountAC(totalCount));
    //     }
    // }
}
export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setPage,
        setTotalUserCount,
        toggleFetching
})(UsersContainer);