import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Tabs,Tab } from 'react-bootstrap';
import MessageBoard from './MessageBoard';
import AssignTask from './AssignTask';
import { getCurrentProject } from '../../store/actions/projectActions';
import AssignedTasks from './AssignedTasks';
import ProgressReport from './ProgressReport';

class ProjectDashboard extends React.Component{
    
    componentDidMount(){
        const currID=(this.props.match.params.id);
        this.props.getCurrentPoject(currID);
    }

    render(){
        //destructure props
        const {projects,auth}=this.props;
        const currentProject=projects;
        if(currentProject){
        console.log(currentProject[0])
    }
        return(  
            <Container fluid>
            {(auth && auth.uid)?(
                (currentProject && currentProject[0].createdBy===auth.uid)?
                (
                    <div style={{alignContent:"center",textAlign:"center"}}>
                    <h2>Project Dashboard</h2>
                    <Tabs defaultActiveKey="home" id="home">
                    <Tab eventKey="home" title="Home">
                      <h1>Important Details</h1>
                      <h2>{currentProject[0].title}</h2>
                      <h3>Members</h3>
                      {currentProject[0].members.map(member=>{
                         return <Card style={{height:"30%"}} key={member.id}>
                              <Card.Img variant="top" src={member.photoURL}/>
                              <Card.Body>
                                <Card.Title>{member.displayName}</Card.Title>
                                <Card.Text>{member.userId}</Card.Text>
                              </Card.Body>
                                </Card>
                      })}
                    </Tab>
                    <Tab eventKey="announcements" title="Announcements">
                        <MessageBoard id={currentProject[0].id}/>       
                    </Tab>
                    <Tab eventKey="assignTask" title="Assign Tasks">
                        <h1>Assign Task Here</h1>
                        <AssignTask id={currentProject[0].id}/>

                    </Tab>
                    <Tab eventKey="addUsers" title="Progress Report">
                       <ProgressReport id={currentProject[0].id}/>
                    </Tab>
                    </Tabs>
                    </div>
                )
                :
                (
                (currentProject && currentProject[0].members.some(member=>member.userId===auth.uid))?
                (
                    <div style={{alignContent:"center",textAlign:"center"}}>
                    <h2>Project Dashboard</h2>
                    <Tabs defaultActiveKey="you" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                      <h1>Important Details</h1>
                      <h2>{currentProject[0].title}</h2>
                      <h3>Members</h3>
                      {currentProject[0].members.map(member=>{
                         return <Card style={{height:"30%"}} key={member.id}>
                              <Card.Img variant="top" src={member.photoURL}/>
                              <Card.Body>
                                <Card.Title>{member.displayName}</Card.Title>
                                <Card.Text>{member.userId}</Card.Text>
                              </Card.Body>
                                </Card>
                      })}
                    </Tab>
                    <Tab eventKey="announcements" title="Announcements">
                        <MessageBoard id={currentProject[0].id}/>       
                    </Tab>
                    <Tab eventKey="assignTask" title="Assigned Tasks">
                        <AssignedTasks id={currentProject[0].id}/>
                    </Tab>
                    </Tabs>
                    </div>
                    
                    )
                    :
                    (
                    <h1>Not Authorized To Access Project</h1>
                    )
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
        currentProject: state.projects
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCurrentPoject: (id)=>dispatch(getCurrentProject(id)),
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect((ownProps)=>{
    return [
        {
        collection: 'projects',
        doc:ownProps.match.params.id,
        storeAs: 'projects'
    },{
        collection: 'users'
    }
    ]  
}))(ProjectDashboard);