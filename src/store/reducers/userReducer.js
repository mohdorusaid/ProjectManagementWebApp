const initialState={

}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_USER_SUCCESS':
            console.log('added user')
            return{
                ...state
            }
        case "ADD_USER_ERROR":
            console.log('add user error')
            return{
                ...state
            }
        default:
            return state
    }
}

export default userReducer;