import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setNewTaskAC, taskType } from '../../reducers/tasks-reducer';
import { AddButton } from '../add_button/add_button';
import { v1 } from 'uuid';



export const NewTask = () => {

  const [newTask, setNewTask] = React.useState('');
  const dispatch = useDispatch();
  const task: taskType = {
    header: newTask,
    id: v1(),
    status: 'progress',
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
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            dispatch(setNewTaskAC(task))
            setNewTask('')
          }
        }}
        onChange={(e) => {
          e.preventDefault()
          setNewTask(e.currentTarget.value)

        }}
        value={newTask}
      />

      <AddButton
        setNewTask={setNewTask}
        header={newTask}
      />
    </Box>
  );
}