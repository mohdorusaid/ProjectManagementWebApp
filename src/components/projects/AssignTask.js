import React from 'react';
import { Form, Button } from 'react-bootstrap';

class AssignTask extends React.Component{
    state={
        todo:'',
        user:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSelect=(e)=>{
        this.setState({
            user: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }


    render(){
       const { users }= this.props;
        return(
            <Form>
                <Form.Group controlId="todo">
                    <Form.Label>Task </Form.Label>
                    <Form.Control type="text" placeholder="Write task.." onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="user">
                    <Form.Label>Assign To</Form.Label>
                    <Form.Control as="select" onChange={this.handleSelect}>
                        {users && users.map(user=>{
                            return(
                              <option key={user.id} value={user.userId}>{user.userId}</option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>  
        )
    }
}

export default AssignTask;