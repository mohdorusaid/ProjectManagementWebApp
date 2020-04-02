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