export const createUser=(user)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('users').add({
            ...user
        }).then(()=>{
            dispatch({
                type:'ADD_USER_SUCCESS'
            })
        }).catch((err)=>{
            dispatch({
                type:'ADD_USER_ERROR',
                err
            })
        })
        //console.log(user);
        
    }
}