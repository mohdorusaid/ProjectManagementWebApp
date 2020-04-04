import React from 'react';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';

class ProgressReport extends React.Component{
    render(){
        console.log(this.props);
        const { todos } =this.props;
        return(
            <Container>
                <h1>Progress Report</h1>
                {todos && todos.map(todo=>{
                   return <div key={todo.id}>
                    <h1>Todo assigned to: {todo.user}</h1>
                    <h2>Todo: {todo.todo}</h2>
                    <h3>Status: {todo.isComplete?("Complete"):("Not Complete")}</h3>
                    </div>
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