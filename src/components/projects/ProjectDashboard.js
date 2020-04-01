import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Tabs,Tab } from 'react-bootstrap';
import MessageBoard from './MessageBoard';
import UsersList from './UsersList';
import AssignTask from './AssignTask';

class ProjectDashboard extends React.Component{
    render(){
        //destructure props

        const {projects,auth,users,messages}=this.props;
        console.log(this.props);

        //Get Current Project
        const currentProject=projects && projects.filter(project=>
           (project.id===this.props.match.params.id)
        )
        
        return(  
            <Container fluid>
            {(auth && auth.uid)?(
                (currentProject && currentProject[0].createdBy===auth.uid)?
                (
                    <div style={{alignContent:"center",textAlign:"center"}}>
                    {}
                    <h1>Authorized To Access The Project.</h1>
                    <h2>Project Dashboard</h2>
                    <Tabs defaultActiveKey="you" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                      <h1>Important Details</h1>
                      <h2>{currentProject[0].title}</h2>
                    </Tab>
                    <Tab eventKey="announcements" title="Announcements">
                        {(messages)?
                        (<MessageBoard messages={messages}/>)
                        :
                        (null)}
                        
                    </Tab>
                    <Tab eventKey="assignTask" title="Assign Tasks">
                        <h1>Assign Task Here</h1>
                        <AssignTask users={users}/>

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
                <h1>Not Authenticated Yet!</h1>
            )}          
            </Container>
            
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        users: state.firestore.ordered.appUsers,
        messages: state.firestore.ordered.myMessages
    }
}

const mapDisptachToProps=(dispatch)=>{
    return{
        
    }
}

export default compose(connect(mapStateToProps),firestoreConnect([
    {
    collection: 'projects'
},{
    collection: 'appUsers'
},{
    collection: 'projects',
    doc:'3iilgkxiLHc0L9FMQKpz',
    storeAs: 'myMessages',
    subcollections:[
        {collection: 'messages',
        }
    ]
}
]))(ProjectDashboard);