import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
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
            <div>
                <div className="message-center" style={{height:"80%",overflow:"scroll",position:'absolute',width:"100%"}}>
                {messages && messages.map(messageInd=>{
                    return(
                        <Card key={messageInd.id} style={{margin:"5px"}}>
                        <Card.Title>
                            <h4>{messageInd.sender}</h4>
                        </Card.Title>
                        <Card.Body>
                            {messageInd.message}
                        </Card.Body>
                        </Card>
                    )
                })}
                </div>
                <div style={{position:"absolute",bottom:"0",textAlign:"center"}}>
                    <Form inline>
                        <Form.Group controlId="message">
                            <Form.Control type="text" placeholder="Write" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button type="submit" color="primary" onClick={this.handleSubmit} style={{marginLeft:"20px"}}>Send</Button>
                    </Form>
                </div>
                </div>
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