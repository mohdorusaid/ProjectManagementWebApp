const toDoReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD_TODO_SUCCESS':
            console.log('add todo success');
            return {
                ...state
            }
        case 'ADD_TODO_ERROR':
            console.log('add todo error',action.err);
            return{
                ...state
            }
        default:
            return state
    }
}

export default toDoReducer;