
import Button from '@mui/material/Button';
import { useDispatch, useSelector} from 'react-redux';
import { v1 } from 'uuid';
import { setStatusAC } from '../../reducers/app-reducer';
import { setNewTaskAC, taskType } from '../../reducers/tasks-reducer';
import { rootReducerType } from '../../store/store-redux';


type propsType = {
    newTask: string
    setNewTask: (header: string) => void
}

export const AddButton = ({newTask, setNewTask} : propsType) => {
    
    const dispatch = useDispatch();
    const tasks = useSelector((state: rootReducerType) : taskType[] => state.tasks.tasks)
    const status = useSelector((state: rootReducerType) : boolean => state.status.status)


    const comparison = (task: taskType) => {
        return task.header === newTask
        
      }
      
      const onClickHandler = () => {
    
          if(tasks.some(comparison)) {
            dispatch(setStatusAC(true))
          } else {
            dispatch(setNewTaskAC({header: newTask, id: v1(), status: 'progress'}))
            setNewTask('')
          }
          
      }
    
   
    return (
        <Button 
            variant="contained" 
            size='large'
            sx={{backgroundColor: '#2CA5A9',
                    '&:hover': {
                        backgroundColor: '#013F56'
                    }
                }}
            onClick={()=> onClickHandler()}
            disabled={newTask === '' || status}
        >Add task</Button>
    )
}