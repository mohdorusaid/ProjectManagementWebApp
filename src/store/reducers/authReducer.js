const initialState={

}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SIGNIN_SUCCESS':
            console.log('sign in success');
            return {
                ...state
            }
        
        case 'SIGNIN_ERR':
            console.log('sign in error');
            return {
                ...state
            }
        case 'SIGN_OUT':
            console.log('signout success');
            return{
                ...state
            }
        default:
            return state;
    }
}

export default authReducer;