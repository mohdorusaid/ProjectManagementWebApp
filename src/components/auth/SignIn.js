import firebase from 'firebase';
import React from 'react';
import { Button, Container} from 'react-bootstrap';
import 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
//import { Redirect } from 'react-router-dom';

class SignIn extends React.Component{
    state = { 
      isSignedIn: false,
      userNow: null 
    }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }

    handleClick=(e)=>{
      console.log(this.state,this.props.admins);
    }
  
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ 
          isSignedIn: !!user,
           })
      })
    }
    render(){
          return (
          <Container>
              <div className="center">
            {this.state.isSignedIn ? (
              <span className="center">
                <div>Signed In!</div>
                <h5>{this.state.userNow}</h5>
                {/*<Redirect to="/projects"/>*/}
                <Button color="primary" variant="dark" onClick={() => firebase.auth().signOut()}>Sign out!</Button>
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
            </div>
          </Container>
        )
      }

}

const mapStateToProps=(state)=>{
  return{
    admins: state.firestore.ordered.projects
  }
}

export default compose(connect(mapStateToProps),firestoreConnect([
  {
      collection: 'projects'
  }
]))(SignIn);