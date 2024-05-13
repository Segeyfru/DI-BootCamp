export const TEXT = 'text'

export const changeText = (val) =>{
    return {
        type: TEXT,
        payload:val
    }
}