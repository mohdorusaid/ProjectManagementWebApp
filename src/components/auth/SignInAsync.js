import React from 'react';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {signInWithGoogle,SignOut} from '../../store/actions/authActions';
import { Link  } from 'react-router-dom';

class SignInAsync extends React.Component{
    state={
        isSignedIn: false,
        user: null
    }

    handleSignOut=(e)=>{
        this.props.signOut();
    }
    handleSignIn=(e)=>{
        //sign in
        this.props.signIn();
    }

    render(){
        const { auth } =this.props;
        return(
            <div style={{textAlign:"center"}}>
                {console.log(this.props)}
                {(auth.uid)?(
                    <div>
                    <h1>Signed In!</h1>
                    <Button onClick={this.handleSignOut}>Sign Out!</Button>
                    <Link to="/projects">Go To projects</Link>
                    </div>
                ):(
                    <Button onClick={this.handleSignIn}>Sign In With Google</Button>
                )}
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signIn: ()=>dispatch(signInWithGoogle()),
        signOut: ()=>dispatch(SignOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInAsync);