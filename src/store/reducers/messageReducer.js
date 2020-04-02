const messageReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD_MESSAGE_SUCCESS':
            console.log('add message success');
            return {
                ...state
            }
        case 'ADD_MESSAGE_ERROR':
            console.log('add message error')
            return{
                ...state
            }
        default:
            return state;
    }
}

export default messageReducer;