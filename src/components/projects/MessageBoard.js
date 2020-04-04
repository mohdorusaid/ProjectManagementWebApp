import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createMessage } from '../../store/actions/messageActions';



class MessageBoard extends React.Component{
    state={
        message:'',
        sender:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createMessage(this.state);
        console.log(this.state);
    }


    render(){
        const {messages}=this.props;
        console.log(this.props);
        return(
            <Container>
                {messages && messages.map(messageInd=>{
                    return(
                        <div key={messageInd.id}>
                         <h1>Message by:-{messageInd.sender}</h1>
                         <p>{messageInd.message}</p>
                        </div>
                    )
                })}
                <div style={{position:"absolute",bottom:"0",textAlign:"center"}}>
                    <Form>
                        <Form.Group controlId="message">
                            <Form.Control type="text" placeholder="Write" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button type="submit" color="primary" onClick={this.handleSubmit}>Send</Button>
                    </Form>
                </div>
            </Container>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        messages: state.firestore.ordered.currentMessages
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createMessage: (message)=>dispatch(createMessage(message))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect((ownProps)=>{
    return [
        {
            collection:'projects',
            doc: ownProps.id,
            storeAs: 'currentMessages',
            subcollections:[
                {
                    collection: 'messages'
                }
            ]
        }
    ]
}))(MessageBoard);