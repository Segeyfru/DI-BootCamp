export const ADD ='ADD'
export const DELETE ='DELETE'
export const UPDATE ='UPDATE'

export const addTask = ({name,isComplited,date}) =>{
    return {
        type: ADD,
        name,
        isComplited,
        date

    }
};

export const deleteTask = ({id}) =>{
    return {
        type: DELETE,
        id,

    }
};

export const updateTask = ({isComplited,id,date}) =>{
    return {
        type: UPDATE,
        isComplited:!isComplited,
        id,
        date,

    }
}