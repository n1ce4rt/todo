
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';
import { setNewTaskAC } from '../../reducers/tasks-reducer';
import { rootReducerType } from '../../store/store-redux';


type propsType = {
    header: string
    setNewTask: (header: string) => void
}

export const AddButton = ({header, setNewTask} : propsType) => {
    
    const dispatch = useDispatch();
    const tasks = useSelector((state: rootReducerType) => state.tasks)
    // useEffect(()=> {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // },[])
    
    return (
        <Button variant="contained" size='large'
            onClick={()=> {
                dispatch(setNewTaskAC({header: header, id: v1(), status: 'progress'}))
                setNewTask('')
                localStorage.setItem('tasks', JSON.stringify(tasks))

            }}
            disabled={header === ''}
        >Add task</Button>
    )
}