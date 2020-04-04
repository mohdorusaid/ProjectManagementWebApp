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
        case 'COMPLETE_TODO_SUCCESS':
            console.log('complete todo success');
            return{
                ...state
            }
        case 'COMPLETE_TODO_ERROR':
            console.log('complete todo error',action.err);
            return{
                ...state
            }
        default:
            return state
    }
}

export default toDoReducer;