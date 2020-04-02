export const createMessage=(currentMessage)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore();
        const id=getState().projects.id;
        firestore.collection('projects').doc(id).collection('messages').add({
            message: currentMessage.message,
            sender: getState().firebase.auth.displayName
        }).then(()=>{
            dispatch({
                type: 'ADD_MESSAGE_SUCCESS'
            })
        }).catch((err)=>{
            dispatch({
                type: 'ADD_MESSAGE_ERROR',
                err
            })
        })
    }
}