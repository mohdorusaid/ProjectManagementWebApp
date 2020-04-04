import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { markComplete } from '../../store/actions/toDoActions';


class AssignedTasks extends React.Component{

    handleClick=(e)=>{
        console.log(e.target.id);
        this.props.markComplete(e.target.id);
    }


    render(){
        const {auth,todos}=this.props;
        console.log(this.props);
        return(
            <Container>
                {
                (todos && auth && todos.map(todo=>{
                  return (todo.user===auth.uid)?
                  (
                      (todo.isComplete)?(
                          <div key={todo.id}>
                              <h1>{todo.todo}</h1>
                          </div>
                      ):(
                          <div key={todo.id}>
                              <h1>{todo.todo}</h1>
                              <Button id={todo.id} onClick={this.handleClick}>Mark As Complete</Button>
                          </div>
                      )
                  ):
                  (
                      null
                  )  
                }))
                }
            </Container>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        todos: state.firestore.ordered.todos,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        markComplete: (id)=>dispatch(markComplete(id))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect((ownProps)=>[{
    collection: 'projects',
    doc: ownProps.id,
    storeAs: 'todos',
    subcollections:[
        {
            collection: 'todos'
        }
    ]
}
]))(AssignedTasks);