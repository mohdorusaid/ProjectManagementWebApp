import React from 'react';
import { Container } from 'react-bootstrap';
import {connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


class MessageBoard extends React.Component{
    render(){
        const {messages}=this.props;
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
            </Container>
        )
    }
}


export default (MessageBoard);