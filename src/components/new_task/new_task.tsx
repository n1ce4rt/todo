import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setNewTaskAC } from '../../reducers/tasks-reducer';
import { AddButton } from '../add_button/add_button';
import { v1 } from 'uuid';
import { rootReducerType } from '../../store/store-redux';



export const NewTask = () => {


    const [newTask, setNewTask] = React.useState('');
    const dispatch = useDispatch();
    const tasks = useSelector((state: rootReducerType) => state.tasks)
    const newOne = {
      header: newTask,
      id: v1(),
      status: false
  }

  return (
    <Box
      component="form"
      sx={{ display: 'flex' , justifyContent: 'space-between', margin: '10px 0 10px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
      id="outlined-basic" label="Input new task" variant="outlined" 
          onKeyPress={(e) => {
            if(e.key === 'Enter') {
                e.preventDefault()
                dispatch(setNewTaskAC({header: newTask, id: v1(), status: 'progress'}))
                // localStorage.setItem('tasks', JSON.stringify(tasks))
                setNewTask('')
            }
          }}
          onChange={(e)=> {
            e.preventDefault()
            setNewTask(e.currentTarget.value)
          
          }}
          value={newTask}
          onReset={()=> true}
          />

      <AddButton
        setNewTask={setNewTask}
        header={newTask}
      />
    </Box>
  );
}