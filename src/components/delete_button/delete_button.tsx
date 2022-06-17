import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTaskAC } from '../../reducers/tasks-reducer';
import Tooltip from '@mui/material/Tooltip';


type propsType = {
    taskId: string
}
export const DeleteButton= ({taskId}: propsType) => {

   
    const dispatch = useDispatch();
    return (
        <IconButton 
        aria-label="delete"
        color='error'
        onClick={()=> dispatch(deleteTaskAC(taskId))}>
            <Tooltip sx={{width: '40px'}} title="Delete" placement="right">
                <DeleteIcon fontSize='medium'/>
            </Tooltip>
        </IconButton>
    )
}