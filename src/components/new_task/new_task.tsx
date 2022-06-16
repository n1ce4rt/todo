import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setNewTaskAC, taskType } from '../../reducers/tasks-reducer';
import { AddButton } from '../add_button/add_button';
import { v1 } from 'uuid';
import { rootReducerType } from '../../store/store-redux';
import { setStatusAC } from '../../reducers/app-reducer';



export const NewTask = () => {
  const tasks = useSelector((state : rootReducerType): taskType[] => state.tasks.tasks)
  
  const [newTask, setNewTask] = React.useState('');
  const dispatch = useDispatch();

  

  const comparison = (task: taskType) => {
    return task.header === newTask
    
  }
  
  const onClickHandler = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if(tasks.some(comparison)) {
        dispatch(setStatusAC(true))
      } else {
        dispatch(setNewTaskAC({header: newTask, id: v1(), completed: false}))
        setNewTask('')
      }
    }
  }

  return (

    <Box
      component="form"
      sx={{
        display: 'flex', 
        justifyContent: 'space-between', 
        margin: '10px 0 0'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{
          '& label.Mui-focused': {
            color: '#2CA5A9',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#2CA5A9',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#2CA5A9',
            },
            '&:hover fieldset': {
              borderColor: '#013F56',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2CA5A9',
            },
          },
        }}
        id="outlined-basic" label="Input new task" variant="outlined"
        onKeyPress={(e) => onClickHandler(e)}
        onChange={(e) => {
          e.preventDefault()
          setNewTask(e.currentTarget.value)
        }}
        value={newTask}
      />

      <AddButton
        setNewTask={setNewTask}
        newTask={newTask}
      />
    </Box>
  );
}