// import {authAPI} from "../api/Api";
// import {setStatusAC} from "./App-reducer";
// import {Dispatch} from "redux";



export type statusType = 'done' | 'progress'
export type filterType = 'all' | 'done' | 'progress'
export type taskType = {
    id: string,
    header: string
    status: statusType
}
export type initialStateType = {
    tasks: Array<taskType>
    filter: filterType
}
const initialState: initialStateType = {
    tasks: [],
    filter: 'all'
}

export const tasks_reducer = (state: initialStateType = initialState, action: actionType): initialStateType => {

    switch (action.type) {

        case 'SET_NEW_TASK':
            
            return {...state, tasks: [...state.tasks, action.task] }

        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter((task) => task?.id !== action.taskId)}

        case 'GET_TASKS' : 
            debugger
            return {...action.tasks}

        case 'SET_FILTER' :

            return {...state, filter: action.filter}
        
        case 'SET_STATUS' : 
            debugger
            return {...state, tasks: state.tasks.map((task) => task.id === action.taskId ? {...task, status: task.status === 'done' ? 'progress' : 'done'} : {...task})}

        default:
            return state
    }


}
export const setNewTaskAC = (task: taskType): setNewTaskACType => ({type: 'SET_NEW_TASK', task} as const)
export const deleteTaskAC = (taskId: string): deleteTaskACType => ({type: 'DELETE_TASK', taskId} as const)
export const getTaskListAC = (tasks : initialStateType): getTaskListACType => ({type: 'GET_TASKS', tasks} as const)
export const setStatusAC = (taskId: string): setStatusACType => ({ type: 'SET_STATUS', taskId} as const)
export const setFilterAC = (filter: filterType) :setFilterACType => ({type: 'SET_FILTER', filter} as const)

export type actionType = setNewTaskACType | deleteTaskACType | getTaskListACType | setFilterACType | setStatusACType;

export type setStatusACType = {
    type: 'SET_STATUS', 
    taskId: string
}
export type setFilterACType = {
    type: 'SET_FILTER', 
    filter: filterType
}

export type setNewTaskACType = {
    type: 'SET_NEW_TASK'
    task: taskType

}
export type deleteTaskACType = {
    type: 'DELETE_TASK'
    taskId: string
}

export type getTaskListACType = {
    type: 'GET_TASKS'
    tasks: initialStateType
}

































// export const authMeTC = (login: string, password: string, isAuth: boolean) => {
//     return (dispatch: Dispatch) => {
//             dispatch(setStatusAC('loading'))
//     authAPI.authMe(login, password, isAuth).then((response) => {

//         authAPI.auth().then((response) => {
//             if (response.login !== null && response.login === 'Arthur') {
//                 dispatch(authMeAC(response.login, response.password, response.isAuth))
//                 dispatch(setStatusAC('nice'))
//             } else {
//                 dispatch(authMeAC('', '', false, 'Неправильный логин или пароль!'))
//                 dispatch(setStatusAC("nice"))
//             }

//         });
//     })



//     }
// }
