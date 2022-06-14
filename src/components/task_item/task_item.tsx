import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';
import { Card } from '@mui/material';
import { DeleteButton } from '../delete_button/delete_button';
import { setStatusAC, taskType } from '../../reducers/tasks-reducer';
import { useDispatch } from 'react-redux';
import { RenameInput } from '../rename_input/rename_input';
import { RenameBtn } from '../rename_btn/rename_btn';

const variants = {
  initial: {
    opacity: 0,
    height: 0
  },
  animate: {
    opacity: 1,
    height: 'auto',
  },
  exit: {
    opacity: 0,
    height: 0
  }
}

type propsType = {
  task: taskType
}

export const TaskItem = ({task} : propsType) => {

  const dispatch = useDispatch();

    return (
        <motion.div
              {...variants}>
            <Card sx={{display: 'flex', minWidth: 'fit-content', justifyContent: 'space-between', margin: '10px 0 0 0', background: '#D5D1D0'}}>
              <Tooltip title="Done" placement="left">
                <IconButton sx={{width: '55px'}} onClick={() => dispatch(setStatusAC(task.id))}>
                  <CheckIcon fontSize={'large'} sx={{color: task.status === 'done'? '#922858' : '' ,}}/>
                </IconButton>
              </Tooltip>
              <RenameInput 
                header={task.header} 
                taskId={task.id}
              />
              <DeleteButton taskId={task.id}/>
            </Card>
          </motion.div>
    )
}