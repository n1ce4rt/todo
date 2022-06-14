
import Button from '@mui/material/Button';
import { useDispatch} from 'react-redux';
import { v1 } from 'uuid';
import { setNewTaskAC } from '../../reducers/tasks-reducer';


type propsType = {
    header: string
    setNewTask: (header: string) => void
}

export const AddButton = ({header, setNewTask} : propsType) => {
    
    const dispatch = useDispatch();
   
    
    return (
        <Button variant="contained" size='large'
        sx={{backgroundColor: '#2CA5A9',
                '&:hover': {
                    backgroundColor: '#013F56'
                }
            }}
            onClick={()=> {
                dispatch(setNewTaskAC({header: header, id: v1(), status: 'progress'}))
                setNewTask('')
                

            }}
            disabled={header === ''}
        >Add task</Button>
    )
}