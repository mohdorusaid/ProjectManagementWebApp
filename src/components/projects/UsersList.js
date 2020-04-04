import React from 'react';
import { Button } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class UsersList extends React.Component{

    handleClick=(e)=>{
       console.log(e.target.id);
       //console.log(this.props);
       const {users}=this.props;
       
    }

    render(){
        var leftUsers=[];
        const { users,project }=this.props;
        if(project){
        var members=project[0].members;
        }
        if(users && members){
            for(let i=0;i<users.length;i++){
                var flag=0;
                for(let j=0;j<members.length;j++){
                    if(users[i].userId===members[j].userId){
                    flag=1;
                }
               
                }
                if(flag===0){
                    leftUsers.push(users[i]);
                }
            }
        }
        return(
            <div className="center">
                <h1>List Of Users</h1>
                <span>
                    {leftUsers && leftUsers.map(leftUser=>{
                        return (
                            <div key={leftUser.id}>
                                <h1>{leftUser.displayName}</h1>
                                <Button onClick={this.handleClick} id={leftUser.userId}>Add User</Button>
                            </div>
                        )
                    })}
                </span>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        users: state.firestore.ordered.users,
        project: state.firestore.ordered.project
    }
}

export default compose(connect(mapStateToProps),firestoreConnect((ownProps)=>[
    {
        collection: 'projects',
        doc: ownProps.id,
        storeAs: 'project'
    },
    {
        collection: 'users'
    }
]))(UsersList);