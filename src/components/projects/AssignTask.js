import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { createToDo } from '../../store/actions/toDoActions';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

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
        this.props.createToDo(this.state);
        console.log(this.state);

    }


    render(){
       const { users }= this.props;
       //console.log(this.props);
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
                              <option key={user} value={user}>{user}</option>
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

const mapDispatchToProps=(dispatch)=>{
    return {
        createToDo: (todo)=>dispatch(createToDo(todo))
    }
}


export default compose(connect(null,mapDispatchToProps),firestoreConnect([{
    collection: 'appUsers'
}]))(AssignTask);