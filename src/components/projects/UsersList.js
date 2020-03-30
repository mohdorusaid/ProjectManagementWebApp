import React from 'react';
import { Button } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class UsersList extends React.Component{
    render(){
        const {users}=this.props;
        return(
            <div className="center">
                <h1>List Of Users</h1>
                <span>
                    {console.log(this.props)}
                    {users && users.map(user=>{
                        return(
                            <div key={user.id}>
                            <h1>{user.userId}</h1>
                            <Button>Add</Button>
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
        users: state.firestore.ordered.appUsers
    }
}

export default compose(connect(mapStateToProps),firestoreConnect([
    {
        collection: 'appUsers'
    }
]))(UsersList);