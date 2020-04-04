import React from 'react';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {Container, Card} from 'react-bootstrap';

class ProgressReport extends React.Component{
    render(){
        console.log(this.props);
        const { todos } =this.props;
        return(
            <Container>
                <h1>Progress Report</h1>
                {todos && todos.map(todo=>{
                   return(
                       <Card key={todo.id} style={{margin:"5px"}}>
                            <Card.Title>{todo.todo}</Card.Title>
                           <Card.Body>
                                <p>Status:{(todo.isComplete)?("Complete"):("Not Complete")}</p>
                           </Card.Body>
                       </Card>
                   )
                })}
            </Container>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        todos: state.firestore.ordered.todos
    }
}
export default compose(connect(mapStateToProps),firestoreConnect((ownProps)=>[
    {
        collection :'projects',
        doc: ownProps.id,
        storeAs: 'todos',
        subcollections: [
            {
                collection: 'todos'
            }
        ]
    }
]))(ProgressReport);