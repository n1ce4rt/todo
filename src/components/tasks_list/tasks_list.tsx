
import Box from '@mui/material/Box';
import { rootReducerType } from '../../store/store-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '@mui/material';
import { DeleteButton } from '../delete_button/delete_button';
import { filterType, setStatusAC, taskType } from '../../reducers/tasks-reducer';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CheckIcon from '@mui/icons-material/Check';


export const TasksList = () => {
    const tasks = useSelector((state: rootReducerType): Array<taskType> => state.tasks.tasks)
    const filter = useSelector((state: rootReducerType): filterType  => state.tasks.filter)
    const dispatch = useDispatch()

    let filterTasks = tasks.filter((task: any) => task)
    if (filter !== 'all') {
      filterTasks = tasks.filter((task: any) => task.status === filter)
    }
    
  return (
    <Box sx={{ flexGrow: 1}}>
        {filterTasks.map((task: any) => {
            return (
                <Card key={task.id} sx={{display: 'flex', minWidth: 'fit-content', justifyContent: 'space-between', margin: '10px 0 10px 0', background: '#D5D1D0'}}>
                <Tooltip title="Done">
                  <IconButton sx={{width: '55px'}} onClick={() => dispatch(setStatusAC(task.id))}>
                    <CheckIcon fontSize={'large'} sx={{color: task.status === 'done'? '#922858' : '' ,}}/>
                  </IconButton>
                </Tooltip>
                    <p>{task.header}</p>
                    <DeleteButton taskId={task.id}/>
                    </Card>
            )
        })}
    </Box>
  );
}