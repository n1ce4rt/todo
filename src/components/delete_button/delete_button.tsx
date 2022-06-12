import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTaskAC } from '../../reducers/tasks-reducer';



type propsType = {
    taskId: string
}
export const DeleteButton= ({taskId}: propsType) => {


    const dispatch = useDispatch();
    return (
        <Button sx={{ padding: '5px',color: '#922858', borderColor: '#922858', '&:hover' : { borderColor: '#922858'}}} variant="outlined" startIcon={<DeleteIcon />}
        
        onClick={()=> {
            dispatch(deleteTaskAC(taskId))
        }}
        ></Button>
    )
}