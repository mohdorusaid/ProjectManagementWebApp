const projectReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD_PROJECT_SUCCESS':
            console.log('created project success')
            return{
                ...state
            }
        case 'ADD_PROJECT_ERROR':
            console.log('create project error');
            return{
                ...state
            }
        case 'GOT_CURRENT_PROJECT':
            console.log('got current project');
            return{
               id: action.id
            }
        default:
            return state;
    }
}

export default projectReducer;