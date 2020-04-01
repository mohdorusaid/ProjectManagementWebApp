
export const createUser=(user)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('appUsers').add({
            ...user
        }).then(()=>{
            dispatch({
                type:'ADD_USER_SUCCESS',
                user
            })
        }).catch((err)=>{
            dispatch({
                type:'ADD_USER_ERROR',
                err
            })
        })
    }
}