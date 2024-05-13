export const ADD ='ADD'
export const DELETE ='DELETE'
export const UPDATE ='UPDATE'

export const addTask = ({name,isComplited}) =>{
    return {
        type: ADD,
        name,
        isComplited,

    }
};

export const deleteTask = ({id}) =>{
    return {
        type: DELETE,
        id,

    }
};

export const updateTask = ({isComplited,id}) =>{
    return {
        type: UPDATE,
        isComplited,
        id,

    }
}