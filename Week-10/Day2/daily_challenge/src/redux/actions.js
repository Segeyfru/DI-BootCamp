export const ADDING = 'adding'
export const TOGGLE = 'toggle'
export const DELETE = 'delete'
export const EDIT = 'edit'
export const TOGGLEEDIT = 'toggleedit'


export const adding = (value) => {
    return {
        type:ADDING,
        payload:value
    }
}
export const toggle = (value) => {
    return {
        type:TOGGLE,
        payload:value
    }
}
export const deleting = (value) => {
    return {
        type:DELETE,
        payload:value
    }
}
export const edit = (value) => {
    return {
        type:EDIT,
        payload:value
    }
}
export const toggleedit = (value) => {
    return {
        type:TOGGLEEDIT,
        payload:value
    }
}