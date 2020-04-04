export const createToDo=(todo)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore();
        const currentProject= getState().projects.id;
        console.log(currentProject,todo,"from DISPTACHEZZZ");
        firestore.collection('projects').doc(currentProject).collection('todos').add({
            ...todo
        }).then(()=>{
            dispatch({
                type:'ADD_TODO_SUCCESS'
            })
        }).catch((err)=>{
            dispatch({
                type:'ADD_TODO_ERROR',
                err
            })
        })
        
    }
}

export const markComplete=(id)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore();
        const currentProject=getState().projects.id;
        firestore.collection('projects').doc(currentProject).collection('todos').doc(id).set(
            {isComplete: true},{merge: true}
        ).then(()=>{
            dispatch({
                type: 'TODO_COMPLETE_SUCCESS'
            })
        }).catch((err)=>{
                dispatch({
                    type:'TODO_COMPLETE_ERROR',
                    err
                })
            })
    }
}