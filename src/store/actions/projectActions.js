export const createProject=(project)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore();
        const projectCreator=getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            createdBy: projectCreator
        }).then(()=>{
            dispatch({type: 'ADD_PROJECT_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'ADD_PROJECT_ERROR',err})
        })
    }
}

export const getCurrentProject=(id)=>{
    //console.log(id,"from dispatch");
    return (dispatch)=>{
        dispatch({
            type:'GOT_CURRENT_PROJECT',
            id
        })
    }
}