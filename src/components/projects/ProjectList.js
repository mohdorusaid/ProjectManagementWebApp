import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import {Image } from 'react-bootstrap';

class ProjectList extends React.Component{
    
    render(){
        const {projects,auth}=this.props;
        console.log("projects",projects);
        console.log("user",auth);
        return(
            <div className="center">
                {(auth.uid)?
                (
                    <div className="center">
                     <Image src={auth.photoURL} roundedCircle/> 
                     <h1>Welcome {auth.displayName}</h1>
                     <Link to="/createProject">
                     <h3>Create A New Project</h3>
                     </Link>
                     <h1>Projects You Are a Part Of</h1>
                     <div>Seems like you aren't part of any project</div>
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
                <a href="/">Sign In Here.</a>
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