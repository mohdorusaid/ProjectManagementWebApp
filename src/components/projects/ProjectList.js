import React from 'react';
import firebase from 'firebase';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

class ProjectList extends React.Component{
    // state={
    //     isSignedIn: false,
    //     user: null
    // }
    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //             this.setState({
    //                 isSignedIn: !!user,
    //                 user: user
    //             })
    //         }
    //     })
    // }
    render(){
        const {projects,auth}=this.props;
        console.log("projects",projects);
        console.log("user",auth);
        return(
            <div className="center">
                {(auth.uid)?
                (
                    <div className="center">
                     <h1>Welcome {auth.displayName}</h1>
                     <Link to="/createProject">
                     <h3>Create A New Project</h3>
                     </Link>
                     <h1>List Of Projects You Started</h1>
                     {projects && projects.map(project=>{
                        return (project.createdBy===auth.uid)
                        ?
                        (
                        <Link to={'/projects/'+project.id} key={project.id}>
                        <h1 >{project.title}</h1>
                        </Link>
                        )
                        :
                        (null)
                     })}
                     </div>
                ):
                (
                <div>
                <h1>Not Signed In!</h1>
                Sign In Here.
                </div>
                )}
                
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}
export default compose(connect(mapStateToProps),firestoreConnect([{
    collection: 'projects'
}]))(ProjectList);