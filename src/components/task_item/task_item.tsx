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
import { useState } from 'react';

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
  complated: boolean
}

export const TaskItem = ({task, complated} : propsType) => {

  const dispatch = useDispatch();
  const [active, setActive] = useState(false)
    return (
        <motion.div
              {...variants}>
            <Card sx={{display: 'flex', minWidth: 'fit-content', justifyContent: 'space-between', margin: '10px 0 0 0', background: '#D5D1D0'}}>
              <Tooltip title="Done" placement="left">
                <IconButton onClick={() => dispatch(setStatusAC(task.id))}>
                  <CheckIcon fontSize={'large'} sx={{color: task.completed? '#d32f2f' : '' ,}}/>
                </IconButton>
              </Tooltip>
              <RenameInput 
                active={active}
                setActive={setActive}
                header={task.header} 
                taskId={task.id}
                complated={complated}
              />
              <Card sx={{display: 'flex', minWidth: 'fit-content', justifyContent: 'space-around', background: 'inherit', boxShadow: 'none'}}>
              <RenameBtn setActive={setActive}/>
              <DeleteButton taskId={task.id}/>
              </Card>
            </Card>
          </motion.div>
    )
}