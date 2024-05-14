import { act } from "react";
import { DELETE, ADD, UPDATE } from "./actions";

const initialState = {
    days: [
        {
            date: '2024-05-14', tasks: [
                { id: 0, name: 'Daily Challenge', isComplited: false, },
            ],
        },
    ]
}
console.log(initialState);
let id = 1;
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD:
            console.log('ADD');
            const newDays = state.days.map(day => {

                if (day.date == action.date) {
                    console.log("ADD you have this date");
                    console.log(day);
                    const updatedDay = [...day.tasks]
                    console.log(updatedDay);
                    updatedDay.push({ id, name: action.name, isComplited: action.isComplited })
                    return { ...day, tasks: updatedDay }
                };
                return day;
            });
            if (!newDays.some(day => day.date === action.date)) {
                console.log("ADD don`t have this date");
                newDays.push({ date: action.date, tasks: [{ id, name: action.name, isComplited: action.isComplited }] })
            }
            id++;
            console.log({ ...state, days: newDays });
            return { ...state, days: newDays };

        case DELETE:
            const afterDelete = state.days.map(day => {
                const spliceTask = day.tasks.filter(item => item.id !== action.id)
                return { ...day, tasks: spliceTask }
            })

            return { ...state, days: afterDelete };

        case UPDATE:
            const updatedTasks = state.days.map(day => {
                const updateTask = day.tasks.map(task => {
                    if (task.id === action.id) {
                        console.log('hi');
                        return { ...task, isComplited: action.isComplited } //maybe have to change here to !action.isComplited
                    }
                    return task
                })
                return { ...day, tasks: updateTask }
            })

            return { ...state, days: updatedTasks };

        default:
            return state;
    }
}