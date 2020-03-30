import React from 'react';
import { Container } from 'react-bootstrap';
import UsersList from './UsersList';

class ProjectDashboard extends React.Component{
    render(){
        return(
            <div className="center">
                <Container>
                    <h1>Project Dashboard</h1>
                    <div>
                    Welcome!
                    {console.log(this.props)}
                    </div>
                    <div>
                        <UsersList/>
                    </div>
                </Container>
            </div>
        )
    }
}

export default ProjectDashboard;