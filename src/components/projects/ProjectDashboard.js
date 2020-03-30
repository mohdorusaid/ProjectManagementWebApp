import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Tabs,Tab } from 'react-bootstrap';
import MessageBoard from './MessageBoard';
import UsersList from './UsersList';

class ProjectDashboard extends React.Component{
    render(){
        const {projects,auth}=this.props;
    
        //console.log(auth)
        const currentProject=projects && projects.filter(project=>
           (project.id===this.props.match.params.id)
        );
        console.log(currentProject);
        return(  
            <Container fluid>
            {(auth && auth.uid)?(
                (currentProject && currentProject[0].createdBy===auth.uid)?
                (
                    <div style={{alignContent:"center",textAlign:"center"}}>
                    
                    <h1>Authorized To Access The Project.</h1>
                    <h2>Project Dashboard</h2>
                    <h2>{currentProject[0].title}</h2>
                    <Tabs defaultActiveKey="you" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                      <h1>Important Details</h1>
                      
                    </Tab>
                    <Tab eventKey="announcements" title="Announcements">
                        <MessageBoard/>
                    </Tab>
                    <Tab eventKey="assignTask" title="Assign Tasks">
                        Assign Task Here
                    </Tab>
                    <Tab eventKey="addUsers" title="Add User">
                       <UsersList/>
                    </Tab>
                    </Tabs>
                    </div>
                )
                :
                (
                    <h3>Not Authorized To Access.</h3>
                )
            ):(
                <h1>Not Authentictaed Yet!</h1>
            )}          
            </Container>
            
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
}]))(ProjectDashboard);